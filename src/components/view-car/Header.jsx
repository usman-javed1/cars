import React from 'react'
import LeftSideHeader from './LeftSideHeader'
import FiltersSection from './FiltersSection'

const Header = (props) => {
    return (
        <div className='mb-10'>
            <div className="lg:text-[56px] text-[35px] font-[700] ">
            Search results
            </div>
            <LeftSideHeader total={props.total} searchResults={props.carData} setIsFilter={props.setIsFilter} isFilter={props.isFilter} setPriceRange={props.setPriceRange} priceRange={props.priceRange} />
            
        </div>
    )
}

export default Header
