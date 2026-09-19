import "./ClickReveal.css";

export function ClickReveal({ label, copy }: { label: string; copy: string }) {
  return (
    <div className="click-reveal" aria-hidden="true">
      <div className="click-reveal__box">
        <span className="click-reveal__box-label">{label}</span>
        <p className="click-reveal__box-copy">{copy}</p>
      </div>
      <div className="click-reveal__cursor">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M4 2L20 9.5L12.5 11.5L9.5 19L4 2Z"
            fill="#9FFFC0"
            stroke="#06110B"
            strokeWidth="1.2"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}
