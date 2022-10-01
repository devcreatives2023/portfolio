import React from "react";
import { Icons } from "../../constants";
const Apply = () => {
  return (
    <div className=" bg-yellow">
      <div className=" p-main grid grid-cols-2 py-[8rem]">
        <div className=" w-[70%]">
          <h1 className=" font-title text-[8rem] capitalize leading-[120px]">
            Submit your folio to apply
          </h1>
        </div>
        <div className="mt-[50px]">
          <form className=" flex flex-col gap-y-12">
            <input type="text" placeholder="full name" className="w-[100%] outline-none border-b-2 
            bg-transparent  border-red placeholder:text-red placeholder:text-5xl py-6 placeholder:capitalize"  />
            <input type="email" placeholder="email address" className="w-[100%] outline-none border-b-2 
            bg-transparent  border-red placeholder:text-red placeholder:text-5xl py-6 placeholder:capitalize"  />
            <input type="text" placeholder="portfolio link" className="w-[100%] outline-none border-b-2 
            bg-transparent  border-red placeholder:text-red placeholder:text-5xl py-6 placeholder:capitalize"  />
          </form>
          <div className="flex items-center justify-center mr-[9rem] mt-10">
            <div className=" w-[190px] h-[190px] bg-primary rounded-full text-center flex justify-center items-center text-primary text-2xl uppercase">
              <Icons.FiArrowDownRight fontSize={30} /> Apply
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apply;
