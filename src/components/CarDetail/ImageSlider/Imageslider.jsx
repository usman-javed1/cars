
import Icon from '../../../components/main/Features/icon/icon'; // Assuming you have an Icon component
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [active, setActive] = useState({ left: "#0E0E0E", right: "#0E0E0E" });
  
  const slides = [
    require('../../../images/car detail.png'),
    require('../../../images/car detail.png'),
    require('../../../images/car detail.png'),
    require('../../../images/car detail.png'),
    require('../../../images/car detail.png')
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  return (
    <>
      <div id="default-carousel" className="relative w-full mb-[120px]" data-carousel="slide">
        <div className="relative h-[702px] overflow-hidden rounded-lg">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute w-full h-full transition-all duration-700 ease-in-out ${
                index === currentSlide ? 'block' : 'hidden'
              }`}
              data-carousel-item
            >
              <img
                src={slide}
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </div>

        {/* Left button */}
        <motion.div
          className="bg-lightgray w-[44px] h-[44px] flex justify-center items-center rounded-full featureLeftIcon transition-all duration-300 absolute top-[50%] left-[70px] z-30"
          onClick={prevSlide}
          onHoverStart={() => {
            setActive({
              left: "#fff",
              right: "#0E0E0E",
            });
          }}
          onHoverEnd={() => {
            setActive({
              left: "#0E0E0E",
              right: "#0E0E0E",
            });
          }}
        >
          <div className="featureLeftIconInner transition-all duration-200">
            <Icon direction="left" color={active.left} /> {/* Left Arrow Icon */}
          </div>
          <div className="featureLeftLine transition-all duration-200 absolute"></div>
        </motion.div>

        {/* Right button */}
        <motion.div
          className="bg-lightgray w-[44px] h-[44px] flex justify-center items-center rounded-full featureRightIcon transition-all duration-300 absolute top-[50%] right-[70px] z-30"
          onClick={nextSlide}
          onHoverStart={() => {
            setActive({
              left: "#0E0E0E",
              right: "#fff",
            });
          }}
          onHoverEnd={() => {
            setActive({
              left: "#0E0E0E",
              right: "#0E0E0E",
            });
          }}
        >
          <div className="featureRightIconInner transition-all duration-200">
            <Icon direction="right" color={active.right} /> {/* Right Arrow Icon */}
          </div>
          <div className="featureRightLine transition-all duration-200 absolute"></div>
        </motion.div>
      </div>
    </>
  );
};

export default ImageSlider;
