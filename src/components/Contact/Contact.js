import React from "react";
import { Icons } from "../../constants";
import { motion } from "framer-motion";
const Contact = () => {
  return (
    <div className=" bg-black" id="contact">
      <div className="xl:p-main lg:p-main p-sm xl:pt-[8rem] lg:pt-[8rem] pt-[3rem]">
        {/* footer title */}
        <motion.h1 
          initial={{ opacity: 0, y: 45 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1.3,
              type: "spring",
              ease: "linear",
              delay: 0.5,
            },
          }}
        className=" xl:text-title lg:text-title text-4xl  text-primary xl:leading-title lg:leading-title capitalize">
          south bay
        </motion.h1>
        <div className=" flex justify-between">
          <motion.h1
            initial={{ opacity: 0, y: 45 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 1.3,
                type: "spring",
                ease: "linear",
                delay: 1.5,
              },
            }}
          className=" xl:text-title lg:text-title text-4xl mt-9 text-primary xl:leading-title lg:leading-title capitalize">
            made
          </motion.h1>
          <div className="flex items-end justify-end mr-[9rem] mt-10">
            <div
              className=" xl:w-[190px] lg:w-[190px] w-[100px] xl:h-[190px] lg:h-[190px] h-[100px] bg-yellow text-black
             rounded-full text-center flex justify-center items-center  xl:text-2xl lg:text-2xl uppercase"
            >
              <Icons.FiArrowDownRight fontSize={30} /> Apply
            </div>
          </div>
        </div>
        <motion.h1
          initial={{ opacity: 0, y: 45 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1.3,
              type: "spring",
              ease: "linear",
              delay: 1.5,
            },
          }}
          className=" xl:text-title lg:text-title text-[4rem]  text-yellow  font-title
         capitalize text-center xl:mt-[-50px] lg:mt-[-50px] mt-[40px]"
        >
          since '01
        </motion.h1>
        {/* -------------- */}
        <div className=" border-t-2 mt-6 xl:mt-0 lg:mt-0 border-primary flex flex-col xl:flex-row lg:flex-row  justify-between">
          <div className=" flex flex-col gap-y-10 text-primary py-[3rem]">
            {/* rights reserved  */}
            <div className=" flex items-center uppercase leading-5 xl:text-xl lg:text-xl font-semibold  gap-x-2 bg-main">
              <Icons.IoLogoReddit className=" text-4xl" />
              <span>
                a digital
                <br />
                design agency
              </span>
            </div>
            <div className=" text-gray-400 flex gap-x-2 items-center xl:text-xl lg:text-xl">
              Abrar , Inc <Icons.BsHeart /> 2022{" "}
            </div>
          </div>
          {/* contact links */}
          <div className=" grid grid-cols-2  py-[3rem]">
            <div className=" text-primary flex flex-col gap-4  ">
              <h1 className=" capitalize xl:text-2xl lg:text-2xl">social</h1>
              <ul className=" capitalize flex flex-col gap-4 text-gray-400">
                <li className=" flex items-center gap-x-2 xl:text-xl lg:text-xl">
                  <Icons.FiArrowDownRight /> <a href=""> Instagram </a>
                </li>
                <li className=" flex items-center gap-x-2 xl:text-xl lg:text-xl">
                  <Icons.FiArrowDownRight /> <a href=""> twitter </a>
                </li>
                <li className=" flex items-center gap-x-2 xl:text-xl lg:text-xl">
                  <Icons.FiArrowDownRight /> <a href=""> linkedin </a>
                </li>
                <li className=" flex items-center gap-x-2 xl:text-xl lg:text-xl">
                  <Icons.FiArrowDownRight /> <a href=""> awwwards </a>
                </li>
              </ul>
            </div>
            <div className=" text-primary flex flex-col gap-4  ">
              <h1 className=" capitalize xl:text-2xl lg:text-2xl">contact</h1>
              <ul className=" capitalize flex flex-col gap-4 text-gray-400">
                <li className=" flex items-center gap-x-2 xl:text-xl lg:text-xl">
                   <a href=""> example@gmail.com </a>
                </li>
                <li className=" flex items-center gap-x-2 xl:text-xl lg:text-xl">
                   <a href=""> example@gmail.com</a>
                </li>
                <li className=" flex items-center gap-x-2 xl:text-xl lg:text-xl">
                   <a href=""> example@gmail.com </a>
                </li>
                <li className=" flex items-center gap-x-2 xl:text-xl lg:text-xl">
                   <a href=""> 123456789 </a>
                </li>
              </ul>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
