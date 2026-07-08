// import React from "react";
// import "../CSS/Footer.css";
// import logo from "../assets/logo.png";
// import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
// import { FaInstagram, FaXTwitter } from "react-icons/fa6";

// import {
//   IoMailOutline,
//   IoCallOutline,
//   IoLocationOutline,
// } from "react-icons/io5";

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="footer-container">
//         {/* Logo Section */}
//         <div className="footer-logo-section">
//           <img src={logo} alt="AgroBridge Logo" className="footer-logo" />
//           <p className="footer-tagline">Connecting Farmers to Markets</p>
//         </div>

//         {/* Quick Links Section */}
//         <div className="footer-section">
//           <h3 className="footer-heading">Quick Links</h3>
//           <ul className="footer-links">
//             <li>
//               <a href="/how-it-works">How It Works</a>
//             </li>
//             <li>
//               <a href="/solutions">Solutions</a>
//             </li>
//             <li>
//               <a href="/partners">Partners</a>
//             </li>
//             <li>
//               <a href="/contact">Contact Us</a>
//             </li>
//           </ul>
//         </div>

//         {/* Contact Us Section */}
//         <div className="footer-section">
//           <h3 className="footer-heading">Contact Us</h3>
//           <ul className="footer-contact">
//             <li>
//               <IoMailOutline className="contact-icon" />
//               <a href="mailto:agro.bridgeofficial@gmail.com">
//                 agro.bridgeofficial@gmail.com
//               </a>
//             </li>
//             <li>
//               <IoCallOutline className="contact-icon" />
//               <a href="tel:+2348162043716">+234 816 204 3716</a>
//             </li>
//             <li>
//               <IoLocationOutline className="contact-icon" />
//               <span>Lagos, Nigeria</span>
//             </li>
//           </ul>
//         </div>

//         {/* Follow Us Section */}
//         <div className="footer-section">
//           <h3 className="footer-heading">Follow Us</h3>
//           <div className="social-links">
//             <a
//               href="https://www.facebook.com/agrobridge/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="social-link facebook"
//               aria-label="Facebook"
//             >
//               <FaFacebookF />
//             </a>
//             <a
//               href="https://www.linkedin.com/company/agrobridge/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="social-link linkedin"
//               aria-label="LinkedIn"
//             >
//               <FaLinkedinIn />
//             </a>
//             <a
//               href="https://twitter.com/agrobridge"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="social-link twitter"
//               aria-label="Twitter"
//             >
//               <FaXTwitter />
//             </a>
//             <a
//               href="https://instagram.com/agrobridge"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="social-link instagram"
//               aria-label="Instagram"
//             >
//               <FaInstagram />
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Copyright Section */}
//       <div className="footer-bottom">
//         <div className="footer-bottom-content">
//           <p>
//             &copy; {new Date().getFullYear()} AgroBridge. All rights reserved.
//           </p>
//           <div className="footer-legal">
//             <a href="/privacy">Privacy Policy</a>
//             <span className="separator">|</span>
//             <a href="/terms">Terms of Service</a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import "../CSS/Footer.css";
import logo from "../assets/logo.png";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";

import {
  IoMailOutline,
  IoCallOutline,
  IoLocationOutline,
} from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo Section */}
        <div className="footer-logo-section">
          <img src={logo} alt="AgroBridge Logo" className="footer-logo" />
          <p className="footer-tagline">
            Bridging farmers and markets, <br />
            everywhere
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links">
            <li>
              <a href="/how-it-works">How It Works</a>
            </li>
            <li>
              <a href="/solutions">Solutions</a>
            </li>
            <li>
              <a href="/partners">Partners</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div className="footer-section">
          <h3 className="footer-heading">Contact Us</h3>
          <ul className="footer-contact">
            <li>
              <IoMailOutline className="contact-icon" />
              <a href="mailto:agro.bridgeofficial@gmail.com">
                agro.bridgeofficial@gmail.com
              </a>
            </li>
            <li>
              <IoCallOutline className="contact-icon" />
              <a href="tel:+2348162043716">+234 816 204 3716</a>
            </li>
            <li>
              <IoLocationOutline className="contact-icon" />
              <span>Lagos, Nigeria</span>
            </li>
          </ul>
        </div>

        {/* Follow Us Section */}
        <div className="footer-section">
          <h3 className="footer-heading">Follow Us</h3>
          <div className="social-links">
            <a
              href="https://www.facebook.com/agrobridge/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link facebook"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.linkedin.com/company/agrobridge/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link linkedin"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://twitter.com/agrobridge"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link twitter"
              aria-label="Twitter"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://instagram.com/agrobridge"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link instagram"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright & Legal Section */}
      <div className="footer-bottom">
        <p>
          &copy; 2026 AgroBridge | All Rights Reserved |{" "}
          <a href="/terms">Terms and Conditions</a> |{" "}
          <a href="/privacy">Privacy Policy</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
