import React from 'react'
import Card from './Card'
import { Link } from 'react-router-dom'

const defaultCards = [
    {
        heading: "Discover Your Vehicle",
        desc: "Start by browsing our extensive inventory of top-quality vehicles.",
        number: "1"
    },

    {
        heading: "Explore Detailed Info",
        desc: "Click on your chosen vehicle to access its detailed page.",
        number: "2"
    },

    {
        heading: "Get in Touch",
        desc: "Reach out through our easy-to-use contact form",
        number: "3"
    },

    {
        heading: "Enjoy Your New Vehicle",
        desc: "your journey to the perfect vehicle starts here!",
        number: "4"
    },
]

const HowWorks = ({ heading = "How it Works?", desc = "If you have more questions, please contact us", cards = defaultCards }) => {
    return (
        <div className="lg:w-full md:w-full w-[350px]">
            <div className="container ">
                <div className=' mt-[10%] flex justify-between min-h-[349px] flex-wrap'>
                    <div className="flex flex-col justify-start items-start flex-wrap">
                        <div className="heading font-[700] lg:text-[45px] md:text-[45px] text-[35px] lg:w-[501px] md:w-[401px] w-[325px] text-black text-start">
                            {heading}
                        </div>
                        <div className="lg:w-[505px] md:w-[505px] w-[325px] font-[500] text-[16px] text-[#959595] flex justify-start mt-[20px]">
                            {desc}
                        </div>
                        <Link to={'/view'}>
                            <div className="lg:block md:block hidden">
                                <button className='min-w-[162px] min-h-[56px] bg-black flex justify-center items-center rounded-[10px] text-[16px] text-white font-[500]  mt-10 p-5 button21'>
                                    Browse vehicles
                                    <span className='flex  transition-all duration-300'>
                                        <img src={require("../../../images/whitefullarrow.png")} className='w-[0px]  h-[0px]' alt="" />
                                    </span>
                                </button>
                            </div>
                        </Link>
                    </div>
                    <div className="w-[610px] lg:pl-[2%] grid justify-end lg:grid-cols-2 md:grid-cols-2 grid-cols-1">
                        {cards && cards.map((obj) =>
                            <Card heading={obj.heading} desc={obj.desc} number={obj.number} key={obj.number} />
                        )}
                    </div>
                    <Link to={'/view'}>
                        <div className="lg:hidden md:hidden block mb-[100px]">
                            <button className='min-w-[325px] min-h-[56px] bg-black flex justify-center items-center rounded-[10px] text-[16px] text-white font-[500] mt-10 p-5 button21'>
                                Browse vehicles
                                <span className='flex  transition-all duration-300'>
                                    <img src={require("../../../images/whitefullarrow.png")} className='w-[0px]  h-[0px]' alt="" />
                                </span>
                            </button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HowWorks
