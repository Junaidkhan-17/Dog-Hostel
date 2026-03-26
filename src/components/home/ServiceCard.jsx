import "./ServiceCard.css";

function ServiceCard({ service }) {
  return (
    <article className="service-card glass-card h-100">
      <div className="icon-wrap mb-3">
        <i className={`bi ${service.icon}`} aria-hidden="true" />
      </div>
      <h5>{service.title}</h5>
      <p className="mb-0 text-muted">Handled with care, hygiene, and professional supervision.</p>
    </article>
  );
}

export default ServiceCard;
