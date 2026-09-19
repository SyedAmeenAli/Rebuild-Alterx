import "./SquareLoader.css";

export function SquareLoader() {
  return (
    <div className="square-loader" role="status" aria-label="Running">
      <div className="square-loader__square" />
      <div className="square-loader__square" />
      <div className="square-loader__square" />
      <div className="square-loader__square" />
      <div className="square-loader__square" />
      <div className="square-loader__square" />
      <div className="square-loader__square" />
    </div>
  );
}
