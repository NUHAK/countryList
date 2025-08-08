import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer_container">
      <div>
   
        <div className="social_icons">
          {[
            { icon: <FaFacebookF />, link: "#" },
            { icon: <FaTwitter />, link: "#" },
            { icon: <FaLinkedinIn />, link: "#" },
            { icon: <FaYoutube />, link: "#" },
          ].map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              className="social_icon-link"
            >
              {item.icon}
            </a>
          ))}
        </div>

        
        <div className="">
          <p className="">Enterprise Learning</p>
          <p>Copyright © 2025.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
