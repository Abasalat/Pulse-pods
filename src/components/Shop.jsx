import React from "react";
import styles from "./Shop.module.css";
import first from "../assets/first.png";
import second from "../assets/second.png";
import forth from "../assets/forth.png";
import m10 from "../assets/10.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Shop = () => {
  const [ref, inView] = useInView({ threshold: 0.5 });
  const [ref1, inView1] = useInView({ threshold: 0.5 });
  const [ref2, inView2] = useInView({ threshold: 0.5 });
  const [ref3, inView3] = useInView({ threshold: 0.5 });
  const [ref4, inView4] = useInView({ threshold: 0.5 });
  const [ref5, inView5] = useInView({ threshold: 0.5 });
  const [ref6, inView6] = useInView({ threshold: 0.5 });
  const [ref7, inView7] = useInView({ threshold: 0.5 });
  return (
    <div className={styles.mainContainer} id="shop">
      <h1>Why PulsePods?</h1>
      <div className={styles.container}>
        <div className={styles.left}>
          <motion.div
            className={styles.description}
            ref={ref}
            initial={{ opacity: 0, x: -1000 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -300 }}
            transition={{ duration: 1 }}
          >
            <h1 style={{ fontSize: "80px" }}>Exceptional</h1>
            <h2 style={{ fontSize: "50px" }}>Sound Quality</h2>
            <p style={{ fontSize: "30px", lineHeight: "2rem" }}>
              Precision-engineered for an immersive audio experience.
            </p>
          </motion.div>
          <motion.div
            className={styles.images}
            ref={ref1}
            initial={{ opacity: 0, x: -1000 }}
            animate={inView1 ? { opacity: 1, x: 0 } : { opacity: 0, x: -300 }}
            transition={{ duration: 1 }}
          >
            <img
              src={first}
              alt=""
              className={styles.image}
              style={{ width: "600px" }}
            />
          </motion.div>
          <motion.div
            className={styles.description}
            style={{ marginTop: "-90px" }}
            ref={ref2}
            initial={{ opacity: 0, x: -1000 }}
            animate={inView2 ? { opacity: 1, x: 0 } : { opacity: 0, x: -300 }}
            transition={{ duration: 1 }}
          >
            <h1 style={{ fontSize: "80px" }}>Exceptional</h1>
            <h2 style={{ fontSize: "50px" }}>Sound Quality</h2>
            <p style={{ fontSize: "30px", lineHeight: "2rem" }}>
              Precision-engineered for an immersive audio experience.
            </p>
          </motion.div>
          <motion.div
            className={styles.images}
            ref={ref3}
            initial={{ opacity: 0, x: -1000 }}
            animate={inView3 ? { opacity: 1, x: 0 } : { opacity: 0, x: -300 }}
            transition={{ duration: 1 }}
          >
            <img
              src={forth}
              alt=""
              className={styles.image}
              style={{ width: "700px", marginTop: "150px" }}
            />
          </motion.div>
        </div>
        <div className={styles.right}>
          <motion.div
            className={styles.images}
            ref={ref4}
            initial={{ opacity: 0, x: -1000 }}
            animate={inView4 ? { opacity: 1, x: 0 } : { opacity: 0, x: 300 }}
            transition={{ duration: 1 }}
          >
            <img
              src={second}
              alt=""
              className={styles.image}
              style={{ width: "600px", marginTop: "-60px" }}
            />
          </motion.div>
          <motion.div
            className={styles.description}
            style={{ marginTop: "-80px" }}
            ref={ref5}
            initial={{ opacity: 0, x: -1000 }}
            animate={inView5 ? { opacity: 1, x: 0 } : { opacity: 0, x: 300 }}
            transition={{ duration: 1 }}
          >
            <h1 style={{ fontSize: "80px" }}>Exceptional</h1>
            <h2 style={{ fontSize: "50px" }}>Sound Quality</h2>
            <p style={{ fontSize: "30px", lineHeight: "2rem" }}>
              Precision-engineered for an immersive audio experience.
            </p>
          </motion.div>
          <motion.div
            className={styles.images}
            ref={ref6}
            initial={{ opacity: 0, x: -1000 }}
            animate={inView6 ? { opacity: 1, x: 0 } : { opacity: 0, x: 300 }}
            transition={{ duration: 1 }}
          >
            <img
              src={m10}
              alt=""
              className={styles.image}
              style={{ width: "700px", marginTop: "60px", marginRight: "60px" }}
            />
          </motion.div>
          <motion.div
            className={styles.description}
            ref={ref7}
            initial={{ opacity: 0, x: -1000 }}
            animate={inView7 ? { opacity: 1, x: 0 } : { opacity: 0, x: 300 }}
            transition={{ duration: 1 }}
          >
            <h1 style={{ fontSize: "80px" }}>Exceptional</h1>
            <h2 style={{ fontSize: "50px" }}>Sound Quality</h2>
            <p style={{ fontSize: "30px", lineHeight: "2rem" }}>
              Precision-engineered for an immersive audio experience.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
