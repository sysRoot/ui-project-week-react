import React from "react";
import hamburger from '../../img/nav-hamburger.png';

const Header = () => {
  return (
    <header>
      <div class="nav">
        <div class="nav-logo">S&J</div>
        <div class="menu">
          <div class="menu-button">
            <img src={hamburger} alt="Hamburger" />
          </div>
          <div class="menu-content inactive">
            <div>
              <a href="index.html" class="menu-link">
                Home
              </a>
              <a href="services.html" class="menu-link">
                Services
              </a>
              <a href="contact.html" class="menu-link">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="jumbo">
        <h1 class="over">
          Integrity,
          <br />
          Excellence,
          <br />
          Progress.
        </h1>
        <div class="home-img-jumbo" alt="Architectural Marvel" />
      </div>
    </header>
  );
};

export default Header;
