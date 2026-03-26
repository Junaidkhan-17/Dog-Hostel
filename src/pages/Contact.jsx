import { useEffect, useState } from "react";
import { businessInfo } from "../data/businessData";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });

  useEffect(() => {
    document.title = "Contact | PURVI DOG HOSTEL";
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your enquiry has been noted. We will contact you soon.");
    setFormData({ name: "", phone: "", message: "" });
  };

  return (
    <section className="section-space contact-page">
      <div className="container">
        <div className="text-center mb-5">
          <h1>Contact Us</h1>
          <p className="text-muted">Reach out for boarding, grooming, pickup-drop, and complete pet care support.</p>
        </div>

        <div className="row g-4">
          <div className="col-lg-6">
            <div className="glass-card p-4 h-100">
              <h4>Business Contact</h4>
              <p>
                <i className="bi bi-geo-alt-fill me-2" />
                {businessInfo.address}
              </p>
              <p>
                <i className="bi bi-telephone-fill me-2" />
                <a href={`tel:${businessInfo.phone}`}>{businessInfo.phone}</a>
              </p>
              <p>
                <i className="bi bi-envelope-fill me-2" />
                <a href={`mailto:${businessInfo.email}`}>{businessInfo.email}</a>
              </p>
              <a href={businessInfo.whatsappLink} target="_blank" rel="noreferrer" className="btn door-btn mt-2">
                WhatsApp Now
              </a>

              <div className="ratio ratio-16x9 mt-4 rounded overflow-hidden">
                <iframe
                  src="https://www.google.com/maps?q=Opposite+Yadav+Lawn,+Abdul+Hamid+Nagar,+Gorewada,+Katol+Road,+Nagpur,+440013&output=embed"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="PURVI DOG HOSTEL Location"
                />
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="contact-form-wrap p-4 h-100">
              <h4>Send an Enquiry</h4>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="form-control"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="form-control"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    className="form-control"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" className="btn door-btn w-100">
                  Submit Enquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
