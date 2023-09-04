import React from "react";
import "./ProjectModal.css";

import img1 from "./../../assets/Black1.png";
import img2 from "./../../assets/Black2.png";
import img3 from "./../../assets/Black3.png";
import { Link } from "react-router-dom";

const FirstModal = () => {
  return (
    <div className="modal">
      <h5>My First Work</h5>
      <h2>Black Diamond Photography</h2>

      <div className="image_group">
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
      </div>
      <div className="details">
        <p>
          <strong> Technology Usage: </strong>
          This website-based photography with different event wedding/ Fusion/
          Corporate/ Product • Used: Tailwind CSS | React Js | Node Js | Express
          Js | MongoDB
        </p>
        <div className="btn_group">
          <button className="btn_link">
            <a
              href="https://black-diamond-photography.web.app/"
              target={"_blank"}
              rel="noreferrer"
            >
              Live Website
            </a>
          </button>
          <button className="btn_link">
            <a
              href="https://github.com/P2B-ARIF/black-diamond-photography-client-a11"
              target={"_blank"}
              rel="noreferrer"
            >
              GitHub_Client Link
            </a>
          </button>
          <button className="btn_link">
            <a
              href="https://github.com/P2B-ARIF/black-diamond-photography-server-a11"
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

export default FirstModal;
