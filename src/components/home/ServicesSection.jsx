import { services } from "../../data/businessData";
import ServiceCard from "./ServiceCard";
import "./ServicesSection.css";

function ServicesSection() {
  return (
    <section className="section-space">
      <div className="container">
        <div className="section-title-wrap text-center mb-5">
          <h2>Our Professional Services</h2>
          <p className="text-muted">Complete care solutions for your pets under one trusted roof.</p>
        </div>
        <div className="row g-4">
          {services.map((service) => (
            <div className="col-md-6 col-lg-4" key={service.title}>
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
