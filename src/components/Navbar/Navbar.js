import React from "react";
import { Icons } from "../../constants";
import { motion } from "framer-motion";
import Sidebar from "./Sidebar";
// sidebar motion
const menuvariants = {
  open: {
    y: 0,
    display: "flex",
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
    // display:"none"
  },
};

const Navbar = () => {
  // open sidebar
  const [toggle, setToggle] = React.useState(false);
  // position of sidebar with scroll
  const [navbarPosition, setNavbarPosition] = React.useState(0); //dealing with scroll
  const [show, setShow] = React.useState(false); //dealing with navabr
  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > navbarPosition) {
        setShow(true);
      } else {
        setShow(false);
      }
    }
    setNavbarPosition(window.scrollY); //remeber the last position of scrolly
  };

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
    }
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [navbarPosition]);

  return (
    <>
      <motion.div
        // initial="default"
        animate={toggle ? "open" : "closed"}
        // exit="default"
        variants={menuvariants}
        toggle={toggle}
      >
        <Sidebar show={setToggle} />
      </motion.div>
      <div className={` fixed xl:p-main z-[1000000] h-[110px]
        lg:p-main p-sm ${navbarPosition?" bg-red":"bg-red"} left-0 right-0 
        transition duration-500 ${show && "hidden" }  ` }>
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
