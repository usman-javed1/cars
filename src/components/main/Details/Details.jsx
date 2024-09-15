import React from 'react'
import Card from './Card'
import { div } from 'framer-motion/client'

const Details = () => {

    const cards = [{
        image: require("../../../images/detailcard1.png"),
        desc: "At The Wheel Deal Auto Leasing, we are passionate about making your vehicle leasing experience exceptional. With a commitment to customer satisfaction and a dedication to quality, we offer a seamless and straightforward process to get you behind the wheel of your dream car.",
        heading: "Why the WheelDeal?",
        reverse: true
    },
    {
        image: require("../../../images/detailcard2.png"),
        desc: "Founded on the principles of transparency, integrity, and excellence, The Wheel Deal is a team of automotive enthusiasts and leasing experts. Our mission is to provide a stress-free leasing experience with personalized service tailored to your needs.",
        heading: "Who We Are",
        reverse: false
    },
    {
        image: require("../../../images/detailcard3.png"),
        desc: "Meet the dedicated professionals who make it all happen. From our knowledgeable sales team to our expert leasing advisors, we work together to ensure your experience is smooth and enjoyable.",
        heading: "Our Team",
        reverse: true
    },
    ]
    return (
        <div className='lg:mx-auto md:mx-auto mt-[10%] md:w-[90%] lg:w-[90%] mx-[25px]'>
            {cards && cards.map((obj) => 
            <div key={obj.heading} className='mt-28'><Card heading={obj.heading} reverse={obj.reverse} desc={obj.desc} image={obj.image} /></div> 
            )}
        </div>
    )
}

export default Details
