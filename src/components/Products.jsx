import React from "react";
import styles from "./Products.module.css";
import third from "..//assets/third.png";
import five1 from "..//assets/five1.png";
import nine1 from "..//assets/nine1.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const Products = () => {
  const [ref, inView] = useInView({ threshold: 0.5 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);
  return (
    <div className={styles.main} id="products">
      <motion.center
        ref={ref}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: {
            opacity: 1,
            y: 5,
            transition: {
              delay: 0.1,
              staggerChildren: 0.05,
              duration: 1,
            },
          },
        }}
        className={styles.heading}
      >
        Elevate your audio experience with
      </motion.center>
      <div className={styles.products}>
        <div className={styles.items}>
          <div className={styles.item}>
            <motion.img
              src={third}
              alt=""
              initial={{ opacity: 0, x: -1000 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -1000 }}
              transition={{ duration: 1 }}
            />
          </div>
          <h1>PulseMax</h1>
        </div>
        <div className={styles.items}>
          <div className={styles.item}>
            <motion.img
              src={five1}
              alt=""
              initial={{ opacity: 0, x: -1000 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -2000 }}
              transition={{ duration: 1 }}
            />
          </div>
          <h1>PulseMax</h1>
        </div>
        <div className={styles.items}>
          <div className={styles.item}>
            <motion.img
              src={nine1}
              alt=""
              initial={{ opacity: 0, x: -1000 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -3000 }}
              transition={{ duration: 1 }}
            />
          </div>
          <h1>PulseMax</h1>
        </div>
      </div>
      <div className={styles.explore}>
        <h1 style={{ color: "white" }}>Explore more and</h1>
        <button>Shop now</button>
      </div>
      <div></div>
    </div>
  );
};

export default Products;
