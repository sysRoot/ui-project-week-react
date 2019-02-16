import React from "react";

const Footer = () => {
  return (
    <div>
      <div>
        <section class="footer">
          <h4>
            Interested in starting a project?
            <br />
            Let’s talk:
          </h4>

          <input type="email" name="email" value="Enter email" />

          <p>We'll never share your email with anyone else.</p>
        </section>

        <section class="footer">
          <h4>New York</h4>
          <address>
            123 Lane
            <br />
            Suite 100
            <br />
            Albany, NY 12345
            <br />
            202 555 0144
          </address>
        </section>

        <section class="footer">
          <h4>Florida</h4>
          <address>
            Ocean Drive
            <br />
            Suite 201
            <br />
            Orlando, FL 22345
            <br />
            502 555 0144
          </address>
        </section>

        <section class="footer">
          <h4>California</h4>
          <address>
            Mountain Street
            <br />
            Suite 105
            <br />
            San Diego, CA 22345
            <br />
            702 555 0144
          </address>
        </section>
      </div>

      <small>Copyright © 2018 Smith and Jones</small>
    </div>
  );
};

export default Footer;
