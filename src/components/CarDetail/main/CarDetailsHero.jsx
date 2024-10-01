import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const CarDetailsHero = () => {
    const swiperRef = useRef(null);

    const images = [
        require("../../../images/315_isolated_realistic_metallic_white_high_performance_racing_super_car_from_left_side_view 1 (1).png"),
        require("../../../images/315_isolated_realistic_metallic_white_high_performance_racing_super_car_from_left_side_view 1 (1).png"),
        require("../../../images/315_isolated_realistic_metallic_white_high_performance_racing_super_car_from_left_side_view 1 (1).png"),

        require("../../../images/315_isolated_realistic_metallic_white_high_performance_racing_super_car_from_left_side_view 1 (1).png")
    ];

    const [selectedImage, setSelectedImage] = useState(images[0]); // Set the initial image

    return (
        <div className="lg:mb-20 mb-32 flex flex-col items-center">
            <div className='lg:h-[493px] h-[739px] bg-[#383838] lg:w-full w-[95%] lg:flex-row flex-col rounded-[38px] mb-10 flex lg:justify-between items-center relative px-10'>
                <div className="imageSection  lg:mt-0 lg:w-[738px]  bg-white rounded-[30px] flex items-center lg:h-[370px] w-[119%] mt-10">
                    <img src={selectedImage} alt="Selected Car" className='lg:w-[738px] w-[119%] lg:h-[280px] h-[140px]' />
                </div>
                <div className="content px-[6.4%] lg:ml-0 ml-2 lg:mt-0 mt-14 lg:justify-start justify-center">
                    <div className="tag text-[#959595] text-[14px] font-[500]">
                        Sport cars
                    </div>
                    <div className="heading lg:text-[36px] text-[25px] lg:mt-[40px] mt-[20px] font-[700] text-white">
                        Mercedes-AMG GT Coupé
                    </div>
                    <div className="flex gap-5 text-white text-[12px] mt-3">
                        <div className="">
                            <span className='text-[#959595] text-[12px] font-[500]'>Lease term: </span>
                            39 months
                        </div>
                        <div className="">
                            <span className='text-[#959595] text-[12px] font-[500]'>Miles per year:  </span>
                            8000
                        </div>
                    </div>
                    <div className="text-white text-[36px] font-[700] mt-3">
                        1239$ <span className='text-[12px] font-[500]'>/ month</span>
                    </div>

                    <div className="lg:absolute bottom-10 right-10">
                        <div className="lg:w-[112px] w-[277px] h-[39px] flex justify-between items-center rounded-[10px] border border-[#959595] px-2 mt-2">
                            <div className="text-[#fff] font-[500] text-[12px]">
                                4 Seats
                            </div>
                            <img src={require("../../../images/chair.png")} className='w-[19px] h-[19px]' alt="" />
                        </div>
                        <div className="lg:w-[112px] w-[277px] h-[39px] flex justify-between items-center rounded-[10px] border border-[#959595] px-2 mt-2">
                            <div className="text-[#fff] font-[500] text-[12px]">
                                Automatic
                            </div>
                            <img src={require("../../../images/automatic.png")} className='w-[19px] h-[19px]' alt="" />
                        </div>
                        <div className="lg:w-[112px] w-[277px] h-[39px] flex justify-between items-center rounded-[10px] border border-[#959595] px-2 mt-2">
                            <div className="text-[#fff] font-[500] text-[12px]">
                                I-4 cyl
                            </div>
                            <img src={require("../../../images/engine-motor-icon 1 (1).png")} className='w-[19px] h-[19px]' alt="" />
                        </div>
                    </div>

                    <div className="button  lg:mt-5 mt-10">
                        <button className='lg:w-[251px] w-[277px] h-[56px] flex justify-center items-center p-[22px, 18px, 18px, 18px] rounded-[10px] bg-white text-black text-[16px] font-[500] transition-all duration-300 hover:bg-[#F6B000] hover:text-white'>
                            Request a quote
                        </button>
                    </div>
                </div>
            </div>

            <div className=" lg:flex justify-between hidden container"
                style={{ justifyContent: "space-between" }}
            >

                <div className="flex lg:gap-5 gap-[6px] lg:w-full md:w-full w-auto max-w-full overflow-hidden mx-auto ">

                    {/* Apply drag to all cards */}
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={3}
                        speed={1000}
                        grabCursor={true}
                        onSwiper={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                        loop={true}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 28,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                            1441: {
                                slidesPerView: 5,
                                spaceBetween: 20,
                            },
                        }}
                    >
                        {images.map((image, index) => (
                            <SwiperSlide key={index}>
                                <div
                                    key={index}
                                    onClick={() => setSelectedImage(image)} // Update the selected image when clicked
                                    className="w-[24%] cursor-pointer h-[240px] bg-lightgray rounded-[30px] flex justify-center items-center"
                                >
                                    <img src={image} alt={`Car ${index + 1}`} className='w-[243px] h-[93px]' />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div >
    );
}

export default CarDetailsHero;
