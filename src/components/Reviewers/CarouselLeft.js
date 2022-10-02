import { motion } from "framer-motion";
import React from "react";
import { images } from "../../constants";
const CarouselLeft = () => {
  const slides = [
    { img: images.purpose1 },
    { img: images.purpose2 },
    { img: images.purpose1 },
  ];

  const [currentSlide, setCurrentSlide] = React.useState();
  const slideLength = slides.length;
  const forWardSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
  };
  const backwardSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
  };
  React.useEffect(() => {
    setCurrentSlide(0);
  }, []);
  return (
    <>
      {/* slider */}
      <div className=" overflow-hidden mt-10 xl:mt-0 lg:mt-0 ">
        {slides.map((item, index) => {
          return (
            <motion.div
              initial={{ width: "0px" }}
              whileInView={{ width: "100%" }}
              transition={{
                type: "spring",
                ease: "linear",
                delay: 1,
                duration: 1,
              }}
              key={index}
            >
              {index === currentSlide && (
                <div>
                  <motion.img
                    src={item.img}
                    initial={{ opacity: 2, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 1 }}
                    transition={{
                      duration: 1,
                    }}
                    style={{ transformOrigin: "top left" }}
                    className="h-[45vh]  xl:h-[80vh] lg:h-[80vh]  object-cover xl:w-[99%]  lg:w-[100%]"
                  />
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </>
  );
};

export default CarouselLeft;
