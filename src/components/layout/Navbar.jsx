import { NavLink } from "react-router-dom";
import { businessInfo } from "../../data/businessData";
import "./Navbar.css";
import purvilogo1 from "../../assets/purvilogo1.png";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark custom-navbar sticky-top">
      <div className="container">
        <NavLink className="navbar-brand fw-bold" to="/">
          <img src={purvilogo1} className="logo" alt=""/>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-lg-2">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
          <a href={`tel:${businessInfo.phone}`} className="btn door-btn ms-lg-3 mt-2 mt-lg-0">
            Call Now
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
