import React from "react";
import Facebook from "../../assets/logo-facebook.png";
import Twitter from "../../assets/twitter.png";
import Instagram from "../../assets/instagram.png";
import Whatsapp from "../../assets/whatsapp.png";
import Timer from "./Timer";

import "./Footer.css";

function Footer() {
  const contestDeadline = new Date("2024-02-01T00:00:00");

  return (
    <footer className="footer">
      <div className="footer-container">
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Facebook} alt="Facebook" />
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Twitter} alt="Twitter" />
        </a>
        <Timer deadline={contestDeadline} className="timer" />
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Instagram} alt="Instagram" />
        </a>
        <a
          href="https://www.whatsapp.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Whatsapp} alt="WhatsApp" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
