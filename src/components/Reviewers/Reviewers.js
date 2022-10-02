import { motion } from "framer-motion";
import React from "react";
import { images } from "../../constants";
import CarouselLeft from "./CarouselLeft";
import CarouselRight from "./CarouselRight";

const Reviewers = () => {
  return (
    <>
      <div div className="xl:p-main lg:p-main p-sm ">
        <div className=" border-t-2 xl:pt-[6rem] lg:pt-[6rem]  xl:pb-[6rem] lg:pb-[6rem] border-black">
          <div className=" flex items-center  justify-center">
            <motion.h1
              initial={{ opacity: 0, y: 35 }}
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
              className="p-main  font-title xl:text-title lg:text-title text-4xl xl:leading-title lg:leading-title  text-center"
            >
              Meet the <br /> Reviewers
            </motion.h1>
          </div>
          <div className=" flex flex-col xl:flex-row lg:flex-row justify-center xl:p-main lg:p-main p-sm m-auto text-center items-center gap-x-[120px]">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                  duration: 1,
                  type: "spring",
                  ease: "linear",
                  delay: 0.9,
                },
              }}
              className=" xl:w-[500px] lg:w-[500px] h-[600px]"
            >
              LEft side{" "}
              {/* <img
                className="xl:w-[500px] lg:w-[500px] xl:h-[600px] lg:h-[600px] object-cover"
                src={images.purpose2}
              /> */}
              <CarouselLeft />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                  duration: 1,
                  type: "spring",
                  ease: "linear",
                  delay: 0.9,
                },
              }}
              className=" xl:w-[500px] lg:w-[500px] h-[600px]"
            >
              Right side
              {/* <img
                className="xl:w-[500px] lg:w-[500px] xl:h-[600px] lg:h-[600px]  object-cover"
                src={images.purpose2}
              /> */}
              <CarouselRight />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reviewers;
