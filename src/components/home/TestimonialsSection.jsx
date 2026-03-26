import { testimonials } from "../../data/businessData";
import "./TestimonialsSection.css";

function TestimonialsSection() {
  return (
    <section className="section-space bg-light-subtle">
      <div className="container">
        <div className="section-title-wrap text-center mb-5">
          <h2>What Pet Parents Say</h2>
        </div>
        <div className="row g-4">
          {testimonials.map((item) => (
            <div className="col-md-6 col-lg-4" key={item.name}>
              <article className="testimonial-card h-100">
                <div className="mb-3 text-warning">
                  <i className="bi bi-star-fill" /> <i className="bi bi-star-fill" />{" "}
                  <i className="bi bi-star-fill" /> <i className="bi bi-star-fill" />{" "}
                  <i className="bi bi-star-fill" />
                </div>
                <p>{item.text}</p>
                <h6 className="mb-0">{item.name}</h6>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
