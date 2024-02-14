import React from "react";
import styles from "./Shop.module.css";
import first from "../assets/first.png";
import second from "../assets/second.png";
import forth from "../assets/forth.png";
import m10 from "../assets/10.png";

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
          <div className={styles.images}>
            <img
              src={first}
              alt=""
              className={styles.image}
              style={{ width: "600px" }}
            />
          </div>
          <div className={styles.description} style={{ marginTop: "-90px" }}>
            <h1 style={{ fontSize: "80px" }}>Exceptional</h1>
            <h2 style={{ fontSize: "50px" }}>Sound Quality</h2>
            <p style={{ fontSize: "30px", lineHeight: "2rem" }}>
              Precision-engineered for an immersive audio experience.
            </p>
          </div>
          <div className={styles.images}>
            <img
              src={forth}
              alt=""
              className={styles.image}
              style={{ width: "700px", marginTop: "150px" }}
            />
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.images}>
            <img
              src={second}
              alt=""
              className={styles.image}
              style={{ width: "600px", marginTop: "-60px" }}
            />
          </div>
          <div className={styles.description} style={{ marginTop: "-80px" }}>
            <h1 style={{ fontSize: "80px" }}>Exceptional</h1>
            <h2 style={{ fontSize: "50px" }}>Sound Quality</h2>
            <p style={{ fontSize: "30px", lineHeight: "2rem" }}>
              Precision-engineered for an immersive audio experience.
            </p>
          </div>
          <div className={styles.images}>
            <img
              src={m10}
              alt=""
              className={styles.image}
              style={{ width: "700px", marginTop: "60px", marginRight: "60px" }}
            />
          </div>
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
