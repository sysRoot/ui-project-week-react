import React from "react";
import hamburger from '../img/nav-hamburger.png';
import '../sass/index.scss'

const Header = () => {
  return (
    <header>
      <div className="nav">
        <div className="nav-logo">S&J</div>
        <div className="menu">
          <div className="menu-button">
            <img src={hamburger} alt="Hamburger" />
          </div>
          <div className="menu-content inactive">
            <div>
              <a href="index.html" className="menu-link">
                Home
              </a>
              <a href="services.html" className="menu-link">
                Services
              </a>
              <a href="contact.html" className="menu-link">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="jumbo">
        <h1 className="over">
          Integrity,
          <br />
          Excellence,
          <br />
          Progress.
        </h1>
        <div className="home-img-jumbo" alt="Architectural Marvel" />
      </div>
    </header>
  );
};

export default Header;
