import React from "react";
import { motion } from "framer-motion";
const Talent = () => {
  return (
    <div className=" bg-black  ">
      <div className=" xl:p-main lg:p-main p-sm  xl:py-[6rem] lg:py-[6rem] py-[2rem]">
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1.4,
              type: "spring",
              ease: "linear",
            },
          }}
          className=" uppercase text-red xl:text-2xl lg:text-2xl text-xl xl:text-center lg:text-center"
        >
          purpose (01)
        </motion.h1>
        <div className=" xl:px-[8rem] lg:px-[8rem] capitalize font-title xl:text-title lg:text-title text-4xl  xl:leading-title lg:leading-title leading-[50px] text-yellow">
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 1.4,
                type: "spring",
                ease: "linear",
                delay: 0.5,
              },
            }}
          >
            A new <br />
            creatives
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 1.4,
                type: "spring",
                ease: "linear",
                delay: 0.8,
              },
            }}
            className="flex justify-end items-end"
          >
            <span>Series for </span>
          </motion.h1>
        </div>
        <div className=" xl:leading-title lg:leading-title xl:text-title lg:text-title text-4xl  text-yellow">
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 1.4,
                type: "spring",
                ease: "linear",
                delay: 0.9,
              },
            }}
            className=" text-center xl:px-[8rem] lg:px-[8rem]"
          >
            {" "}
            the Next
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 1.4,
                type: "spring",
                ease: "linear",
                delay: 1,
              },
            }}
            className=" text-left xl:px-[5rem] lg:px-[5rem]"
          >
            {" "}
            Waves of
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 1.4,
                type: "spring",
                ease: "linear",
                delay: 1.3,
              },
            }}
            className=" text-center lg:px-[9rem] xl:px-[9rem]"
          >
            Local Talent
          </motion.h1>
        </div>
        <div className=" xl:w-[40%] lg:w-[40%] w-[70%] mt-[40px] m-auto text-center text-primary uppercase xl:text-3xl lg:text-3xl">
          Adipisci and esse and <br /> illo quo. Nihil qui loream <br /> local
          lobum
        </div>
      </div>
    </div>
  );
};

export default Talent;
