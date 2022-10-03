import { motion } from "framer-motion";
import React from "react";
import { Icons, images } from "../../constants";
const Purpose = () => {
  return (
    <>
      <div div className="xl:p-main  w-screen lg:p-main  p-sm" id="purpose">
        <div className=" border-t-2 pt-4 border-black">
          <div className=" flex items-center ">
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
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
              className=" font-title xl:text-title lg:text-title text-4xl mt-2 "
            >
              Purpose
            </motion.h1>
            <span className=" font-semibold xl:text-2xl lg:text-2xl  xl:mt-[90px] lg:mt-[90px] ">
              (01)
            </span>
          </div>
          <div className=" gap-x-8 grid  mt-10  xl:grid-cols-3 lg:grid-cols-3 grid-cols-1 xl:text-[1.6rem] lg:text-[1.6rem]">
            <p></p>
            <p>
              Velitesse. Ab. Pariatur pariatur sed so officia but incididunt sed
              nesciunt. Nostrud iure adipisicing. Modi. Nostrud iure
              adipisicing. Modi.
            </p>
            <p>
              Velitesse. Ab. Pariatur pariatur sed so officia but incididunt sed
              nesciunt. Nostrud iure adipisicing. Modi. Nostrud iure
              adipisicing. Modi. nesciunt. Nostrud iure adipisicing. Modi.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-[5rem] relative ">
        <div className="relative overflow-hidden">
          <motion.img
            whileInView={{
              scale: 1,
              transition: {
                duration: 1,
                delay: 1,
              },
            }}
            src={images.purpose1}
            className="xl:h-[690px] lg:h-[650px] brightness-[0.7] relative object-cover xl:w-[990px] lg:w-[990px] w-[400px] ml-auto"
          />
          <motion.div
            initial={{ height: "650px" }}
            whileInView={{
              height: "0px",
              transition: {
                duration: 1,
              },
            }}
            exit={{ height: "0px" }}
            className=" h-[750px] hidden xl:inline-block lg:inline-block  xl:border-t-[1px]             
            lg:border-t-[1px] border-none border-b-none border-yellow border-2 w-[990px] bg-primary absolute z-10 top-0 right-0 "
          />
        </div>
        <div className="top-[30%] left-[15%] overflow-hidden z-10 absolute">
          <motion.img
            initial={{ scale: 0.9 }}
            whileInView={{
              scale: 1,
              transition: {
                duration: 1,
                delay: 0.6,
              },
            }}
            src={images.purpose2}
            className="relative xl:w-[400px] lg:w-[400px] object-cover
         xl:h-[500px] lg:h-[500px] w-[150px] h-[300px]  left-[20%] z-0"
          />
          <motion.div
            initial={{ height: "500px" }}
            whileInView={{
              height: "0px",
              transition: {
                duration: 1,
                delay: 0.8,
              },
            }}
            exit={{ height: "0px" }}
            className=" w-[400px] hidden xl:inline-block lg:inline-block  xl:border-t-[1px] lg:border-t-[1px] border-none border-b-none border-yellow border-2  bg-primary absolute z-1 top-0 left-[20%]"
            style={{ borderBottom: "none" }}
          />
        </div>
      </div>

      <div className="mt-[120px] xl:gap-x-[100px] lg:gap-x-[100px] p-sm  xl:px-[8rem] lg:px-[8rem] w-screen">
        <span className=" xl:text-3xl lg:text-3xl text-lg uppercase">
          purpose (01)
        </span>
        <motion.span
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{
            opacity: 1,
            scale: 1,
            transition: {
              duration: 1,
              type: "spring",
              ease: "linear",
              delay: 0.5,
            },
          }}
          className=" xl:text-[6rem] lg:text-[6rem] capitalize xl:leading-[105px] lg:leading-[105px]
         xl:ml-[19rem] lg:ml-[19rem] ml-[40px] leading-[40px] text-xl text-red "
        >
          for local web <br /> & motion designers,digital <br />
          art directors and interactive web developers
        </motion.span>
        <div className="flex items-end justify-end mr-[9rem] xl:-mt-12 lg:-mt-12">
          <div
            className=" xl:w-[190px] lg:w-[190px] xl:h-[190px] lg:h-[190px] w-[100px]
           h-[100px] bg-primary rounded-full text-center flex justify-center items-center
            text-primary xl:text-2xl lg:text-2xl uppercase"
          >
            <Icons.FiArrowDownRight fontSize={30} /> Apply
          </div>
        </div>
      </div>
    </>
  );
};

export default Purpose;
