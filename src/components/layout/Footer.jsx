import { businessInfo } from "../../data/businessData";
import "./Footer.css";

function Footer() {
  return (
    <footer className="site-footer py-4">
      <div className="container">
        <div className="row g-3 align-items-center">
          <div className="col-md-6">
            <h6 className="mb-1">{businessInfo.name}</h6>
            <p className="mb-0 small text-light-emphasis">Premium Dog Hostel & Pet Care in Nagpur</p>
          </div>
          <div className="col-md-6 text-md-end">
            <p className="mb-0 small">{businessInfo.address}</p>
            <p className="mb-0 small">
              <a href={`tel:${businessInfo.phone}`}>{businessInfo.phone}</a> |{" "}
              <a href={`mailto:${businessInfo.email}`}>{businessInfo.email}</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
