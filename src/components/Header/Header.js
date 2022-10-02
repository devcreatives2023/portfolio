import { motion } from "framer-motion";
import React from "react";
const Header = () => {
  return (
    <div className=" relative top-[140px] z-0 xl:p-main  lg:p-main p-sm m">
      <div
        className="capitalize leading-[80px] xl:leading-[150px] lg:leading-[150px] xl:text-title
       lg:text-title text-4xl tracking-wider"
      >
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1,
              type: "spring",
              ease: "linear",
            },
          }}
        >
          beaunfire
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1,
              type: "spring",
              ease: "linear",
              delay: 1,
            },
          }}
        >
          Portfolio Review
        </motion.h1>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 1,
            type: "spring",
            ease: "linear",
            delay: 1.2,
          },
        }}
        className=" flex  justify-end xl:text-title lg:text-title text-5xl font-title text-yellow"
      >
        Summer '22
      </motion.div>
      <div
        className=" flex justify-between items-start text-primary uppercase
      text-md mt-12 xl:mt-[70px] lg:mt-[70px]
      xl:text-xl lg:text-xl"
      >
        <p>
          South bay made <br /> made' 01
        </p>
        <h1>
          now accepting <br /> applications
        </h1>
      </div>
    </div>
  );
};

export default Header;
