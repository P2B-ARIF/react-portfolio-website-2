import React from "react";
import "./Contact.css";
import { AiOutlineMail } from "react-icons/ai";
import { FaFacebookMessenger, FaWhatsapp } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { Input, Textarea } from "@material-tailwind/react";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_yfajltf",
        "template_hncsbgt",
        form.current,
        "yHcdhsmXdJoGEUEmc"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section id="contact">
      <div className="contact_text">
        <div className=" contact_text_h5"></div>
        <h2 className=" contact_text_h2">
          Contact Me <div className="span"></div>
        </h2>
      </div>
      <div className="container contact__container">
        <div className="contact__options">
          <article
            data-aos="zoom-in-left"
            className="contact__option"
            target="__blank"
          >
            <div>
              <AiOutlineMail className="contact-option-icon" />
              <div className="dag"></div>
            </div>
            <div className="social_details">
              <div className="contact_bg_hover"></div>
              <h4>Email</h4>
              <h5>mohammadarif4319@gmail.com</h5>
              <a href="mailto:mohammadarif4319@gmail.com">Send a message</a>
            </div>
          </article>
          <article
            data-aos="zoom-in-left"
            data-aos-delay="150"
            className="contact__option"
            target="__blank"
          >
            <div>
              <FaFacebookMessenger className="contact-option-icon" />
              <div className="dag"></div>
            </div>
            <div className="social_details">
              <div className="contact_bg_hover"></div>

              <h4>Messenger</h4>
              <h5>Mohammad Arif</h5>
              <a href="https://m.me/arif.p2g">Send a message</a>
            </div>
          </article>
          <article
            data-aos="zoom-in-left"
            data-aos-delay="250"
            className="contact__option"
          >
            <div>
              <FaWhatsapp className="contact-option-icon" />
              <div className="dag"></div>
            </div>
            <div className="social_details">
              <div className="contact_bg_hover"></div>

              <h4>Whatsapp</h4>
              <h5>+8801953424319</h5>
              <a
                href="https://api.whatsapp.com/send?phone+8801953424319"
                target="__blank"
              >
                Send a message
              </a>
            </div>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          {/* <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          /> */}
          <Input color="teal" label="Your Full Name" name="name" required />
          <Input color="teal" label="Your Email" name="email" required />
          {/* <input type="text" name="email" placeholder="Your Email" required /> */}
          {/* <textarea
            name="message"
            id=""
            cols="30"
            rows="10"
            placeholder="Your Message"
            required
          ></textarea> */}
          {/* <Textarea color="teal" label="Textarea Teal"  className="focus:border-none"/> */}
          <Textarea className="textarea" color="teal" label="Your Message" name="message" required/>
          {/* <Textarea color="teal" label="Textarea Teal" /> */}
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
