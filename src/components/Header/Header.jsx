import React from "react";
import CTA from "./CTA";
import "./Header.css";
import image from "./../../assets/image.png";
import HeaderSocial from "./HeaderSocial";

const Header = () => {
  return (
    <section className="section_header">
      <div className="container header__container">
        <HeaderSocial />
        <div className="me_details">
          <div>
            <h5>Hi, my name is</h5>
            <h1>Mohammad <span>Arif</span></h1>
            <h2>I build things for the web.</h2>
            <p>
              <h5>I'm a  &nbsp; </h5> Web Developer | Front-End Developer
              {/* I'm a web developer specializing in building web applications in
              using react js */}
            </p>
            <CTA />
          </div>
          <div className="image_container">
            <div className="image_content">
              <img src={image} alt="" />
            </div>
          </div>
        </div>
        <div className="social_content">
          <a href="#contact" className="scroll__down">
            Scroll Down
          </a>
        </div>
      </div>
    </section>
  );
};

export default Header;
