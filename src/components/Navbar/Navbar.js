import React from "react";
import { Icons } from "../../constants";
import { motion } from "framer-motion";
import Sidebar from "./Sidebar";
const menuvariants = {
  open: {
    y: 0,
    display: "block",
    transition: {
      x: {
        stiffness: 1000,
        velocity: "1000",
        duration: 2,
      },
      ease: "easeInOut",
    },
  },
  closed: {
    y: -1000,
    display: "none",
    transition: {
      duration: 2,
    },
  },
  default: {
    y: -100,
    transition: {
      duration: 2,
    },
  },
};

const Navbar = () => {
  const [toggle, setToggle] = React.useState(false);
  const [menu, setMenu] = React.useState(false);
  return (
    <>
      <motion.div
        initial="default"
        animate={toggle ? "open" : "closed"}
        exit="default"
        variants={menuvariants}
        toggle={toggle}
      >
        <Sidebar show={setToggle} />
      </motion.div>
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
          <motion.button
            onClick={() => setToggle(!toggle)}
            className=" flex gap-y-2 justify-center  items-center flex-col cursor-pointer"
          >
            <span className="w-[30px] h-[2px] bg-yellow" />
            <span className="w-[30px] h-[2px] bg-yellow" />
            <span className="w-[30px] h-[2px] bg-yellow" />
          </motion.button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
