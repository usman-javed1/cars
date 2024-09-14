import React from 'react'
import Card from './Card'

const HowWorks = () => {

    const cards = [
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
    return (
        <div className='mx-auto mt-[10%] w-[90%] flex justify-between h-[349px] '>
            <div className="flex flex-col justify-start items-start">
                <div className="heading font-[700] text-[45px] w-[401px] text-black text-start">
                    How it Works?
                </div>
                <div className="w-[505px] font-[500] text-[16px] text-[#959595] flex justify-start">
                    If you have more questions, please contact us
                </div>
                <div className="">
                    <button className='min-w-[162px] min-h-[56px] bg-black flex justify-center items-center rounded-[10px] text-[16px] text-white font-[500] p-[22px, 18px, 18px, 18px] mt-10 p-5 button21'>
                        Browse vehicles
                        <span className='flex  transition-all duration-300 ml-4' >
                            <img src={require("../../../images/whitefullarrow.png")} className='w-[0px]  h-[0px]' alt="" />
                        </span>
                    </button>
                </div>
            </div>
            <div className="w-[600px] howGrid">
                {
                    cards && cards.map((obj) => 
                        <Card heading={obj.heading} desc={obj.desc} number={obj.number} />
                    )
                }
            </div>

        </div>
    )
}

export default HowWorks
