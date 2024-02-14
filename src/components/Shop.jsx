import React from "react";
import styles from "./Shop.module.css";
import first from "../assets/first.png";
import img8 from "../assets/img8.jpg";
const Shop = () => {
  return (
    <div className={styles.mainContainer}>
      <h1>Why PulsePods?</h1>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.description}>
            <h1 style={{ fontSize: "80px" }}>Exceptional</h1>
            <h2 style={{ fontSize: "50px" }}>Sound Quality</h2>
            <p style={{ fontSize: "30px", lineHeight: "2rem" }}>
              Precision-engineered for an immersive audio experience.
            </p>
          </div>
          <img src={first} alt="" className={styles.image} />
          <div className={styles.description}>
            <h1 style={{ fontSize: "80px" }}>Exceptional</h1>
            <h2 style={{ fontSize: "50px" }}>Sound Quality</h2>
            <p style={{ fontSize: "30px", lineHeight: "2rem" }}>
              Precision-engineered for an immersive audio experience.
            </p>
          </div>
          <img src={first} alt="" className={styles.image} />
        </div>
        <div className={styles.right}>
          <img src={img8} alt="" className={styles.image} />
          <div className={styles.description}>
            <h1 style={{ fontSize: "80px" }}>Exceptional</h1>
            <h2 style={{ fontSize: "50px" }}>Sound Quality</h2>
            <p style={{ fontSize: "30px", lineHeight: "2rem" }}>
              Precision-engineered for an immersive audio experience.
            </p>
          </div>
          <img src={first} alt="" className={styles.image} />
          <div className={styles.description}>
            <h1 style={{ fontSize: "80px" }}>Exceptional</h1>
            <h2 style={{ fontSize: "50px" }}>Sound Quality</h2>
            <p style={{ fontSize: "30px", lineHeight: "2rem" }}>
              Precision-engineered for an immersive audio experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
