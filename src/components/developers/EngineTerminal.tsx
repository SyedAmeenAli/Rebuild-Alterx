import "./EngineTerminal.css";

const LINES = ["intent   received", "plan     ordered", "bind     resolved", "execute  running"];

export function EngineTerminal() {
  return (
    <div className="engine-terminal">
      <div className="engine-terminal__toolbar">
        <div className="engine-terminal__dots" aria-hidden="true">
          <span className="engine-terminal__dot engine-terminal__dot--live" />
          <span className="engine-terminal__dot" />
          <span className="engine-terminal__dot" />
        </div>
        <span className="engine-terminal__label">alterx@engine</span>
      </div>
      <div className="engine-terminal__body">
        {LINES.map((line) => (
          <div key={line} className="engine-terminal__line">
            <span className="engine-terminal__prompt">$</span> <span className="engine-terminal__path">status</span> — {line}
          </div>
        ))}
        <div className="engine-terminal__line">
          <span className="engine-terminal__prompt">$</span>
          <span className="engine-terminal__cursor" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}
