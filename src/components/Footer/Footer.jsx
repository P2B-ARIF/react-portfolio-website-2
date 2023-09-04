import React from "react";
import "./Footer.css";
import { FaFacebookSquare, FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import logo from "./../../assets/favicon.png";

const Footer = () => {
  return (
    <footer>
      {/* <a href="/" className='footer__logo'>
                <img src="./../../../public/favicon.png" alt="" />
            </a> */}

      <img className="footer__logo" src={logo} alt="" />

      <ul className="permalinks">
        <li>
          <a href="*">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com/arif.p2b">
          <FaFacebookSquare />
        </a>
        <a href="https://www.linkedin.com/in/mohammad-arif-8b5529246/">
          <FaLinkedinIn />
        </a>
        <a href="https://linkedin.comhttps://github.com/P2B-ARIF">
          <FaGithub />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; P2B Tutorials. All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
