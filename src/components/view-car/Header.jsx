import React from 'react'
import LeftSideHeader from './LeftSideHeader'
import FiltersSection from './FiltersSection'

const Header = () => {
    return (
        <div className='mb-20'>
            <div className="lg:text-[56px] text-[35px] font-[700] ">
            Search results
            </div>
            <LeftSideHeader />
            
        </div>
    )
}

export default Header
