import React from 'react'
import Card from './Card'

const Categories = () => {
    const cat = [{
        heading: "Sports",
        image: require('../../../images/catsport.png')
    },
    {
        heading: "SUV",
        image: require('../../../images/321_isolated_realistic_matte_white_modern_high_performance_sport_suv_car_from_right_front_view 1.png')
    },
    {
        heading: "Crossover",
        image: require('../../../images/image 156.png')
    },
    {
        heading: "Sedan",
        image: require('../../../images/315_isolated_realistic_metallic_white_high_performance_racing_super_car_from_left_side_view 1.png')
        },
    
        {
            heading: "Hatchback",
            image: require('../../../images/image 165.png')
        },

        {
            heading: "Electric",
            image: require('../../../images/image 156-1.png')
        },
        {
            heading: "Hybrid",
            image: require('../../../images/image 158.png')
        },
        {
            heading: "Pickup",
            image: require('../../../images/image 166.png')
        },
    ]
    return (
        <div className='mx-auto mt-[10%] w-[90%]'>
            <div className="w-[1340px] max-w-full mx-auto flex justify-center overflow-hidden items-center mb-10">
                <div className="heading font-[700] text-[45px] w-[501px] text-black ">
                    Popular Categories
                </div>
            </div>
            <div className="catContainer">
                {cat && cat.map((obj) =>
                    <Card image={obj.image} heading={obj.heading} />)}

            </div>

            <div className="flex justify-center items-center">
                <button className='w-[340px] h-[44px] rounded-[10px] flex justify-center  items-center text-[14px] mt-[10px] hoverAni3 font-[500] relative'>
                View All <div className='relative'> <div className='hoverLine2'></div></div> <img src={require("../../../images/cardicon.png")} className='w-[20px] h-[20px] imahe1' alt="" />
                </button>
            </div>
        </div>
    )
}

export default Categories
