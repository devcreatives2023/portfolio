import React from "react";
import {images } from "../../constants";
const CarouselLeft = () => {
  const data = [
    { img: images.Reviewer1 },
    { img: images.Reviewer2 },
    { img: images.Reviewer3 },
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
      }, 5000);
  });

  return (
    <div
      className="flex"
      onMouseEnter={() => {setAutoplay(false)
      clearTimeout(timeOut)}}
      onMouseLeave={() => {
      setAutoplay(true);  
      }}
    >
      <div className="relative xl:w-[100%] lg:w-[100%] w-[100%]  h-[100%]">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className={
                index == current
                  ? `
                   border-[4px] border-yellow
                 flex flex-1 absolute  pointer-events-auto opacity-100 transition-[0.5s]  duration-200 scale-[1] `
                  : "pointer-events-none scale-[0] transition-[0.5s] overflow-hidden  flex flex-1 absolute"
              }
            >
              <img src={item.img} className="xl:w-[600px] lg:w-[600px] w-[500px] xl:h-[650px] lg:h-[650px] object-cover" />
            </div>
          );
        })}

        {/* pagination */}
        <div className="absolute bottom-[-620px] left-[39%] translate-[50%]">
          {data.map((item, index) => {
            return (
              <div
                key={index}
                className={
                  index >= current
                    ? `
                    pagination active  hover:scale-[1.2]  w-[15px] 
                    inline-block ml-2 cursor-pointer  bg-yellow rounded-full h-[15px]`
                    :"w-[15px] inline-block ml-2 cursor-pointer hover:scale-[1.2] bg-[#cbcaca]  rounded-full h-[15px] "
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

export default CarouselLeft;
