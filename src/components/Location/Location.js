import React from "react";
import { images,Icons } from "../../constants";
import{motion}from 'framer-motion'
const Location = () => {
  return (
    <div className=" xl:pt-[8rem] lg:pt-[8rem] pt-[2rem] " id="location">
      <div className="xl:p-main lg:p-main p-sm">
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
        className=" border-t-2 border-black xl:text-title text-[3rem] lg:text-title  font-title">
          Location
          <span className=" uppercase font-main text-2xl font-semibold ">
            (02)
          </span>
        </motion.h1>
      </div>
      <div className="grid xl:grid-cols-2 lg:grid-cols-2">
        <div className=" xl:p-main lg:p-main p-sm xl:px-[10rem]
          lg:px-[10rem] xl:text-parg tracking-wide lg:text-parg">
          Adipisci ad and esse and illo quo. Nihil qui molestiae but voluptas
          yet proident. Doloremque unde and corporis. Deserunt magni veritatis
          or si. Iure ab for aut for quam, so illo or aut. Fugiat. Illum nihil
          but magnam ipsam so ab but magni.
        </div>
        <div>

        <div className=" ">
          <img src={images.purpose1} className='xl:h-[990px] lg:h-[990px] object-cover ' />
        </div>
        <div className="  " > <motion.img
         initial={{ opacity: 0, y: 45 }}
         whileInView={{
           opacity: 1,
           y: 0,
           transition: {
             duration: 1,
             type: "spring",
             ease: "linear",
           },
         }}
        
        src={images.purpose2} className='xl:w-[500px] lg:w-[500px] xl:h-[300px] lg:h-[300px] w-[300px] h-[200px] xl:mt-[-490px] lg:mt-[-590px] mt-[-100px] xl:ml-[-190px] lg:ml-[-190px] '/></div>  
        </div>

      </div>
        <div className="xl:mt-[15rem] lg:mt-[15rem] mt-[4rem] xl:gap-x-[100px] lg:gap-x-[100px]   xl:px-[8rem] lg:px-[8rem] px-[1rem] ">
        <span className=" xl:text-3xl lg:text-3xl text-xl uppercase">Location (02)</span>
        <motion.span 
         initial={{ opacity: 0, y: 45 }}
         whileInView={{
           opacity: 1,
           y: 0,
           transition: {
             duration: 1,
             type: "spring",
             ease: "linear",
             delay:0.4
         
           },
         }}
        className=" xl:text-[6rem] lg:text-[6rem] capitalize xl:leading-[105px] lg:leading-[105px]  xl:ml-[19rem] lg:ml-[19rem] ml-[3rem] leading-8  text-xl text-red ">
          for local web <br /> & motion designers,digital <br />
          art directors and interactive web developers
        </motion.span>
        <div className="flex items-end justify-end mr-[9rem] xl:mt-10 lg:mt-10">
          <div className=" xl:w-[190px] lg:w-[190px] w-[100px] xl:h-[190px] lg:h-[190px] h-[100px]
           bg-primary rounded-full text-center flex justify-center items-center text-primary xl:text-2xl lg:text-2xl uppercase">
            <Icons.FiArrowDownRight fontSize={30} /> Apply
          </div>
        </div>
       </div>
    </div>
  );
};

export default Location;
