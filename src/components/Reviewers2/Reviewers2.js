import React from "react";
import { images } from "../../constants";
const Reviewers2 = () => {
  return (
    <>
      <div div className="p-main ">
        <div className=" border-t-2 pt-[6rem]  pb-[6rem] border-black">
          <div className=" flex items-center  justify-center">
            <h1 className="p-main  font-title text-title leading-title  text-center">
              Meet the <br /> Reviewers <span className="text-2xl  font-main ml-[-40px] font-semibold">(02) </span>
            </h1>
          </div>
          <div className=" flex justify-center p-main m-auto text-center items-center gap-x-[120px]">
            <div className=" w-[500px] h-[600px]">LEft side <img  className="w-[500px] h-[600px] object-cover" src={images.purpose2}/></div>
            <div className=" w-[500px] h-[600px]">Right side <img className="w-[500px] h-[600px] object-cover"  src={images.purpose2}/></div>
          </div>
      
        </div>
      </div>
    </>
  );
};

export default Reviewers2;
