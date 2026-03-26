import { Link } from "react-router-dom";
import { businessInfo } from "../../data/businessData";
import "./Hero.css";
import img88 from "../../assets/img88.png";

function Hero() {
  return (
    <section className="hero-section d-flex align-items-center"
    style={{
    backgroundImage: `url(${img88})`,
    backgroundSize: "cover",
    backgroundPosition: "center"
  }}>
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-lg-7">
            <span className="hero-badge">Trusted Pet Care Since {businessInfo.established}</span>
            <h1 className="display-5 fw-bold mt-3">Dog Hostel & Pet Care in Nagpur</h1>
            <p className="lead mb-4">Safe • Trusted • Professional Pet Care</p>
            <p className="lead mb-4 fw-bold mt-3">Heading out of town? Don’t let pet worries hold you back.
              At Purvi Pets, we care for your furry family like our own — safe, loving, and reliable.</p>
            <div className="d-flex flex-wrap gap-3">
              <Link to="/contact" className="btn door-btn btn-lg">
                Book Now
              </Link>
              <a href={`tel:${businessInfo.phone}`} className="btn btn-outline-light btn-lg">
                Call Now
              </a>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="hero-card glass-card">
              <h5 className="head mb-3" style={{ fontWeight: 700 }}>Quick Business</h5>
              <p className="mb-1">
                <strong>Owner:</strong> {businessInfo.owner}
              </p>
              <p className="mb-1">
                <strong>Employees:</strong> {businessInfo.employees}
              </p>
              <p className="mb-1">
                <strong>Organization:</strong> {businessInfo.organization}
              </p>
              <p className="mb-0">
                <strong>Valid Till:</strong> {businessInfo.validTill}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
