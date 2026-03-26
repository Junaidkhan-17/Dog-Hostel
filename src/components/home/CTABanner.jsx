import { Link } from "react-router-dom";
import { businessInfo } from "../../data/businessData";
import "./CTABanner.css";

function CTABanner() {
  return (
    <section className="section-space pt-0">
      <div className="container">
        <div className="cta-banner text-center text-white">
          <h3 className="mb-3">Need trusted care for your dog or cat?</h3>
          <p className="mb-4">Book premium boarding and care services with {businessInfo.name}.</p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <Link to="/contact" className="btn door-btn">
              Book Now
            </Link>
            <a href={`tel:${businessInfo.phone}`} className="btn btn-outline-light">
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTABanner;
