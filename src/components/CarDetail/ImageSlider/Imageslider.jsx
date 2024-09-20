import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { motion } from "framer-motion";
import Icon from '../../../components/main/Features/icon/icon'; // Assuming you have an Icon component

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const ImageSlider = () => {
  const [active, setActive] = useState({
    left: "#0E0E0E",
    right: "#0E0E0E",
  });
  const slides = [
    require('../../../images/car detail.png'),
    require('../../../images/Mask group (2).png'),
    require('../../../images/car detail.png'),
    require('../../../images/car detail.png'),
    require('../../../images/car detail.png'),
  ];

  // Refs for navigation buttons
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="relative w-full mb-[120px]">
      <Swiper
        navigation={{
          prevEl: prevRef.current, // Left button ref
          nextEl: nextRef.current, // Right button ref
        }}
        onSwiper={(swiper) => {
          // Make sure Swiper re-attaches the navigation after rendering custom buttons
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.update();
        }}
        modules={[Navigation]}
        className="mySwiper"
        loop={true}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <img
              src={slide}
              className="block w-full h-[702px] object-cover rounded-lg"
              alt={`Slide ${index + 1}`}
            />
          </SwiperSlide>
        ))}

        {/* Custom Left button */}
        <motion.div
          className="bg-lightgray w-[44px] h-[44px] flex justify-center items-center rounded-full featureLeftIcon transition-all duration-300 absolute top-[50%] left-[70px] z-30"
          // onClick={onClickLeft}
          ref={prevRef}
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
            <Icon color={active.left} />
          </div>
          <div className="featureLeftLine transition-all duration-200 absolute"></div>
        </motion.div>
        {/* Custom Right button */}
        <div
          className="bg-lightgray w-[44px] h-[44px] flex justify-center items-center rounded-full transition-all duration-300 featureLeftIcon absolute top-[50%] right-[70px] z-30"
          ref={nextRef}
          // onClick={onClickRight}
          onMouseEnter={() => {
            setActive({
              left: "#0E0E0E",
              right: "#fff",
            });
          }}
          onMouseLeave={() => {
            setActive({
              left: "#0E0E0E",
              right: "#0E0E0E",
            });
          }}
        >
          <div className="rotate-180 transition-all duration-200 featureRightInner">
            <Icon color={active.right} />
          </div>
          <div className="featureLeftLine transition-all duration-200 absolute"></div>
        </div>
      </Swiper>
    </div>
  );
};

export default ImageSlider;
