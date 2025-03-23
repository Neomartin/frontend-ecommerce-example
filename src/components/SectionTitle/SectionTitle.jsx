import './SectionTitle.css';

export default function SectionTitle({ title, subtitle, mixed }) {
  return (
    <div className="section-title__wrapper">
      <h6 className="section-title__subtitle">{subtitle}</h6>
      <h2 className="section-title__title">
        {title}
        {mixed && (
          <span className="section-title__title--secondary"> {mixed}</span>
        )}
      </h2>
    </div>
  );
}
