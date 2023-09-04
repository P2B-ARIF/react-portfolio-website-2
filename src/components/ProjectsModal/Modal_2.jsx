import React from "react";
import "./ProjectModal.css";

import img1 from "./../../assets/MRS1.png";
import img2 from "./../../assets/MRS2.png";
import img3 from "./../../assets/MRS3.png";

import { Link } from "react-router-dom";

const SecondModal = () => {
  return (
    <div className="modal">
      <h5>My Second Work</h5>
      <h2>Mobile Resell Service</h2>

      <div className="image_group">
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
      </div>
      <div className="details">
        <p>
          We can resell four types of mobiles here. seller can advertise her
          phone for buyers and add products, buyer can report and pay. Admin can
          all control.
          <br/>
          <strong> Technology Usage: </strong> 
          React Js | Node Js | Express Js | Firebase | MongoDB | (TanStack, Flowbite, Axios, Stripe)
        </p>
        <div className="btn_group">
          <button className="btn_link">
            <a
              href="https://mobile-resell-service.web.app/"
              target={"_blank"}
              rel="noreferrer"
            >
              Live Website
            </a>
          </button>
          <button className="btn_link">
            <a
              href="https://github.com/P2B-ARIF/mobile-resell-service-client-a12"
              target={"_blank"}
              rel="noreferrer"
            >
              GitHub_Client Link
            </a>
          </button>
          <button className="btn_link">
            <a
              href="https://github.com/P2B-ARIF/mobile-resell-service-server-a12"
              target={"_blank"}
              rel="noreferrer"
            >
              GitHub_Server Link
            </a>
          </button>
        </div>
      </div>
        <div className="btn-back">
          <Link to={"/"} className="button">
            Back
          </Link>
        </div>
    </div>
  );
};

export default SecondModal;
