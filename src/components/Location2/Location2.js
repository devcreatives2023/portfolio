import React from "react";
import {images} from '../../constants'
import { motion } from "framer-motion";
const Location2 = () => {
  return (
    <div className=" bg-black">
      <div className=" xl:p-main lg:p-main p-sm xl:py-[8rem] lg:py-[8rem] py-[5rem]">
        <motion.h1 
         initial={{ opacity: 0, y: 45 }}
         whileInView={{
           opacity: 1,
           y: 0,
           transition: {
             duration: 1,
             type: "spring",
             ease: "linear",
             delay:0.5
           },
         }}
        
        className="text-red uppercase text-2xl text-center">
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
             delay:0.9
           },
         }}
        className=" xl:text-title lg:text-title text-center mt-5 font-title xl:leading-title lg:leading-title text-4xl text-yellow">
          14 Floors Up <br /> in DTSJ
        </motion.h1>
        <div className=" slider xl:pt-[8rem] lg:pt-[8rem] pt-[2rem]">
            <img src={images.purpose1}  className='w-[70%] xl:h-[600px] lg:h-[600px] object-cover m-auto' />
        </div>
      </div>
    </div>
  );
};

export default Location2;
