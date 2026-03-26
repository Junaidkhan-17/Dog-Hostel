import { useEffect } from "react";
import { businessInfo } from "../data/businessData";
import "./About.css";
import { docsimage } from "../data/businessData";

function About() {
  useEffect(() => {
    document.title = "About | PURVI DOG HOSTEL";
  }, []);

  return (
    <section className="section-space about-page">
      <div className="container">
        <div className="text-center mb-5">
          <h1>About {businessInfo.name}</h1>
          <p className="text-muted">
            Premium, trusted, and professionally managed pet care brand in
            Nagpur.
          </p>
        </div>

        <div className="row g-4 mb-4">
          {docsimage.map((image) => (
            <div className="col-6 col-md-4" key={image.src}>
              <div className="docs-card">
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="img-fluid w-100 docs-thumb-image"
                />
                <div className="docs-popup-preview" aria-hidden="true">
                  <img src={image.src} alt={image.alt} className="docs-popup-image" />
                </div>
                <h6>{image.alt}</h6>
              </div>
            </div>
          ))}
        </div>

        <div className="row g-4 mb-4">
          <div className="col-lg-6">
            <div className="glass-card p-4 h-100">
              <h1>Business Introduction</h1>
              <p>
                {businessInfo.name} is a dedicated{" "}
                {businessInfo.type.toLowerCase()} service, focused on safety,
                comfort, hygiene, and trust for every pet.
              </p>
              <p className="mb-0">
                Established on <strong>{businessInfo.established}</strong>, we
                serve families across Nagpur with boarding, grooming, sitting,
                and complete pet support.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="glass-card p-4 h-100">
              <h1>Owner & Leadership</h1>
              <p>
                Led by <strong>{businessInfo.owner}</strong>, our operations are
                built on reliability, transparent communication, and practical
                pet handling expertise.
              </p>
              <p className="mb-0">
                Team strength: <strong>{businessInfo.employees}</strong> with
                structured care responsibility.
              </p>
            </div>
          </div>
        </div>

        <div className="row g-4 mb-4">
          <div className="col-lg-6">
            <div className="legal-card p-4 h-100">
              <h1>Registered Business</h1>
              <p>
                <strong>Organization Type:</strong> {businessInfo.organization}
              </p>
              <p>
                <strong>Sector:</strong> {businessInfo.sector}
              </p>
              <p className="mb-0">
                <strong>Registered Under:</strong>{" "}
                {businessInfo.registeredUnder}
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="legal-card p-4 h-100">
              <h1>Government Approved</h1>
              <p>
                <strong>Authority:</strong> {businessInfo.authority}
              </p>
              <p>
                <strong>License Valid Till:</strong> {businessInfo.validTill}
              </p>
              <p className="mb-0">
                <strong>Address:</strong> {businessInfo.address}
              </p>
            </div>
          </div>
        </div>

        <div className="row g-4 mb-4">
          <div className="col-lg-6">
            <div className="timeline-card p-4 h-100">
              <h1>Experience Timeline</h1>
              <ul className="mb-0">
                <li>
                  2021: Business established and operations launched in Nagpur.
                </li>
                <li>
                  2022: Expanded services with at-home dog sitting and pet
                  transportation.
                </li>
                <li>
                  2023: Strengthened grooming and monthly boarding programs.
                </li>
                <li>
                  2024 onwards: Building a premium and trusted pet care identity
                  in the city.
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="timeline-card p-4 h-100">
              <h1>Mission & Vision</h1>
              <p>
                <strong>Mission:</strong> Deliver secure, ethical, and
                high-quality care for every pet.
              </p>
              <p className="mb-0">
                <strong>Vision:</strong> Become Nagpur's most trusted
                professional pet care brand.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
