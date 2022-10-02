import React from "react";
import { images } from "../../constants";
import { motion } from "framer-motion";
const Reviewers2 = () => {
  return (
    <>
      <div div className="xl:p-main lg:p-main p-sm ">
        <div className=" border-t-2 xl:pt-[6rem] lg:pt-[6rem]  xl:pb-[6rem] lg:pb-[6rem] border-black pt-[2rem] pb-[2rem]">
          <div className=" flex items-center  justify-center">
            <motion.h1 
             initial={{ opacity: 0, y: 45 }}
             whileInView={{
               opacity: 1,
               y: 0,
               transition: {
                 duration: 1,
                 type: "spring",
                 ease: "linear",
                 delay:0.6
               },
             }}
            className="p-main  font-title xl:text-title lg:text-title xl:leading-title lg:leading-title text-4xl text-center">
              Meet the <br /> Reviewers <span className="text-2xl  font-main xl:ml-[-40px] lg:ml-[-40px] font-semibold">(02) </span>
            </motion.h1>
          </div>
          <div className=" flex flex-col xl:flex-row lg:flex-row justify-center xl:p-main lg:p-main p-ps 
          m-auto text-center items-center gap-x-[120px]">
               <motion.div
               initial={{ opacity: 0, x: 100 }}
               whileInView={{
                 opacity: 1,
                 x: 0,
                 transition: {
                   duration: 1,
                   type: "spring",
                   ease: "linear",
                   delay:0.9
                 },
               }}
            className=" xl:w-[500px] lg:w-[500px] h-[600px]">
              LEft side{" "}
              <img
                className="xl:w-[500px] lg:w-[500px] xl:h-[600px] lg:h-[600px] object-cover"
                src={images.purpose2}
              />
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
                   delay:0.9
                 },
               }}
            
            className=" xl:w-[500px] lg:w-[500px] h-[600px]">
              Right side{" "}
              <img
                className="xl:w-[500px] lg:w-[500px] xl:h-[600px] lg:h-[600px]  object-cover"
                src={images.purpose2}
              />
            </motion.div>
          </div>
      
        </div>
      </div>
    </>
  );
};

export default Reviewers2;
