import React from "react";
import { Icons } from "../../constants";
import { motion } from "framer-motion";
const Apply = () => {
  return (
    <div className=" bg-yellow w-screen" id="apply">
      <div className=" p-sm xl:p-main lg:p-main grid xl:grid-cols-2 lg:grid-cols-2 xl:py-[8rem] lg:py-[8rem] py-[3rem]">
        <div className=" w-[70%]">
          <h1 className=" font-title xl:text-[8rem] lg:text-[8rem] text-3xl capitalize xl:leading-[120px] lg:leading-[120px]">
            <motion.span
              initial={{ opacity: 0, y: 45 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 1.3,
                  type: "spring",
                  ease: "linear",
                },
              }}
            >
              Submit{" "}
            </motion.span>{" "}
            <motion.span
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
            >
              your
            </motion.span>{" "}
            <motion.span
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
            >
              folio to{" "}
            </motion.span>{" "}
            <motion.span
              initial={{ opacity: 0, y: 45 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 1.3,
                  type: "spring",
                  ease: "linear",
                  delay: 1.4,
                },
              }}
            >
              apply
            </motion.span>
          </h1>
        </div>
        <div className="mt-[50px]">
          <form className=" flex flex-col gap-y-12 w-screen">
            <motion.input
              initial={{ opacity: 0, x: 10 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                  duration: 1.3,
                  type: "spring",
                  ease: "linear",
                  delay: 1,
                },
              }}
              type="text"
              placeholder="full name"
              className="xl:w-[100%] lg:w-[100%] w-[90%] outline-none border-b-2 
            bg-transparent  border-red placeholder:text-red xl:placeholder:text-5xl lg:placeholder:text-5xl placeholder:text-xl    py-6 placeholder:capitalize"
            />
            <motion.input
              initial={{ opacity: 0, x: 10 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                  duration: 1.3,
                  type: "spring",
                  ease: "linear",
                  delay: 1.5,
                },
              }}
              type="email"
              placeholder="email address"
              className="xl:w-[100%] lg:w-[100%] w-[90%] outline-none border-b-2 
            bg-transparent  border-red placeholder:text-red xl:placeholder:text-5xl lg:placeholder:text-5xl placeholder:text-xl  py-6 placeholder:capitalize"
            />
            <motion.input
              initial={{ opacity: 0, x: 10 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                  duration: 1.3,
                  type: "spring",
                  ease: "linear",
                  delay: 1.8,
                },
              }}
              type="text"
              placeholder="portfolio link"
              className="xl:w-[100%] lg:w-[100%] w-[90%] outline-none border-b-2 
            bg-transparent  border-red placeholder:text-red xl:placeholder:text-5xl lg:placeholder:text-5xl placeholder:text-xl  py-6 placeholder:capitalize"
            />
          </form>
          <div className="flex items-center justify-center mr-[9rem] mt-10">
            <div className=" xl:w-[190px] lg:w-[190px] w-[100px] xl:h-[190px] lg:h-[190px] h-[100px] bg-primary rounded-full text-center flex justify-center items-center text-primary xl:text-2xl lg:text-2xl uppercase">
              <Icons.FiArrowDownRight fontSize={30} /> Apply
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apply;
