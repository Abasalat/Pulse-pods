import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h1>PulsePods</h1>
      </div>
      <div className={styles.right}>
        <ul className={styles.list}>
          <li>Home</li>
          <li>Shop</li>
          <li>Technology</li>
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
