import React from "react";
import { images,Icons } from "../../constants";
const Location = () => {
  return (
    <div className=" pt-[8rem] ">
      <div className="p-main">
        <h1 className=" border-t-2 border-black text-title font-title">
          Location{" "}
          <span className=" uppercase font-main text-2xl font-semibold ml-[-40px]">
            (02)
          </span>
        </h1>
      </div>
      <div className="grid grid-cols-2">
        <div className=" p-main px-[10rem] text-parg">
          Adipisci ad and esse and illo quo. Nihil qui molestiae but voluptas
          yet proident. Doloremque unde and corporis. Deserunt magni veritatis
          or si. Iure ab for aut for quam, so illo or aut. Fugiat. Illum nihil
          but magnam ipsam so ab but magni.
        </div>
        <div>

        <div className=" ">
          <img src={images.purpose1} className='h-[990px] object-cover ' />
        </div>
        <div className="  " > <img  
        src={images.purpose2} className='w-[500px] h-[500px] mt-[-590px] ml-[-190px] '/></div>  
        </div>

      </div>
        <div className="mt-[15rem] gap-x-[100px]   px-[8rem]">
        <span className=" text-3xl uppercase">Location (02)</span>
        <span className=" text-[6rem] capitalize leading-[105px] ml-[19rem] text-red ">
          for local web <br /> & motion designers,digital <br />
          art directors and interactive web developers
        </span>
        <div className="flex items-end justify-end mr-[9rem] mt-10">
          <div className=" w-[190px] h-[190px] bg-primary rounded-full text-center flex justify-center items-center text-primary text-2xl uppercase">
            <Icons.FiArrowDownRight fontSize={30} /> Apply
          </div>
        </div>
       </div>
    </div>
  );
};

export default Location;
