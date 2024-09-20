import React, { useState } from 'react';

const CarDetailsHero = () => {
    const images = [
        require("../../../images/315_isolated_realistic_metallic_white_high_performance_racing_super_car_from_left_side_view 1 (1).png"), 
        require("../../../images/315_isolated_realistic_metallic_white_high_performance_racing_super_car_from_left_side_view 1 (1).png"), 
        require("../../../images/315_isolated_realistic_metallic_white_high_performance_racing_super_car_from_left_side_view 1 (1).png"), 
        
        require("../../../images/315_isolated_realistic_metallic_white_high_performance_racing_super_car_from_left_side_view 1 (1).png")
    ];

    const [selectedImage, setSelectedImage] = useState(images[0]); // Set the initial image

    return (
        <div className="mb-20">
            <div className='lg:h-[473px] h-[699px] bg-[#383838] w-full lg:flex-row flex-col rounded-[38px] mb-10 flex lg:justify-between items-center relative'>
                <div className="imageSection lg:-ml-[90px] -ml-3 lg:mt-0 mt-10">
                    <img src={selectedImage} alt="Selected Car" className='lg:w-[738px] w-[370px] lg:h-[280px] h-[140px]' />
                </div>
                <div className="content px-[5%] lg:mt-0 mt-14">
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

                    <div className="lg:absolute bottom-5 right-5">
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
                        <button className='lg:w-[151px] w-[277px] h-[56px] flex justify-center items-center p-[22px, 18px, 18px, 18px] rounded-[10px] bg-white text-black text-[16px] font-[500] transition-all duration-300 hover:bg-[#F6B000] hover:text-white'>
                            Request a Call
                        </button>
                    </div>
                </div>
            </div>
            
            <div className="grid-cols-4 lg:grid hidden">
                {images.map((image, index) => (
                    <div
                        key={index}
                        onClick={() => setSelectedImage(image)} // Update the selected image when clicked
                        className="w-[295px] cursor-pointer h-[240px] bg-lightgray rounded-[30px] flex justify-center items-center"
                    >
                        <img src={image} alt={`Car ${index + 1}`} className='w-[243px] h-[93px]' />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CarDetailsHero;
