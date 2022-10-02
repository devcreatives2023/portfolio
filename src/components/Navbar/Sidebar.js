import React from "react";
import { Icons } from "../../constants";
import { motion } from "framer-motion";
const Sidebar = ({ show, toggle }) => {
  const handleNavigate = () => {
    show(toggle);
    window.scrollTo(0, 0);
  };
  return (
    <motion.div className=" bg-yellow xl:w-[100%] lg:w-[100%] w-screen h-[100%] top-0 
     bottom-0 xl:p-main lg:p-main p-sm fixed z-[100000000]">
      <div className="border-b-2 text-black border-black xl:pb-[2rem] lg:pb-[2rem] flex justify-between">
        <div className=" flex xl:items-center lg:items-center  uppercase leading-5 xl:text- xl lg:text-xl font-semibold  gap-x-2 bg-main">
          <Icons.IoLogoReddit className=" xl:text-4xl lg:text-4xl" />
          <span>
            a digital
            <br />
            design agency
          </span>
        </div>
        <button onClick={() => show(toggle)} className="xl:text-3xl lg:text-3xl text-xl">
          <Icons.GiCrossMark />
        </button>
      </div>
      <motion.div className=" xl:text-[4rem] lg:text-[4rem] text-black capitalize  ">
        <motion.ul
         
          className="flex flex-col mt-12 justify-center  items-center"
        >
          <li
            onClick={handleNavigate}
            className=" font-main hover:font-title transition-all duration-300 ease-in-out flex items-center"
          >
            <span>
              <Icons.GiHeartKey className=" xl:text-3xl lg:text-3xl text-xl" />
            </span>
            <a href="#purpose">purpose </a>
            <span>
              <Icons.GiHeartKey className=" xl:text-3xl lg:text-3xl text-xl mt-2 rotate-[90deg]" />
            </span>
          </li>
          <li
            onClick={handleNavigate}
            className=" font-main hover:font-title transition-all duration-300 ease-in-out flex items-center"
          >
            <span>
              <Icons.GiHeartKey className=" xl:text-3xl lg:text-3xl text-xl" />
            </span>
            <a href="#location">location </a>
            <span>
              <Icons.GiHeartKey className=" xl:text-3xl lg:text-3xl text-xl mt-2 rotate-[90deg]" />
            </span>
          </li>
          <li
            onClick={handleNavigate}
            className=" font-main hover:font-title transition-all duration-300 ease-in-out flex items-center"
          >
            <span>
              <Icons.GiHeartKey className=" xl:text-3xl lg:text-3xl text-xl" />
            </span>
            <a href="#scheduale">scheduale </a>
            <span>
              <Icons.GiHeartKey className=" xl:text-3xl lg:text-3xl text-xl mt-2 rotate-[90deg]" />
            </span>
          </li>
          <li
            onClick={handleNavigate}
            className=" font-main hover:font-title transition-all duration-300 ease-in-out flex items-center"
          >
            <span>
              <Icons.GiHeartKey className=" xl:text-3xl lg:text-3xl text-xl" />
            </span>
            <a href="#">apply </a>
            <span>
              <Icons.GiHeartKey className=" xl:text-3xl lg:text-3xl text-xl mt-2 rotate-[90deg]" />
            </span>
          </li>
          <li
            onClick={handleNavigate}
            className=" font-main hover:font-title transition-all duration-300 ease-in-out flex items-center"
          >
            <span>
              <Icons.GiHeartKey className=" xl:text-3xl lg:text-3xl text-xl" />
            </span>
            <a href="#contact">contact </a>
            <span>
              <Icons.GiHeartKey className=" xl:text-3xl lg:text-3xl text-xl mt-2 rotate-[90deg]" />
            </span>
          </li>
        </motion.ul>
      </motion.div>
      <div className=" flex justify-between mt-[50px] xl:text-xl lg:text-xl ">
        <p className=" uppercase text-black">
          south bay made <br />
          since '01
        </p>
        <p className=" uppercase text-black">
          now accepting <br />
          applications
        </p>
      </div>
    </motion.div>
  );
};
export default Sidebar;
