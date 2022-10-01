import React from "react";
import { Icons } from "../../constants";
const Schedual = () => {
  const data = [
    { time: "5:00 -- 5:30 p.m.", subject: "welcome Remarks" },
    { time: "5:00 -- 5:30 p.m.", subject: "welcome Remarks" },
    { time: "5:00 -- 5:30 p.m.", subject: "welcome Remarks" },
    { time: "5:00 -- 5:30 p.m.", subject: "welcome Remarks" },
    { time: "5:00 -- 5:30 p.m.", subject: "welcome Remarks" },
  ];
  return (
    <div className="p-main py-[8rem]">
      <div className=" border-t-2 border-black">
        {/* scheduale title */}
        <h1 className=" font-title text-title">
          Schedual <span className=" font-main text-2xl ml-[-40px]">(03)</span>
        </h1>
        {/* scheduale text */}
        <div className="text-parg gap-x-10  grid grid-cols-3 ">
          <div />
          <div>
            <p>
              Vitae eu commodi or fugiat eius aliquip. Quae natus so ipsa, or
              voluptate. Nesciunt. Do consequat, lorem for incidunt
              reprehenderit. Excepteur nostrum and quasi. Corporis laudantium
              anim,{" "}
            </p>{" "}
          </div>
          <div>
            <p>
              Vitae eu commodi or fugiat eius aliquip. Quae natus so ipsa, or
              voluptate. Nesciunt. Do consequat, lorem for incidunt
              reprehenderit. Excepteur nostrum and quasi. Corporis laudantium
              anim,{" "}
            </p>{" "}
          </div>
        </div>
        {/* scheduale dates */}
        <div>
          <div className=" flex justify-between items-center -ml-[35px] mt-10">
            <h1 className=" font-bold text-4xl m-auto capitalize">
              Event agenda
            </h1>
            <h1 className=" text-xl uppercase">(subject to change)</h1>
          </div>
          <div className=" grid grid-cols-3 mt-12 ml-2">
            <div className=" col-span-1" />
            <div className=" col-span-2 flex flex-col  gap-y-10 ">
              {data.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex border-b-[1px] pb-4 text-4xl  border-black justify-between"
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
        <div className="mt-[8rem] gap-x-[100px]  px-[8rem]">
          <span className=" text-3xl uppercase">Location (02)</span>
          <span className=" text-[6rem] capitalize leading-[105px] ml-[19rem] text-red ">
            An Evening of Nourishment, Insights, Community, and Creative
            Feedback
          </span>
          <div className="flex items-end justify-end mr-[9rem] -mt-10">
            <div className=" w-[190px] h-[190px] bg-primary rounded-full text-center flex justify-center items-center text-primary text-2xl uppercase">
              <Icons.FiArrowDownRight fontSize={30} /> Apply
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedual;
