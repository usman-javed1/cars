import React, { useState } from 'react'
import Card from '../../General/Card'

import Icon from './icon/icon'

import { motion } from 'framer-motion'

const Features = () => {
    const [active, setActive] = useState({
        left: "#0E0E0E",
        right: "#0E0E0E"
    })

    const cards = [{

    }, {}, {}, {}]

    const [marginLeft, setMargin] = useState(0);
    const [allowMotions, setAllowedMotion] = useState(cards.length)
    const onClickRight = () => {
        if (allowMotions > 1) {
            setMargin(marginLeft - 420);
            setAllowedMotion(allowMotions - 1);
        }
    }
    const onClickLeft = () => {
        if (allowMotions < cards.length) {
            setMargin(marginLeft + 420);
            setAllowedMotion(allowMotions + 1);
        }
    }
    return (
        <div className='ml-[5%] mt-[10%] w-[90%]'>
            <div className="w-[1340px] max-w-full mx-auto flex justify-between items-center">
                <div className="heading font-[700] text-[45px] w-[401px] text-black ">
                    Featured vehicles
                </div>
                <div className="flex gap-2">
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
                        onMouseEnter={() => { // Changed to onMouseEnter
                            setActive({
                                left: "#0E0E0E",
                                right: "#fff",
                            });
                        }}
                        onMouseLeave={() => { // Changed to onMouseLeave
                            setActive({
                                left: "#0E0E0E",
                                right: "#0E0E0E", // Ensure this matches your default state
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
            <div className="flex gap-5  w-[1340px] max-w-full overflow-hidden mx-auto px-[20px]">

                {cards && cards.map((card, index) => index === 0 ? (<div className={` transition-all duration-300`} style={{ marginLeft: marginLeft + "px" }}>
                    <Card />
                </div>) : <Card />)}

            </div>
            <div className="flex justify-center items-center">
                <button className='w-[340px] h-[44px] rounded-[10px] flex justify-center  items-center text-[14px] mt-[10px] hoverAni font-[500] relative'>
                View Details <div className='relative'> <div className='hoverLine2'></div></div> <img src={require("../../../images/cardicon.png")} className='w-[20px] h-[20px] imahe1' alt="" />
                </button>
            </div>
        </div>
    )
}

export default Features
