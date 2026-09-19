import "./HoverConcepts.css";

const CONCEPTS = [
  { label: "Objectives", copy: "Start from the outcome, not the steps." },
  { label: "Verification", copy: "Results are checked before they're trusted." },
  { label: "Recovery", copy: "Failure is classified, then handled." },
];

export function HoverConcepts() {
  return (
    <div className="hover-concepts">
      {CONCEPTS.map((c) => (
        <div key={c.label} className="hover-concepts__panel">
          <span className="hover-concepts__label">{c.label}</span>
          <span className="hover-concepts__copy">{c.copy}</span>
        </div>
      ))}
    </div>
  );
}
