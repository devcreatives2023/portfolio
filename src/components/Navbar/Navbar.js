import React from "react";
import { Icons } from "../../constants";
import { motion } from "framer-motion";
const menuvariants = {
  default: {
    width: "30px",
  },
  hover: {
    width: "20px",
  },
};
const Navbar = () => {
  const [menu, setMenu] = React.useState(false);
  return (
    <div className="p-main">
      <div className="border-b-2 border-white pb-[2rem] flex justify-between">
      <div className=" flex items-center uppercase leading-5 text-xl font-semibold  gap-x-2 bg-main">
        <Icons.IoLogoReddit className=" text-4xl" />
        <span>
          a digital
          <br />
          design agency
        </span>
      </div>
      <motion.div className="flex gap-y-2 justify-center items-center flex-col cursor-pointer">
        <span className="w-[30px] h-[2px] bg-yellow" />
        <span className="w-[30px] h-[2px] bg-yellow" />
        <span className="w-[30px] h-[2px] bg-yellow" />
      </motion.div>
      </div>

    </div>
  );
};

export default Navbar;
