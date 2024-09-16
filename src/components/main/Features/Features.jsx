import React, { useState } from 'react';
import Card from '../../General/Card';
import Icon from './icon/icon';
import { motion } from 'framer-motion';


const Features = () => {
    const [active, setActive] = useState({
        left: "#0E0E0E",
        right: "#0E0E0E",
    });

    const cards = [{
        name: "2024 Kia Forte LXS 4dr Sedan",
        heading: "Sport cars",
        image: require("../../../images/blackcar.png"),
        price: "839",
        lease: "39 months",
        mile: "8000",
        seat: "4",
        discount: "-40%"
    }, {
        name: "Mercedes-AMG GT Coupé",
        heading: "Sport cars",
        image: require("../../../images/cardwhite.png"),
        price: "1239",
        lease: "39 months",
        mile: "8000",
        seat: "4",
        discount: "-40%"
    }, {
        name: "BMW M8 Competition",
        heading: "Sport cars",
        image: require("../../../images/card3.png"),
        price: "1239",
        lease: "39 months",
        mile: "8000",
        seat: "4",
        discount: "-40%"
    }, {
        name: "2024 Kia Forte LXS 4dr Sedan",
        heading: "Sport cars",
        image: require("../../../images/blackcar.png"),
        price: "839",
        lease: "39 months",
        mile: "8000",
        seat: "4",
        discount: "-40%"
    },
    {
        name: "2024 Kia Forte LXS 4dr Sedan",
        heading: "Sport cars",
        image: require("../../../images/blackcar.png"),
        price: "839",
        lease: "39 months",
        mile: "8000",
        seat: "4",
        discount: "-40%"
    },
    {
        name: "2024 Kia Forte LXS 4dr Sedan",
        heading: "Sport cars",
        image: require("../../../images/blackcar.png"),
        price: "839",
        lease: "39 months",
        mile: "8000",
        seat: "4",
        discount: "-40%"
    },
    {
        name: "2024 Kia Forte LXS 4dr Sedan",
        heading: "Sport cars",
        image: require("../../../images/blackcar.png"),
        price: "839",
        lease: "39 months",
        mile: "8000",
        seat: "4",
        discount: "-40%"
    },
    {
        name: "2024 Kia Forte LXS 4dr Sedan",
        heading: "Sport cars",
        image: require("../../../images/blackcar.png"),
        price: "839",
        lease: "39 months",
        mile: "8000",
        seat: "4",
        discount: "-40%"
    }
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
        const cardWidth = window.innerWidth < 768 ? 325 : 420; // Set card width based on screen size
        if (marginLeft > -(cards.length - 1) * cardWidth) {
            setMarginLeft(marginLeft - cardWidth);
        }
    };

    // On click for left arrow
    const onClickLeft = () => {
        const cardWidth = window.innerWidth < 768 ? 325 : 420; // Set card width based on screen size
        if (marginLeft < 0) {
            setMarginLeft(marginLeft + cardWidth);
        }
    };

    return (
        <div className="lg:w-full md:w-full w-[350px] px-[10px]">
            <div className=" container">
                <div className='mt-[10%] overflow-hidden'>
                    {/* Header Section */}
                    <div className="lg:w-full md:w-[95%] w-[350px] max-w-full mx-auto flex justify-between items-center">
                        <div className="heading font-[700] lg:text-[45px] md:text-[45px] text-[35px] w-[401px] text-black " style={{ letterSpacing: "-1px" }}>
                            Featured vehicles
                        </div>
                        <div className=" gap-2 px-7 lg:flex md:flex hidden">
                            <motion.div className="bg-lightgray w-[44px] h-[44px] flex justify-center items-center rounded-full featureLeftIcon transition-all duration-300"
                                onClick={onClickLeft}
                                onHoverStart={() => {
                                    setActive({
                                        left: "#fff",
                                        right: "#0E0E0E",
                                    })
                                }}

                                onHoverEnd={() => {
                                    setActive({
                                        left: "#0E0E0E",
                                        right: "#0E0E0E",
                                    })
                                }}
                            >
                                <div className="featureLeftIconInner transition-all duration-200">
                                    <Icon color={active.left} />
                                </div>
                                <div className="featureLeftLine transition-all duration-200 absolute"></div>
                            </motion.div>

                            <div className="bg-lightgray w-[44px] h-[44px] flex justify-center items-center rounded-full transition-all duration-300 featureLeftIcon"
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
                    <div className="flex lg:gap-5 gap-[6px] lg:w-full md:w-full w-[350px] max-w-full overflow-hidden mx-auto   px-[1px]">
                        {/* Apply drag to all cards */}

                        {
                            cards.map((card, index) => (
                                <motion.div
                                    key={index}
                                    className="transition-all duration-300"
                                    drag="x"
                                    dragElastic={0.1} // Lower elasticity for a smoother drag
                                    dragConstraints={{ left: 0, right: 0 }}
                                    onDragEnd={handleDragEnd}
                                    style={index === 0 ? { marginLeft: `${marginLeft}px` } : {}}
                                    transition={{
                                        type: "spring", // Spring effect for smooth transition
                                        stiffness: 100, // Control stiffness of spring
                                        damping: 15, // Control damping for a smoother effect
                                    }}
                                >
                                    <Card obj={card} />
                                </motion.div>
                            ))
                        }
                    </div>

                    {/* View All Button */}
                    <div className="flex justify-center items-center">
                        <button className='lg:w-[340px] md:w-[340px] w-[325px] h-[44px] rounded-[10px] flex justify-center items-center text-[14px] mt-[10px] hoverAni6 font-[500] relative'>
                            View All Vehicles <div className='relative'><div className='hoverLine2'></div></div>
                            <img src={require("../../../images/cardicon.png")} className='w-[20px] h-[20px] imahe1' alt="" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;
