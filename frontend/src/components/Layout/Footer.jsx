import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaFacebookF, FaYoutube, FaLinkedin, FaGithub } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>&copy; All Rights Reserved By Ankit Chouhan.</div>
      <div>
        <Link
          to={"https://www.facebook.com/ankit.chouhan.75685962/"}
          target="_blank"
        >
          <FaFacebookF />
        </Link>
        <Link to={"https://github.com/ankit-2706"} target="_blank">
          <FaGithub />
        </Link>
        <Link
          to={"https://www.linkedin.com/in/ankit-chouhan-3b5203252"}
          target="_blank"
        >
          <FaLinkedin />
        </Link>
        <Link to={"https://instagram.com/_ankit_27__/"} target="_blank">
          <RiInstagramFill />
        </Link>
        <Link to={"https://twitter.com/AnkitCh65977850"} target="_blank">
          <FaXTwitter />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
