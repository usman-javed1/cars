import React, { useState } from 'react'
import GetInTouch from './GetInTouch'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Footer = () => {
    const commonArrowImage = '../../images/arrow.png';
    const [hoveredLink, setHoveredLink] = useState([]);
    const [hoveredIcon, setHoveredIcon] = useState(null); // New state for hovered icon

    const arr = ['General', 'Popular Categories', 'Features vehicles']

    const navLinks = [
        { text: 'Financing', image: commonArrowImage },
        { text: 'Special Deals', image: commonArrowImage },
        { text: 'About us', image: '../../images/navicon.png', hasDropdown: true },
        { text: 'Blog', image: commonArrowImage },
        { text: 'FAQ', image: commonArrowImage },
        { text: 'How it works?', image: commonArrowImage },
    ];

    const navLinks1 = [
        { text: 'Sport', image: commonArrowImage },
        { text: 'SUV', image: commonArrowImage },
        { text: 'Sedan', image: '../../images/navicon.png', hasDropdown: true },
        { text: 'Crossover', image: commonArrowImage },
        { text: 'Electric', image: commonArrowImage },
        { text: 'Hybrid', image: commonArrowImage },
    ];

    const navLinks2 = [
        { text: 'Toyota RAV4', image: commonArrowImage },
        { text: 'BMW X5', image: commonArrowImage },
        { text: 'Tesla Model S', image: '../../images/navicon.png', hasDropdown: true },
        { text: 'Cybertruck', image: commonArrowImage },
        { text: 'Mazda 3', image: commonArrowImage },
        { text: 'Ford Fusion 3', image: commonArrowImage },
    ];
    const array = [navLinks, navLinks1, navLinks2]

    // Define social icons with their hover images
    const socialIcons = [
        { src: require('../../images/facebook.png'), hoverSrc: require('../../images/colorfb.png') },
        { src: require('../../images/youtube.png'), hoverSrc: require('../../images/coloryoutube.png') },
        { src: require('../../images/twiter.png'), hoverSrc: require('../../images/colortele.png') },
        { src: require('../../images/insta.png'), hoverSrc: require('../../images/colorinsta.png') },
        { src: require('../../images/whatsapp.png'), hoverSrc: require('../../images/colorwhatsapp.png') },
    ];

    return (
        <footer className='w-full min-h-[1142px] bg-black max-w-[100vw] overflow-hidden lg:px-[100px] px-[25px]'>
            <div className="pt-[140px] mb-44">
                <GetInTouch />
            </div>
            <hr className='bg-[#FFF] h-[1px] opacity-20 border-none' />

            <div className="lower mt-32 flex justify-between flex-wrap-reverse">
                <div className="left">
                    <img src={require("../../images/logo.png")} alt="logo" width={142} height={42} />


                    <div className="detail flex flex-col justify-start items-start">
                        <div className='font-[500] text-[18px] text-[#B9B9B9] mt-10'>
                            thewheeldeel@gmail.com
                        </div>
                        <div className='font-[500] text-[18px] text-[#B9B9B9] mt-7'>
                            +1 456 34 678
                        </div>
                        <div className='font-[500] text-[18px] text-[#B9B9B9] mt-7 text-start w-[247px]'>
                            54 W Church St, Suite 250 Orlando, FL 32801
                        </div>
                    </div>
                </div>
                <div className=' justify-between w-[60%] grid lg:grid-cols-[183px_183px_183px] md:grid-cols-[183px_183px_183px] grid-cols-[183px_183px] lg:mt-0 md:mt-0 -mt-14'>
                    {array && array.map((navLinks, indexP) => <div className="w-[183px] lg:h-[284px] flex flex-col justify-start items-start lg:mb-0 md:mb-0 mb-14 ">
                        <div className=" text-[14px] font-[500] text-white opacity-50 lg:w-[200px] ">
                            {arr[indexP]}
                        </div>

                        {navLinks.map((link, index) => (
                            <li
                                key={index}
                                onMouseEnter={() => {
                                    setHoveredLink([index, indexP]);
                                }}
                                onMouseLeave={() => {
                                    setHoveredLink([]);
                                }}
                            >
                                <Link to={'/'} className='flex justify-start items-center w-[153px] text-start'>
                                    <motion.span
                                        animate={{ color: hoveredLink[0] === index && hoveredLink[1] === indexP ? '#E3A200' : 'white' }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {link.text}
                                    </motion.span>
                                    {(
                                        <motion.img
                                            src={require("../../images/arrow.png")}
                                            alt="arrow"
                                            className='w-[20px] h-[20px] ml-[3px]'
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: hoveredLink[0] === index && hoveredLink[1] === indexP ? 1 : 0 }}
                                            transition={{ duration: 0.3 }}
                                        />
                                    )}
                                </Link>
                            </li>
                        ))}
                    </div>)}
                </div>
            </div>
            <div className="mt-32 flex justify-between items-center flex-wrap-reverse">
                <div className="w-[311px] text-[14px] font-[500] text-[#545454] lg:my-0 md:my-0 my-5 ">
                    Copyright 2024 TheWheelDeel
                </div>
                <div className="socialSection w-[184px] h-[24px] flex justify-between items-center ">
                    {socialIcons.map((icon, index) => (
                        <motion.div
                            className="relative"
                            key={index}
                            onMouseEnter={() => setHoveredIcon(index)}
                            onMouseLeave={() => setHoveredIcon(null)}
                        >
                            {index === 2 && hoveredIcon === index ? ( // Special effect for index 2
                                <>
                                    <motion.img
                                        src={icon.src}
                                        alt={`icon-${index}`}
                                        className='w-[20px] h-[20px]'
                                        initial={{ opacity: 1 }}
                                        animate={{ opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                    <motion.img
                                        src={icon.hoverSrc}
                                        alt={`icon-hover-${index}`}
                                        className='w-[20px] h-[20px] absolute left-0 bottom-0'
                                        initial={{ x: -10, y: 10, opacity: 0 }} // Animate from left and bottom
                                        animate={{ x: 0, y: 0, opacity: 1 }}
                                        transition={{ duration: 0.5 }}
                                    />
                                </>
                            ) : (
                                <motion.img
                                    src={hoveredIcon === index ? icon.hoverSrc : icon.src}
                                    alt={`icon-${index}`}
                                    className='w-[20px] h-[20px]'
                                    initial={{ opacity: 0.6 }} // Start with low opacity
                                    animate={{ opacity: hoveredIcon === index ? 1 : 0.6 }} // Full opacity on hover
                                    transition={{ duration: 0.3 }} // Smooth transition
                                />
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </footer>
    )
}

export default Footer;
