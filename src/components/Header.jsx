import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h1>PulsePods</h1>
      </div>
      <div className={styles.right}>
        <ul className={styles.list}>
          <li>
            <Link to="home" span={true} smooth={true}>
              Home
            </Link>
          </li>
          <li>
            <Link to="shop" span={true} smooth={true}>
              Shop
            </Link>
          </li>
          <li>
            <Link to="products" span={true} smooth={true}>
              Technology
            </Link>
          </li>
          <li>
            <Link to="contact" span={true} smooth={true}>
              Contact
            </Link>
          </li>
          <div>
            <button className={styles.btn}>Search</button>
            <button className={styles.btn}>SignUp</button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Header;
