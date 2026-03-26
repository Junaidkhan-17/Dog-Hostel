import "./WhyChooseSection.css";
import img88 from "../../assets/img88.png";

const points = ["Trusted & Registered", "Experienced Caretakers", "Safe Environment"];

function WhyChooseSection() {
  return (
    <section className="section-space">
      <div className="container">
        <div className="row g-4 align-items-center">
          <div className="why col-lg-6">
            <h2>Why Choose Us</h2>
            <p className="text-muted">
              We blend care, discipline, and safety to deliver a premium pet care experience.
            </p>
            <ul className="choose-list ps-0">
              {points.map((point) => (
                <li key={point}>
                  <i className="bi bi-check-circle-fill" /> {point}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-lg-6">
            <img
              src={img88}
              className="img-fluid choose-image"
              loading="lazy"
              alt="Dog safety and care"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseSection;
