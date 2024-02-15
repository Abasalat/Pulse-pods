import React, { useEffect, useState } from "react";
import Header from "./Header";
import img from "../assets/img0.jpg";
import styles from "./Home.module.css";
import { motion } from "framer-motion";

const Home = () => {
  const message = [
    "fusion meets fashion",
    "melody meets culture",
    "sounds meets style",
  ];

  const welcome = "Welcome to".split(""); // corrected variable name to 'welcome'
  const [prevIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === message.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [message.length]);

  return (
    <div>
      <Header />
      <motion.div
        initial={{ y: -1000, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className={styles.main}
      >
        <motion.div
          initial={{ x: -100, y: 100, opacity: 0 }} // initial position at the left bottom corner
          animate={{ x: 0, y: 0, opacity: 1 }} // animate to its final position
          transition={{ type: "spring", stiffness: 100, damping: 12, delay: 2 }} // Spring animation for position
          className={styles.left}
        >
          <motion.img
            initial={{ scale: 0.5, opacity: 0 }} // Initial scale and opacity of the image
            animate={{
              scale: 1,
              opacity: 1,
              transition: {
                duration: 0.5,
                type: "spring",
                stiffness: 120,
                damping: 10,
              },
            }}
            src={img}
            alt=""
            className={styles.image}
          />
        </motion.div>
        <div className={styles.right}>
          <div>
            {welcome.map((letter, index) => (
              <motion.p
                className={styles.scale}
                key={index}
                whileHover={{ scale: 1.5 }}
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0, x: -100 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: {
                      delay: 3,
                      staggerChildren: 0.05,
                      duration: 1,
                    },
                  },
                }}
              >
                {letter}
              </motion.p>
            ))}
          </div>
          <span className={styles.pod}>PulsePods</span>
          <div className={styles.text}>
            <span>a word where </span>
            <motion.p
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 2 }}
            >
              {message[prevIndex]}
            </motion.p>
          </div>
          <motion.h1
            className={styles.heading2}
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: {
                opacity: 1,
                x: 0,
                transition: {
                  delay: 3,
                  staggerChildren: 0.05,
                  duration: 1,
                },
              },
            }}
          >
            At PulsePods, we define your auditory experience with
          </motion.h1>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
