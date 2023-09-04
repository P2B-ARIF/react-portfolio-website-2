import React from "react";
import "./ProjectModal.css";

import img1 from "./../../assets/zerone1.png";
import img2 from "./../../assets/zerone2.png";
import img3 from "./../../assets/zerone3.png";
import { Link } from "react-router-dom";

const ThirdModal = () => {
  return (
    <div className="modal">
      <h5>My Third Work</h5>
      <h2>ZerOne-School</h2>

      <div className="image_group">
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
      </div>
      <div className="details">
        <p>
          Learning an 8-type programming language has a Fully responsive
          <br /> <strong> Technology Usage: </strong>
          Tailwind CSS | React Js | Node Js | Express Js | MongoDB
        </p>
        <div className="btn_group">
          <button className="btn_link">
            <a
              href="https://zerone-school.web.app/"
              target={"_blank"}
              rel="noreferrer"
            >
              Live Website
            </a>
          </button>
          <button className="btn_link">
            <a
              href="https://github.com/P2B-ARIF/learning-platform-client-a10"
              target={"_blank"}
              rel="noreferrer"
            >
              GitHub_Client Link
            </a>
          </button>
          <button className="btn_link">
            <a
              href="https://github.com/P2B-ARIF/learning-platform-server-a10"
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

export default ThirdModal;
