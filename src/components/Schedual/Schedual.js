import React from "react";
import { Icons } from "../../constants";
import { motion } from "framer-motion";
const Schedual = () => {
  const data = [
    { time: "5:00 -- 5:30 p.m.", subject: "welcome Remarks" },
    { time: "5:00 -- 5:30 p.m.", subject: "welcome Remarks" },
    { time: "5:00 -- 5:30 p.m.", subject: "welcome Remarks" },
    { time: "5:00 -- 5:30 p.m.", subject: "welcome Remarks" },
    { time: "5:00 -- 5:30 p.m.", subject: "welcome Remarks" },
  ];
  return (
    <div className="xl:p-main lg:p-main p-sm xl:py-[8rem] lg:py-[8rem] py-[3rem]" id="scheduale">
      <div className=" border-t-2 border-black">
        {/* scheduale title */}
        <motion.h1
          initial={{ opacity: 0, y: 45 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1.3,
              type: "spring",
              ease: "linear",
              delay:0.5
            },
          }}
        className=" font-title xl:text-title lg:text-title text-4xl xl:mt-[70px] lg:mt-[85px]">
          Schedual <span className=" font-main text-2xl xl:ml-[-40px] lg:ml-[-40px]">(03)</span>
        </motion.h1>
        {/* scheduale text */}
        <div className="xl:text-parg lg:text-parg gap-x-10 pt-3 grid xl:grid-cols-3 lg:grid-cols-3  ">
          <div />
          <div>
            <p>
              Vitae eu commodi or fugiat eius aliquip. Quae natus so ipsa, or
              voluptate. Nesciunt. Do consequat, lorem for incidunt
              reprehenderit. Excepteur nostrum and quasi. Corporis laudantium
              anim,
            </p>
          </div>
          <div>
            <p>
              Vitae eu commodi or fugiat eius aliquip. Quae natus so ipsa, or
              voluptate. Nesciunt. Do consequat, lorem for incidunt
              reprehenderit. Excepteur nostrum and quasi. Corporis laudantium
              anim,
            </p>
          </div>
        </div>
        {/* scheduale dates */}
        <div>
          <div className=" flex justify-between items-center xl:-ml-[35px] lg:-ml-[35px] ml-[-70px] mt-10">
            <h1 className=" font-bold xl:text-4xl lg:text-4xl m-auto capitalize">
              Event agenda
            </h1>
            <h1 className=" xl:text-xl lg:text-xl  uppercase">(subject to change)</h1>
          </div>
          <div className=" grid xl:grid-cols-3 lg:grid-cols-3 grid-cols-2 mt-12 ml-2">
            <div className=" col-span-1" />
            <div className=" col-span-2 flex flex-col  gap-y-10 ">
              {data.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex border-b-[1px] pb-4 xl:text-4xl lg:text-4xl  border-black justify-between"
                  >
                    <h1>{item.time} </h1>
                    <h1>{item.subject} </h1>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* scheduale apply */}
        <div className="mt-[8rem] xl:gap-x-[100px] lg:gap-x-[100px]  xl:px-[8rem] lg:px-[8rem]">
          <span className=" xl:text-3xl lg:text-3xl uppercase">Location (02)</span>
          <motion.span 
            initial={{ opacity: 0, y: 45 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 1.3,
                type: "spring",
                ease: "linear",
                delay:0.9
              },
            }}
          className=" xl:text-[6rem] lg:text-[6rem] text-2xl capitalize xl:leading-[105px] leading-10 lg:leading-[105px] xl:ml-[19rem] lg:ml-[19rem] ml-10
          text-red ">
            An Evening of Nourishment, Insights, Community, and Creative
            Feedback
          </motion.span>
          <div className="flex items-end justify-end mr-[9rem] xl:-mt-10 lg:-mt-10">
            <div className=" xl:w-[190px] lg:w-[190px] xl:h-[190px] lg:h-[190px] w-[100px] h-[100px]
             bg-primary rounded-full text-center flex justify-center items-center text-primary 
             xl:text-2xl  lg:text-2xl uppercase">
              <Icons.FiArrowDownRight fontSize={30} /> Apply
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedual;
