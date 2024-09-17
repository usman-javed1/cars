import React, { useState, useRef } from "react";
import { BlogPost as Card } from "../Blog/BlogMainPart/BlogMainPart";
import Icon from "../main/Features/icon/icon";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Articles = ({ heading = "Related articles" }) => {
    const [active, setActive] = useState({
        left: "#0E0E0E",
        right: "#0E0E0E",
    });

    const swiperRef = useRef(null);

    const cards = [
        {
            imageSrc: require('../../images/image.png'),
            category: 'New Models and Offers',
            title: 'Special Lease Offers for Fall 2024!',
            description: 'We are excited to announce the addition of the latest models from top brands to our leasing options! Discover the new Mercedes-Benz, BMW, Audi, and Tesla models now available for lease.',
            date: 'September 5, 2024',
        },
        {
            imageSrc: require('../../images/Mask group.png'),
            category: 'Lease Now, Pay Later',
            title: 'New Models Available for Leasing!',
            description: 'We are excited to announce the addition of the latest models from top brands to our leasing options! Discover the new Mercedes-Benz, BMW, Audi, and Tesla models now available for lease.',
            date: 'September 5, 2024',
        },
        {
            imageSrc: require('../../images/Mask group (1).png'),
            category: 'New Models and Offers',
            title: 'Sustainable Driving: New Electric and Hybrid Models',
            description: 'We are excited to announce the addition of the latest models from top brands to our leasing options! Discover the new Mercedes-Benz, BMW, Audi, and Tesla models now available for lease.',
            date: 'September 5, 2024',
        },
        {
            imageSrc: require('../../images/Mask group (1).png'),
            category: 'New Models and Offers',
            title: 'New Models Available for Leasing!',
            description: 'We are excited to announce the addition of the latest models from top brands to our leasing options! Discover the new Mercedes-Benz, BMW, Audi, and Tesla models now available for lease.',
            date: 'September 5, 2024',
        },
        {
            imageSrc: require('../../images/Mask group (1).png'),
            category: 'New Models and Offers',
            title: 'New Models Available for Leasing!',
            description: 'We are excited to announce the addition of the latest models from top brands to our leasing options! Discover the new Mercedes-Benz, BMW, Audi, and Tesla models now available for lease.',
            date: 'September 5, 2024',
        },
        {
            imageSrc: require('../../images/image.png'),
            category: 'New Models and Offers',
            title: 'New Models Available for Leasing!',
            description: 'We are excited to announce the addition of the latest models from top brands to our leasing options! Discover the new Mercedes-Benz, BMW, Audi, and Tesla models now available for lease.',
            date: 'September 5, 2024',
        },
        
    ]; // Placeholder for card data

    const [marginLeft, setMarginLeft] = useState(0); // Set initial margin to 0

    // Update margin values based on screen size
    const handleDragEnd = (event, info) => {
        const dragOffset = info.offset.x; // Get the total distance dragged (in pixels)
        const cardWidth = window.innerWidth < 768 ? 325 : 420; // Set card width based on screen size

        if (dragOffset < -100 && marginLeft > -(cards.length - 1) * cardWidth) {
            setMarginLeft(marginLeft - cardWidth); // Move left by cardWidth
        } else if (dragOffset > 100 && marginLeft < 0) {
            setMarginLeft(marginLeft + cardWidth); // Move right by cardWidth
        }
    };

    const onClickRight = () => {
        // const cardWidth = window.innerWidth < 768 ? 325 : 420; // Set card width based on screen size
        // if (marginLeft > -(cards.length - 1) * cardWidth) {
        //   setMarginLeft(marginLeft - cardWidth);
        // }
        if (swiperRef.current) {
            swiperRef.current.slideNext();
        }
    };

    // On click for left arrow
    const onClickLeft = () => {
        // const cardWidth = window.innerWidth < 768 ? 325 : 420; // Set card width based on screen size
        // if (marginLeft < 0) {
        //   setMarginLeft(marginLeft + cardWidth);
        // }
        if (swiperRef.current) {
            swiperRef.current.slidePrev();
        }
    };

    return (
        <div className="lg:w-full md:w-full w-[350px]">
            <div className=" container">
                <div className="mt-[10%] overflow-hidden">
                    {/* Header Section */}
                    <div className="lg:w-full md:w-[95%] w-[350px] max-w-full mx-auto flex justify-between items-center mb-5">
                        <div
                            className="heading font-[700] lg:text-[45px] md:text-[45px] text-[35px]  text-black "
                            style={{ letterSpacing: "-1px" }}
                        >
                            {heading}
                        </div>
                        <div className=" gap-2 px-7 lg:flex md:flex hidden">
                            <motion.div
                                className="bg-lightgray w-[44px] h-[44px] flex justify-center items-center rounded-full featureLeftIcon transition-all duration-300"
                                onClick={onClickLeft}
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

                            <div
                                className="bg-lightgray w-[44px] h-[44px] flex justify-center items-center rounded-full transition-all duration-300 featureLeftIcon"
                                onClick={onClickRight}
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
                        </div>
                    </div>
                    {/* Cards Section */}
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
                                    slidesPerView: 3.5,
                                    spaceBetween: 20,
                                },
                            }}
                        >
                            {cards.map((card, index) => (
                                <SwiperSlide key={index}>
                                    <Card imageSrc={card.imageSrc} category={card.category} description={card.description} title={card.title} date={card.date} isHund={true} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Articles;
