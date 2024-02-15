import React from "react";
import styles from "./Footer.module.css";
import { IoLogoYoutube } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <div className={styles.main} id="contact">
      <div className={styles.container}>
        <div className={styles.list}>
          <h1>About us</h1>
          <ul>
            <li>Team</li>
            <li>Our Story</li>
            <li>Vison</li>
          </ul>
        </div>
        <div className={styles.list}>
          <h1>FAQs</h1>
          <ul>
            <li>Team</li>
            <li>Our Story</li>
            <li>Vison</li>
          </ul>
        </div>
        <div className={styles.list}>
          <h1>Get started</h1>
          <ul>
            <li>Team</li>
            <li>Our Story</li>
            <li>Vison</li>
          </ul>
        </div>
        <div className={styles.list}>
          <h1>Social</h1>
          <ul>
            <li style={{ fontSize: "40px" }}>
              <IoLogoYoutube />
            </li>
            <li style={{ fontSize: "40px", marginTop: "30px" }}>
              <IoLogoLinkedin />
            </li>
            <li style={{ fontSize: "40px", marginTop: "30px" }}>
              <FaInstagram />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
