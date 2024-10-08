import React, { useState } from 'react'
import { motion } from "framer-motion";
import { FAQ, CustomDropdown, selections } from '../main/HeroSection/HeroSection'

const FiltersSection = ({ handleClickFilterBtn, searchResults, selectedValues, setSelectedValues, Icon, startDate, endDate, setStartDate, setEndDate, toggleOverlay, clearAllFilters, priceRange, setPriceRange }) => {
    // const [isOverlayVisible, setIsOverlayVisible] = useState(false); // State for overlay visibility

    // const toggleOverlay = () => {
    //     setIsOverlayVisible(!isOverlayVisible); // Toggle overlay visibility
    // };


    const handleSelect = (name, value, isSelected) => {
        setSelectedValues(prev => {
            const currentSelections = prev[name] || [];
            if (isSelected) {
                return { ...prev, [name]: [...currentSelections, value] };
            } else {
                return { ...prev, [name]: currentSelections.filter(v => v !== value) };
            }
        });
    };

    

    const handlePriceChange = (newRange) => {
        setPriceRange(newRange);
    };
    return (
        <div className='w-[100vw] h-[100vh] flex justify-center items-center fixed top-0 right-0 bg-black' style={{ zIndex: 9999999, backgroundColor: "rgba(0,0,0,0.7)" }}>
            <motion.div
                className='bg-white lg:relative fixed lg:rounded-[10px] rounded-t-[30px] top-0 w-[100vw] pb-10 lg:w-[650px] lg:h-[700px] h-[100vh] left-0 px-[25px]'
                id='filterSection'
                style={{ zIndex: 9999, overflowX: "hidden", overflowY: 'auto' }}
                initial={{ y: '100%' }} // Start from bottom
                animate={{ y: 0 }} // Animate to original position
                exit={{ y: '100%' }} // Exit to bottom
                transition={{ duration: 0.3 }} // Animation duration
            >
                <div className="flex justify-between mt-[37.5px] items-center lg:mb-20 w-[600px]">
                    <div className="text-[30px] font-[700] text-black ">
                        {Icon}
                    </div>
                    <img
                        src={require("../../images/crossSearch.png")}
                        alt=""
                        className='w-[32px] h-[28.84px] cursor-pointer'
                        onClick={toggleOverlay} // Close overlay on click
                    />
                </div>
                <div className="pl-0">
                    <FAQ
                        selections={selections}
                        priceRange={priceRange}
                        handlePriceChange={handlePriceChange}
                        selectedValues={selectedValues}
                        onSelect={handleSelect}
                        startDate={startDate}
                        setEndDate={setEndDate}
                        endDate={endDate}
                        setStartDate={setStartDate}
                    />
                </div>
                <div className="h-[2px] my-16 w-[650px] -ml-6 bg-[#E9E9E9]">

                </div>
                <div className="button flex h-[60px] lg:gap-10 gap-3">
                    <button onClick={handleClickFilterBtn} className='w-full h-[56px] flex justify-center items-center font-[500] bg-black text-white rounded-[10px] lg:text-base text-[14px] mx-auto lg:w-[350px]'>
                        Show results 
                        {/* ({searchResults?.length}) */}
                    </button>
                    <button className='w-full h-[56px] flex justify-center  items-center font-[500]  rounded-[10px] mx-auto lg:w-[350px]'>
                        <div className="flex items-center justify-center gap-3" onClick={clearAllFilters}>
                            <img src={require("../../images/Frame (1).png")} alt="" />
                            <div className="text-[14px] text-black">Clear filters</div>
                        </div>
                    </button>
                    
                </div>
            
            </motion.div>
        </div>
    )
}

export default FiltersSection
