import React from "react";

const Header = () => {
  return (
    <div className="p-main">
      <div className=" capitalize leading-[150px] text-title tracking-wider">
        <h1 className=""> beaunfire </h1>
        <h1>Portfolio Review</h1>
      </div>
      <div className=" flex  justify-end text-title font-title text-yellow">
        Summer '22
      </div>
      <div className=" flex justify-between items-start text-primary uppercase text-xl">
        <p>
          South bay made <br /> made' 01
        </p>
        <h1>
          now accepting <br /> applications{" "}
        </h1>
      </div>
    </div>
  );
};

export default Header;
