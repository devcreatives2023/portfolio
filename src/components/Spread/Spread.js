import React from "react";
import { motion } from "framer-motion";
const Spread = () => {
  return (
    <div div className="bg-primary ">
      <div className="   xl:py-[8rem] lg:py-[8rem] xl:p-main lg:p-main p-sm ">
        <div className=" flex items-center  text-yellow justify-center">
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
          className="p-main  font-title xl:text-title lg:text-title text-4xl xl:leading-title lg:leading-title first-letter:  text-center">
           spread the <br /> world <span className=" uppercase text-2xl xl:ml-[-50px] lg:ml-[-50px] font-main">(01)</span>
          </motion.h1>
        </div>
      </div>
    </div>
  );
};

export default Spread;
