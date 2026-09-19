import "./GeneratingLoader.css";

const LETTERS = "Generating".split("");

export function GeneratingLoader() {
  return (
    <div className="generating-loader" role="status" aria-label="Generating">
      {LETTERS.map((letter, i) => (
        <span key={i} className="generating-loader__letter">
          {letter}
        </span>
      ))}
      <div className="generating-loader__ring" aria-hidden="true" />
    </div>
  );
}
