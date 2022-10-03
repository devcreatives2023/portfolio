import React from "react";
import { motion } from "framer-motion";
import Carousel from "./Carousel";
const Location2 = () => {
  return (
    <div className=" bg-black">
      <div className="h-[90vh] xl:h-[180vh] xl:p-main lg:p-main p-sm xl:py-[8rem]  lg:py-[8rem] py-[6rem]">
        <motion.h1
          initial={{ opacity: 0, y: 45 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1,
              type: "spring",
              ease: "linear",
              delay: 0.5,
            },
          }}
          className="text-red uppercase text-2xl text-center"
        >
          Location (02)
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 45 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1.3,
              type: "spring",
              ease: "linear",
              delay: 0.9,
            },
          }}
          className=" xl:text-title lg:text-title text-center mt-5 font-title xl:leading-title lg:leading-title text-4xl text-yellow"
        >
          14 Floors Up <br /> in DTSJ
        </motion.h1>
        <div className=" relative  xl:py-[6rem]   lg:pt-[8rem] pt-[2rem] xl:h-[600px]  lg:h-[600px] object-cover ">
          <Carousel />
        </div>
      </div>
    </div>
  );
};

export default Location2;
