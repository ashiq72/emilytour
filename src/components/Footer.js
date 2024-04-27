import React from "react";
import "./Footerstyle.module.css";

function Foter() {
  return (
    <footer>
      <div className="footer-container d-flex justify-content-around">
        <div className="contact-us">
          <h3>Contact Us</h3>
          <ul>
            <li>Cai Lậy, </li>
            <li>Tien Giang, Vietnam</li>
            <li>Email: admin@emilytour.com</li>
            <li>Phone: +84 93 439 91 75</li>
          </ul>
        </div>
        <div className="company">
          <h3>Company</h3>
          <ul>
            <li>About Us</li>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="other-links">
          <h3>Other Links</h3>
          <ul>
            <li>Blog</li>
            <li>FAQ</li>
            <li>Careers</li>
          </ul>
        </div>
      </div>
      <p className="text-center">&copy; 2024 EmilyTour. All Rights Reserved.</p>
    </footer>
  );
}

const Footer = () => {
  return (
    <div>
      <Foter />
    </div>
  );
};

export default Footer;
