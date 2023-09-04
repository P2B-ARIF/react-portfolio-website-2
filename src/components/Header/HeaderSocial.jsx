import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub, FaFacebookSquare } from "react-icons/fa";

const HeaderSocial = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/mdarif319/" target="_black">
        <BsLinkedin />
      </a>
      <a href="https://github.com/P2B-ARIF" target="_black">
        <FaGithub />
      </a>
      <a href="https://facebook.com/arif.p2b" target="_black">
        <FaFacebookSquare />
      </a>
    </div>
  );
};

export default HeaderSocial;
