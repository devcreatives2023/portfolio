import React from "react";
import { Icons, images } from "../../constants";
const Carousel = () => {
  const data = [
    { img: images.loc1 },
    { img: images.loc2 },
    { img: images.loc3 },
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
//   previous slide
    const prevSlide = () => {
      setCurrent(current === 0 ? data.length - 1 : current - 1);
    };

  //   for autoplay slides
  React.useEffect(() => {
    timeOut =
      autoplay &&
      setTimeout(() => {
        nextSlide();
      }, 6000);
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
      <>
        <div className=" absolute right-0"> <button onClick={prevSlide} className='border xl:text-[12rem] lg:text-[12rem] text-white hover:text-yellow transition duration-300'><Icons.FiArrowDownLeft/> </button></div>
        <div>
          {data.map((item, index) => {
            return (
              <div
                key={index}
                className={
                  index == current
                    ? `
                   border-[4px] flex flex-1 absolute left-[15%] pointer-events-auto opacity-100 transition-[0.5s]  duration-700 scale-[1] `
                    : "pointer-events-none scale-[0] transition-[0.5s] overflow-hidden duration-700 flex flex-1 absolute"
                }
              >
                <img
                  src={item.img}
                  className=" xl:h-[550px] lg:h-[550px] brightness-75  xl:w-[990px] lg:w-[990px] object-cover"
                />
              </div>
            );
          })}
        </div>
        <div> <button onClick={nextSlide}className='xl:text-[12rem] lg:text-[12rem] border text-white hover:text-yellow transition duration-300'><Icons.FiArrowDownRight /> </button></div>
      </>
    </div>
  );
};

export default Carousel;
