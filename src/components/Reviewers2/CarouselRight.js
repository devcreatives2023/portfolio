import { motion } from "framer-motion";
import React from "react";
import { images } from "../../constants";
const CarouselRight = () => {
  const data = [
    {
      img: images.logo3,
      name: " Ullamco.",
      text: " laborum for laborum ",
    },
    {
      img: images.logo2,
      name: " velitesse magni.",
      text: " Commodo ullam nostrum.",
    },
    {
      img: images.logo1,
      name: "Aliquip molestiae.",
      text: "Cat ipsum dolor .",
    },
  ];
  // data index
  const [current, setCurrent] = React.useState(0);
  //   autoplay
  const [autoplay, setAutoplay] = React.useState(true);
  // time out
  let timeOut = null;
  // next slide
  const nextSlide = () => {
    setCurrent(current === data.length - 1 ? 0 : current + 1);
  };

  //   for autoplay slides
  React.useEffect(() => {
    timeOut =
      autoplay &&
      setTimeout(() => {
        nextSlide();
      }, 7000);
  });
  return (
    <div
      className="flex"
      onMouseEnter={() => {
        setAutoplay(false);
        clearTimeout(timeOut);
      }}
      onMouseLeave={() => {
        setAutoplay(true);
      }}
    >
      <div className="relative w-[100%] h-[100%]">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className={
                index == current
                  ? `
                   
                 flex flex-col flex-1 absolute  pointer-events-auto opacity-100 transition-[0.5s]  duration-200 scale-[1] `
                  : "pointer-events-none scale-[0] transition-[0.5s] overflow-hidden  flex flex-1 absolute"
              }
            >
              <img
                src={item.img}
                className="xl:w-[600px] lg:w-[600px] xl:h-[500px] lg:h-[500px] object-cover border-[4px] border-yellow"
              />
              <motion.div
                className=" font-semibold text-left xl:w-[60%] lg:w-[60%] w-[80%] text-[1.6rem] mt-12 uppercase"
              >
                <p>{item.name} </p>
                <p>{item.text} </p>
              </motion.div>
            </div>
          );
        })}

        {/* pagination */}
        <div className="absolute bottom-[-440px] left-[42%] translate-[50%]">
          {data.map((item, index) => {
            return (
              <div
                key={index}
                className={
                  index >= current
                    ? `
                    pagination active  hover:scale-[1.2]   w-[15px] 
                    inline-block ml-2 cursor-pointer  bg-yellow rounded-full h-[15px]`
                    : "w-[15px] inline-block ml-2 cursor-pointer hover:scale-[1.2] bg-[#cbcaca]  rounded-full h-[15px] "
                }
                onClick={() => setCurrent(index)}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CarouselRight;
