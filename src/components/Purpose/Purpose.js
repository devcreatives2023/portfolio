import { motion } from "framer-motion";
import React from "react";
import { Icons, images } from "../../constants";
const Purpose = () => {
  return (
    <>
      <div div className="p-main ">
        <div className=" border-t-2 pt-4 border-black">
          <div className=" flex items-center ">
            <h1 className=" font-title text-title ">Purpose</h1>
            <span className=" font-semibold text-2xl  mt-[90px] "> (01)</span>
          </div>
          <div className=" gap-x-8 grid grid-cols-3 text-[1.6rem]">
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
      <div className="mt-[5rem] relative  ">
        <div className="relative ">
          <motion.img
            src={images.purpose1}
            className="h-[650px] brightness-[0.7] relative object-cover w-[990px] ml-auto"
          />
          <motion.div
            initial={{ height: "650px" }}
            whileInView={{
              height: "0px",
              transition: {
                duration: 1,
                delay: 1.4,
              },
            }}
            exit={{ height: "0px" }}
            className=" h-[650px]  border-t-[1px] border-b-none border-yellow border-2 w-[990px] bg-primary absolute z-10 top-0 right-0 "
            // style={{borderBottom:"none"}}
          />
        </div>
        <div className="top-[30%] left-[15%]  z-10 absolute">
          <img
            src={images.purpose2}
            className="relative w-[400px] object-cover
         h-[500px]  left-[20%] z-0"
          />
          <motion.div
            initial={{ height: "500px" }}
            whileInView={{
              height: "0px",
              transition: {
                duration: 1,
                delay: 1.4,
              },
            }}
            exit={{ height: "0px" }}
            className=" w-[400px]  border-t-[1px] border-b-none border-yellow border-2  bg-primary absolute z-1 top-0 left-[20%]"
            style={{ borderBottom: "none" }}
          />
        </div>
      </div>

      <div className="mt-[120px] gap-x-[100px]   px-[8rem]">
        <span className=" text-3xl uppercase">purpose (01)</span>
        <span className=" text-[6rem] capitalize leading-[105px] ml-[19rem] text-red ">
          for local web <br /> & motion designers,digital <br />
          art directors and interactive web developers
        </span>
        <div className="flex items-end justify-end mr-[9rem] -mt-12">
          <div className=" w-[190px] h-[190px] bg-primary rounded-full text-center flex justify-center items-center text-primary text-2xl uppercase">
            <Icons.FiArrowDownRight fontSize={30} /> Apply
          </div>
        </div>
      </div>
    </>
  );
};

export default Purpose;
