import { businessInfo } from "../../data/businessData";
import "./FloatingActions.css";

function FloatingActions() {
  return (
    <>
      <a
        href={businessInfo.whatsappLink}
        target="_blank"
        rel="noreferrer"
        className="whatsapp-float"
        aria-label="Chat on WhatsApp"
      >
        <i className="bi bi-whatsapp" />
      </a>
      <a href={`tel:${businessInfo.phone}`} className="mobile-call-btn" aria-label="Call Now">
        <i className="bi bi-telephone-fill" /> Call Now
      </a>
    </>
  );
}

export default FloatingActions;
