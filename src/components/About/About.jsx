import React from "react";
import "./About.css";
import image from "./../../assets/img2.jpg";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
AOS.init();

const About = () => {
  return (
    <section id="about">
      <div className="about_text">
        <div className="about_text_h5"></div>
        <h2 className="about_text_h2">
          About Me <div className="span"></div>
        </h2>
      </div>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={image} alt="" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article data-aos="fade-left" className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ Year Working</small>
            </article>

            <article
              data-aos="fade-left"
              data-aos-delay="200"
              className="about__card"
            >
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>
          <p>
            I'm a junior web developer and I have a lot of knowledge, every day
            I'm pushing my learning skills. Adaptable quickly, and organized
            well. Interested in learning the latest web & software technologies
            quickly. Able to work well in teams as well as individually. My
            future goal is to become a senior full-stack developer!
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
