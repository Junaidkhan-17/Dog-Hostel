import { businessInfo } from "../../data/businessData";
import "./Footer.css";
import webdockwhitelogo from "../../assets/webdock-white-logo.png";

function Footer() {
  return (
    <footer className="site-footer py-4">
      <div className="container">
        <div className="row g-3 align-items-center">
          <div className="col-md-6">
            <h6 className="mb-1">{businessInfo.name}</h6>
            <p className="mb-0 small text-light-emphasis">Premium Dog Hostel & Pet Care in Nagpur</p>
          </div>
          <div className="logoimg">
            <h6 className="webdock">Sponsored By</h6>
            <a
              href="https://webdockstudios.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit WebDock Studios"
            >
              <img src={webdockwhitelogo} alt="WebDock Studios logo" />
            </a>
          </div>
          <div className="col-12 footer-address">
            <p className="mb-0 small">{businessInfo.address}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
