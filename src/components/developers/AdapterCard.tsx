import "./AdapterCard.css";

export function AdapterCard({
  title,
  copy,
  className = "",
}: {
  title: string;
  copy: string;
  className?: string;
}) {
  return (
    <div className={`adapter-card ${className}`}>
      <p className="adapter-card__title">{title}</p>
      <p className="adapter-card__copy">{copy}</p>
      <div className="adapter-card__corner">
        <div className="adapter-card__arrow">→</div>
      </div>
    </div>
  );
}
