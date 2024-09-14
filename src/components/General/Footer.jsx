import React, { useState } from 'react'
import GetInTouch from './GetInTouch'

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Footer = () => {
    const commonArrowImage = '../../images/arrow.png';
    const [hoveredLink, setHoveredLink] = useState([]);

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


    return (
        <footer className='w-full h-[1142px] bg-black px-[100px]'>
            <div className="pt-[140px] mb-44">
                <GetInTouch />
            </div>
            <hr className='bg-[#FFF] h-[1px] opacity-20 border-none' />

            <div className="lower mt-32 flex justify-between">
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
                {array && array.map((navLinks, indexP) => <div className="w-[133px] h-[284px] flex flex-col justify-start items-start">
                    <div className=" text-[14px] font-[500] text-white opacity-50 w-[200px]">
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
                                        alt=""
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
            <div className="mt-32 flex justify-between items-center">
                <div className="w-[311px] text-[14px] font-[500] text-[#545454]">
                    Copyright 2024 TheWheelDeel
                </div>
                <div className="socialSection w-[184px] h-[24px] flex justify-between items-center ">
                    <img src={require("../../images/facebook.png")} alt="" className='w-[20px] h-[20px]' />
                    <img src={require("../../images/youtube.png")} alt="" className='w-[20px] h-[20px]' />
                    <img src={require("../../images/twiter.png")} alt="" className='w-[20px] h-[20px]' />
                    <img src={require("../../images/insta.png")} alt="" className='w-[20px] h-[20px]' />
                    <img src={require("../../images/whatsapp.png")} alt=" " className='w-[20px] h-[20px]' />

                </div>
            </div>
        </footer>
    )
}

export default Footer
