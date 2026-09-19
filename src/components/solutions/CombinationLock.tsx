import "./CombinationLock.css";

const DIGITS = Array.from({ length: 10 }, (_, i) => i);

function Dial({ wheel, defaultDigit }: { wheel: string; defaultDigit: number }) {
  return (
    <div className="combination-lock__dial">
      <div className="combination-lock__nonagon">
        {DIGITS.map((d) => (
          <div key={d} className={`combination-lock__face combination-lock__face-${d}`}>
            <input
              type="radio"
              name={wheel}
              className={`combination-lock__radio combination-lock__radio-${d}`}
              defaultChecked={d === defaultDigit}
              aria-label={`${wheel} digit ${d}`}
            />
            <span>{d}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function CombinationLock() {
  return (
    <div className="combination-lock" role="group" aria-label="Access lock">
      <Dial wheel="lock-wheel-1" defaultDigit={3} />
      <Dial wheel="lock-wheel-2" defaultDigit={2} />
      <Dial wheel="lock-wheel-3" defaultDigit={7} />
    </div>
  );
}
