import React from "react";
import { Icons } from "../../constants";
const Contact = () => {
  return (
    <div className=" bg-black">
      <div className="p-main pt-[8rem]">
        {/* footer title */}
        <h1 className=" text-title  text-primary leading-title capitalize">
          south bay
        </h1>
        <div className=" flex justify-between">
          <h1 className=" text-title mt-9 text-primary leading-title capitalize">
            made
          </h1>
          <div className="flex items-end justify-end mr-[9rem] mt-10">
            <div
              className=" w-[190px] h-[190px] bg-yellow text-black
             rounded-full text-center flex justify-center items-center  text-2xl uppercase"
            >
              <Icons.FiArrowDownRight fontSize={30} /> Apply
            </div>
          </div>
        </div>
        <h1
          className=" text-title  text-yellow  font-title
         capitalize text-center mt-[-50px]"
        >
          since '01
        </h1>
        {/* -------------- */}
        <div className=" border-t-2 border-primary flex  justify-between">
          <div className=" flex flex-col gap-y-10 text-primary py-[3rem]">
            {/* rights reserved  */}
            <div className=" flex items-center uppercase leading-5 text-xl font-semibold  gap-x-2 bg-main">
              <Icons.IoLogoReddit className=" text-4xl" />
              <span>
                a digital
                <br />
                design agency
              </span>
            </div>
            <div className=" text-gray-400 flex gap-x-2 items-center text-xl">
              Abrar , Inc <Icons.BsHeart /> 2022{" "}
            </div>
          </div>
          {/* contact links */}
          <div className=" grid grid-cols-2  py-[3rem]">
            <div className=" text-primary flex flex-col gap-4  ">
              <h1 className=" capitalize text-2xl">social</h1>
              <ul className=" capitalize flex flex-col gap-4 text-gray-400">
                <li className=" flex items-center gap-x-2 text-xl">
                  <Icons.FiArrowDownRight /> <a href=""> Instagram </a>
                </li>
                <li className=" flex items-center gap-x-2 text-xl">
                  <Icons.FiArrowDownRight /> <a href=""> twitter </a>
                </li>
                <li className=" flex items-center gap-x-2 text-xl">
                  <Icons.FiArrowDownRight /> <a href=""> linkedin </a>
                </li>
                <li className=" flex items-center gap-x-2 text-xl">
                  <Icons.FiArrowDownRight /> <a href=""> awwwards </a>
                </li>
              </ul>
            </div>
            <div className=" text-primary flex flex-col gap-4  ">
              <h1 className=" capitalize text-2xl">contact</h1>
              <ul className=" capitalize flex flex-col gap-4 text-gray-400">
                <li className=" flex items-center gap-x-2 text-xl">
                   <a href=""> example@gmail.com </a>
                </li>
                <li className=" flex items-center gap-x-2 text-xl">
                   <a href=""> example@gmail.com</a>
                </li>
                <li className=" flex items-center gap-x-2 text-xl">
                   <a href=""> example@gmail.com </a>
                </li>
                <li className=" flex items-center gap-x-2 text-xl">
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
