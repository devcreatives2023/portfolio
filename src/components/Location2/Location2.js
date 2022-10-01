import React from "react";
import {images} from '../../constants'
const Location2 = () => {
  return (
    <div className=" bg-black">
      <div className=" p-main py-[8rem]">
        <h1 className="text-red uppercase text-2xl text-center">
          Location (02)
        </h1>
        <h1 className=" text-title text-center mt-5 font-title leading-title text-yellow">
          14 Floors Up <br /> in DTSJ
        </h1>
        <div className=" slider pt-[8rem]">
            <img src={images.purpose1}  className='w-[70%] h-[600px] object-cover m-auto' />
        </div>
      </div>
    </div>
  );
};

export default Location2;
