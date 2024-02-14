import React from "react";
import styles from "./Products.module.css";
import third from "..//assets/third.png";
import five1 from "..//assets/five1.png";
import nine1 from "..//assets/nine1.png";

const Products = () => {
  return (
    <div className={styles.main}>
      <center className={styles.heading}>
        Elevate your audio experience with
      </center>
      <div className={styles.products}>
        <div className={styles.items}>
          <div className={styles.item}>
            <img src={third} />
          </div>
          <h1>PulseMax</h1>
        </div>
        <div className={styles.items}>
          <div className={styles.item}>
            <img src={five1} alt="" />
          </div>
          <h1>PulseMax</h1>
        </div>
        <div className={styles.items}>
          <div className={styles.item}>
            <img src={nine1} alt="" />
          </div>
          <h1>PulseMax</h1>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Products;
