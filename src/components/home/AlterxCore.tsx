"use client";

import { useEffect, useMemo, useRef, useState, type ComponentRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

const MINT = "#5BEA99";
const MINT_HI = "#9FFFC0";
const MINT_PEAK = "#D8FFE7";
const DEEP = "#123D27";

function hasWebGL() {
  try {
    const canvas = document.createElement("canvas");
    return !!(canvas.getContext("webgl2") || canvas.getContext("webgl"));
  } catch {
    return false;
  }
}

// ---- core sphere ----

const DRAG_SENSITIVITY = 0.006;
const MAX_ANGULAR_VELOCITY = 0.09;
const DRAG_FRICTION = 0.94;

function CoreSphere({ reduced }: { reduced: boolean }) {
  const spin = useRef<THREE.Group>(null);
  const tiltGroup = useRef<THREE.Group>(null);
  const material = useRef<ComponentRef<typeof MeshDistortMaterial>>(null);
  const tilt = useRef({ x: 0, y: 0 });
  const scrollBoost = useRef(0);
  const velocity = useRef({ x: 0, y: 0 });

  useFrame((state, delta) => {
    const baseSpeed = reduced ? 0.006 : (2 * Math.PI) / 20;

    if (spin.current) {
      if (!reduced && dragState.active) {
        // direct: sphere follows the pointer while dragging
        const dy = clamp(rotDelta.y, -MAX_ANGULAR_VELOCITY, MAX_ANGULAR_VELOCITY);
        const dx = clamp(rotDelta.x, -MAX_ANGULAR_VELOCITY, MAX_ANGULAR_VELOCITY);
        spin.current.rotation.y += dy;
        spin.current.rotation.x += dx;
        velocity.current.y = dy;
        velocity.current.x = dx;
      } else if (!reduced && (Math.abs(velocity.current.x) > 0.0003 || Math.abs(velocity.current.y) > 0.0003)) {
        // released: inertia, decaying by friction each frame
        spin.current.rotation.y += velocity.current.y;
        spin.current.rotation.x += velocity.current.x;
        velocity.current.x *= DRAG_FRICTION;
        velocity.current.y *= DRAG_FRICTION;
      }
      rotDelta.x = 0;
      rotDelta.y = 0;

      // idle spin always runs underneath, so the object never looks frozen
      spin.current.rotation.y += delta * (baseSpeed * (1 + scrollBoost.current));
      spin.current.rotation.x += delta * (reduced ? 0 : baseSpeed * 0.18);
    }

    if (!reduced && !dragState.active) {
      tilt.current.x += (state.pointer.y * 0.1 - tilt.current.x) * 0.04;
      tilt.current.y += (state.pointer.x * 0.14 - tilt.current.y) * 0.04;
    } else {
      tilt.current.x += (0 - tilt.current.x) * 0.06;
      tilt.current.y += (0 - tilt.current.y) * 0.06;
    }
    if (tiltGroup.current) {
      tiltGroup.current.rotation.x = tilt.current.x;
      tiltGroup.current.rotation.z = -tilt.current.y * 0.4;
    }

    scrollBoost.current += (scrollTarget - scrollBoost.current) * 0.05;

    if (material.current) {
      const pulse = contactStrength.current * 0.05 + rippleStrength.current * 0.09;
      const targetDistort = reduced ? 0.02 : 0.045 + pulse;
      material.current.distort += (targetDistort - material.current.distort) * 0.08;
      const targetEmissive = 0.12 + contactStrength.current * 0.18 + rippleStrength.current * 0.3;
      const mat = material.current as unknown as THREE.MeshPhysicalMaterial;
      mat.emissiveIntensity += (targetEmissive - mat.emissiveIntensity) * 0.1;
    }
    contactStrength.current *= 0.94;
    rippleStrength.current *= 0.82;
  });

  return (
    <group ref={tiltGroup}>
      <group ref={spin}>
        <mesh name="alterx-core-sphere">
          <icosahedronGeometry args={[1.35, 24]} />
          <MeshDistortMaterial
            ref={material}
            color={MINT}
            emissive={DEEP}
            emissiveIntensity={0.12}
            roughness={0.22}
            metalness={0}
            transmission={0.12}
            ior={1.25}
            thickness={0.8}
            attenuationColor={MINT_HI}
            attenuationDistance={1.5}
            clearcoat={0.45}
            clearcoatRoughness={0.3}
            distort={reduced ? 0.02 : 0.045}
            speed={reduced ? 0.15 : 1.1}
          />
        </mesh>
      </group>
    </group>
  );
}

function clamp(v: number, min: number, max: number) {
  return Math.min(max, Math.max(min, v));
}

// module-level mutable state shared between the container's pointer handlers,
// the sphere and the particle layers (kept outside React state so per-frame
// updates never trigger a re-render)
let scrollTarget = 0;
const contactStrength = { current: 0 };
const rippleStrength = { current: 0 };
const dragState = { active: false, moved: false, downX: 0, downY: 0 };
const rotDelta = { x: 0, y: 0 };

// ---- particle field ----

interface Layer {
  count: number;
  radiusMin: number;
  radiusMax: number;
  speed: number;
  size: number;
  color: string;
}

function ParticleField({ reduced, mobile }: { reduced: boolean; mobile: boolean }) {
  const layers: Layer[] = useMemo(
    () => [
      { count: mobile ? 24 : 55, radiusMin: 1.7, radiusMax: 1.95, speed: 0.06, size: 0.018, color: MINT_HI },
      { count: mobile ? 16 : 40, radiusMin: 1.95, radiusMax: 2.25, speed: 0.035, size: 0.014, color: MINT },
      { count: mobile ? 10 : 25, radiusMin: 2.25, radiusMax: 2.6, speed: 0.018, size: 0.024, color: MINT_PEAK },
    ],
    [mobile]
  );

  return (
    <>
      {layers.map((layer, i) => (
        <ParticleLayer key={i} layer={layer} reduced={reduced} />
      ))}
    </>
  );
}

function ParticleLayer({ layer, reduced }: { layer: Layer; reduced: boolean }) {
  const group = useRef<THREE.Group>(null);
  const points = useRef<THREE.Points>(null);
  const { camera, raycaster, pointer } = useThree();

  const { basePositions, phases } = useMemo(() => {
    const n = layer.count;
    const base = new Float32Array(n * 3);
    const ph = new Float32Array(n);
    for (let i = 0; i < n; i++) {
      // fibonacci-ish sphere distribution + jitter so it doesn't read as a perfect shell
      const y = 1 - (i / Math.max(1, n - 1)) * 2;
      const r = Math.sqrt(Math.max(0, 1 - y * y));
      const goldenAngle = Math.PI * (3 - Math.sqrt(5));
      const theta = goldenAngle * i;
      const jitter = () => (Math.random() - 0.5) * 0.35;
      const radius = layer.radiusMin + Math.random() * (layer.radiusMax - layer.radiusMin);
      const x = Math.cos(theta) * r * radius + jitter();
      const yy = y * radius + jitter();
      const z = Math.sin(theta) * r * radius + jitter();
      base[i * 3] = x;
      base[i * 3 + 1] = yy;
      base[i * 3 + 2] = z;
      ph[i] = Math.random() * Math.PI * 2;
    }
    return { basePositions: base, phases: ph };
  }, [layer]);

  const displaced = useRef<Float32Array>(new Float32Array(basePositions.length));
  const velocities = useRef<Float32Array>(new Float32Array(basePositions.length));

  useEffect(() => {
    displaced.current = new Float32Array(basePositions);
    velocities.current = new Float32Array(basePositions.length);
  }, [basePositions]);

  useFrame((state, delta) => {
    if (!group.current) return;
    if (!reduced) {
      group.current.rotation.y += delta * layer.speed;
      group.current.rotation.x += delta * layer.speed * 0.3;
    }
    const t = clamp(scrollTarget / 1.8, 0, 1);
    const targetScale = 1 - t * 0.16;
    group.current.scale.setScalar(group.current.scale.x + (targetScale - group.current.scale.x) * 0.05);

    const geom = points.current?.geometry;
    if (!geom) return;
    const posAttr = geom.getAttribute("position") as THREE.BufferAttribute;

    // cursor point on the z=0 plane through the core, in local (pre-rotation) space is close enough
    // at this scale for a believable repulsion cue
    raycaster.setFromCamera(pointer, camera);
    const plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
    const cursor3D = new THREE.Vector3();
    const hit = raycaster.ray.intersectPlane(plane, cursor3D);

    const arr = displaced.current;
    const vel = velocities.current;
    const base = basePositions;
    const n = layer.count;

    for (let i = 0; i < n; i++) {
      const ix = i * 3;
      const bx = base[ix];
      const by = base[ix + 1];
      const bz = base[ix + 2];

      let targetX = bx;
      let targetY = by;
      let targetZ = bz;

      if (!reduced && hit) {
        const dx = bx - cursor3D.x;
        const dy = by - cursor3D.y;
        const dz = bz - cursor3D.z;
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
        const radius = 1.6;
        if (dist < radius && dist > 0.0001) {
          const falloff = 1 - dist / radius;
          const strength = falloff * falloff * (0.45 + contactStrength.current * 0.9);
          targetX += (dx / dist) * strength;
          targetY += (dy / dist) * strength;
          targetZ += (dz / dist) * strength;
        }
      }

      // spring toward target (scatter -> slow drift -> settle)
      const springK = 0.045;
      const damping = 0.88;
      vel[ix] = (vel[ix] + (targetX - arr[ix]) * springK) * damping;
      vel[ix + 1] = (vel[ix + 1] + (targetY - arr[ix + 1]) * springK) * damping;
      vel[ix + 2] = (vel[ix + 2] + (targetZ - arr[ix + 2]) * springK) * damping;
      arr[ix] += vel[ix];
      arr[ix + 1] += vel[ix + 1];
      arr[ix + 2] += vel[ix + 2];

      posAttr.setXYZ(i, arr[ix], arr[ix + 1], arr[ix + 2]);
    }
    posAttr.needsUpdate = true;
  });

  return (
    <group ref={group}>
      <points ref={points}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[basePositions, 3]} />
        </bufferGeometry>
        <pointsMaterial
          color={layer.color}
          size={layer.size}
          sizeAttenuation
          transparent
          opacity={0.85}
          depthWrite={false}
        />
      </points>
    </group>
  );
}

// ---- scroll + contact wiring ----

function SceneEvents({ onContactChange }: { onContactChange: (v: boolean) => void }) {
  const { camera, raycaster, pointer, scene } = useThree();
  const wasContact = useRef(false);

  useFrame(() => {
    raycaster.setFromCamera(pointer, camera);
    const sphere = scene.getObjectByName("alterx-core-sphere");
    if (!sphere) return;
    const hits = raycaster.intersectObject(sphere, false);
    const isContact = hits.length > 0;
    if (isContact) contactStrength.current = Math.min(1, contactStrength.current + 0.25);
    if (isContact !== wasContact.current) {
      onContactChange(isContact);
      wasContact.current = isContact;
    }
  });

  return null;
}

export function AlterxCore() {
  const [supported, setSupported] = useState<boolean | null>(null);
  const [reduced, setReduced] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [dragEnabled, setDragEnabled] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setSupported(hasWebGL());
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    setMobile(window.innerWidth < 640);
    // Coarse-pointer (touch) devices skip the drag-to-rotate interaction entirely:
    // capturing pointer events here previously blocked native page scroll over
    // the whole hero, so a touch scroll starting on the sphere never moved the page.
    const canDrag = window.matchMedia("(pointer: fine)").matches;
    setDragEnabled(canDrag);

    const onResize = () => setMobile(window.innerWidth < 640);
    window.addEventListener("resize", onResize);

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const el = containerRef.current;
        if (el) {
          const rect = el.getBoundingClientRect();
          const leaving = Math.min(1, Math.max(0, -rect.top / (rect.height * 0.6)));
          scrollTarget = leaving * 1.8;
        }
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    const el = containerRef.current;
    const onPointerDown = (e: PointerEvent) => {
      dragState.active = true;
      dragState.moved = false;
      dragState.downX = e.clientX;
      dragState.downY = e.clientY;
      rotDelta.x = 0;
      rotDelta.y = 0;
      (e.target as Element).setPointerCapture?.(e.pointerId);
    };
    const onPointerMove = (e: PointerEvent) => {
      if (!dragState.active) return;
      rotDelta.y += e.movementX * DRAG_SENSITIVITY;
      rotDelta.x += e.movementY * DRAG_SENSITIVITY;
      if (Math.hypot(e.clientX - dragState.downX, e.clientY - dragState.downY) > 4) {
        dragState.moved = true;
      }
    };
    const onPointerUp = () => {
      dragState.active = false;
      if (!dragState.moved && contactStrength.current > 0.05) {
        rippleStrength.current = 1;
      }
    };

    if (canDrag) {
      el?.addEventListener("pointerdown", onPointerDown);
      window.addEventListener("pointermove", onPointerMove);
      window.addEventListener("pointerup", onPointerUp);
    }

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onScroll);
      el?.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
    };
  }, []);

  if (supported === null) {
    return <div ref={containerRef} className="h-full w-full" />;
  }

  if (!supported) {
    return (
      <div ref={containerRef} className="relative flex h-full w-full items-center justify-center">
        <div className="alterx-core-fallback h-[62%] w-[62%] rounded-full" aria-hidden="true" />
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={`h-full w-full ${dragEnabled ? "cursor-grab touch-none active:cursor-grabbing" : ""}`}
    >
      <Canvas
        dpr={[1, mobile ? 1.25 : 1.8]}
        camera={{ position: [0.4, 0.1, 4.4], fov: 38 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.35} color={DEEP} />
        <directionalLight position={[2, 2.5, 3]} intensity={1.1} color={MINT_PEAK} />
        <pointLight position={[-2, -1, -2]} intensity={0.25} color={MINT} />

        <CoreSphere reduced={reduced} />
        <ParticleField reduced={reduced} mobile={mobile} />
        <SceneEvents onContactChange={() => {}} />
      </Canvas>
    </div>
  );
}
