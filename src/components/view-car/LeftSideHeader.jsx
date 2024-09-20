import React, { useState, useEffect } from 'react';
import FiltersSection from './FiltersSection';

import { motion } from "framer-motion"



const LeftSideHeader = ({ searchResults, onClear }) => {
    const [isOverlayVisible, setIsOverlayVisible] = useState(false); // State for overlay visibility
    const [isOverlayVisibleSort, setIsOverlayVisibleSort] = useState(false); // State for overlay visibility
    const toggleOverlay = () => {
        setIsOverlayVisible(!isOverlayVisible); // Toggle overlay visibility
    };
    const toggleOverlaySort = () => {
        setIsOverlayVisibleSort(!isOverlayVisibleSort); // Toggle overlay visibility
    };

    const dropdownOption = [
        "Featured", "Most Popular", "Oldest to Newest", "Newest to Oldest",
        "Mileage: Low to High", "Mileage: High to Low", "Price: Low to High",
        "Price: High to Low"
    ];


    const [activeSort, setActiveSort] = useState("Featured");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedValues, setSelectedValues] = useState({
        Make: [],
        Categories: [],
        Model: [],
        Year: [],
        Price: []
    });
    const [activeFilters, setActiveFilters] = useState([]);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    // Function to clear all filters
    const clearAllFilters = () => {
        setSelectedValues({
            Make: [],
            Categories: [],
            Model: [],
            Year: [],
            Price: []
        });
        setActiveFilters([]);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isDropdownOpen && !event.target.closest('.sortDropdown')) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isDropdownOpen]);

    useEffect(() => {
        setActiveFilters(Object.values(selectedValues).flat());
    }, [selectedValues]);

    // Function to remove a filter from selectedValues and activeFilters
    const handleRemoveFilter = (filter) => {
        const updatedSelectedValues = { ...selectedValues };

        // Loop through each key in selectedValues and remove the filter
        for (const key in updatedSelectedValues) {
            updatedSelectedValues[key] = updatedSelectedValues[key].filter(value => value !== filter);
        }

        // Update state with new values
        setSelectedValues(updatedSelectedValues);
        setActiveFilters(Object.values(updatedSelectedValues).flat());
    };

    return (
        <div className='flex justify-between items-center gap-5 flex-wrap'>
            {isOverlayVisible && (
                <FiltersSection
                    selectedValues={selectedValues}
                    setSelectedValues={setSelectedValues}
                    Icon={<FilterIcon />}
                    startDate={startDate}
                    setStartDate={setStartDate}
                    endDate={endDate}
                    setEndDate={setEndDate}
                    toggleOverlay={toggleOverlay}
                    clearAllFilters={clearAllFilters}
                />
            )}
            <div className="flex items-center gap-5 flex-wrap">
                <div className="text-[12px] font-[500] text-[#767676]">
                    {searchResults || 268} vehicles matching
                </div>
                <div className="flex flex-wrap gap-2">
                    {activeFilters.map((name, index) => (
                        <div key={index} className="flex flex-wrap gap-3 p-[18px] bg-[#F8F8F8] rounded-[45px] items-center">
                            <span className='text-[14px] text-[#4E4E4E]'>{name}</span>
                            <img
                                src={require("../../images/Frame.png")}
                                className='w-[14px] h-[14px] cursor-pointer'
                                alt=""
                                onClick={() => handleRemoveFilter(name)} // Call handleRemoveFilter on click
                            />
                        </div>
                    ))}
                </div>
                <div className="flex items-center justify-center gap-3 cursor-pointer" onClick={clearAllFilters}>
                    <img src={require("../../images/Frame (1).png")} alt="" />
                    <div className="text-[14px] text-black">Clear filters</div>
                </div>
            </div>
            <div className=" gap-3 relative flex">
                <div className=" gap-4 justify-center items-center  ">
                    <div className="text-[12px] text-[#767676] font-[500] rounded-[10px] lg:flex hidden">
                        Sort:
                    </div>
                    <div className="p-4 gap-3 text-[14px] font-[500] border border-[#E9E9E9] lg:flex hidden" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                        <img src={require("../../images/filter icon.png")} className='w-[20px] h-[20px]' alt="" />
                        <div className="text-[14px] font-[500]">
                            {activeSort}
                        </div>
                        <img src={require("../../images/Frame (2).png")} className='w-[20px] h-[20px]' alt="" />
                    </div>


                    <div className="p-4 lg:px-4 px-8 flex gap-3 lg:hidden  text-[14px] font-[500] border border-[#E9E9E9] rounded-[10px]" onClick={() => setIsOverlayVisibleSort(!isOverlayVisibleSort)}>
                        <img src={require("../../images/filter icon.png")} className='w-[20px] h-[20px]' alt="" />
                        <div className="text-black">
                            Sort by
                        </div>

                    </div>





                    <div className={`sortDropdown w-[252px] flex flex-col justify-center items-center absolute bg-white top-16 left-[45px] rounded-[20px] transition-all duration-300 ${isDropdownOpen ? 'block' : 'hidden'}`} style={{ zIndex: 9999 }}>
                        {dropdownOption.map((value, index) => (
                            <div key={index} className="text-[#636363] text-[14px] font-[500] py-4 px-3 w-[220px] items-center flex cursor-pointer" onClick={() => {
                                setActiveSort(value);
                                setIsDropdownOpen(false); // Close dropdown on selection
                            }}>
                                {value}
                            </div>
                        ))}
                    </div>
                </div>
                <button className='bg-black text-white font-[500] lg:px-4 px-8 text-[14px] flex gap-3 p-4 rounded-[10px]' onClick={toggleOverlay}>
                    <img src={require("../../images/filter icon (1).png")} className='w-[20px] h-[20px]' alt="" />
                    <span>
                        Filters
                    </span>
                </button>
            </div>
            {isOverlayVisibleSort && <SortOverLay dropdownOption={dropdownOption} activeSort={activeSort} setActiveSort={setActiveSort} toggleOverlay={toggleOverlaySort} clearAllFilters={clearAllFilters} />}
        </div>
    );
}

const FilterIcon = () => {
    return (
        <div className="flex gap-5 items-center">
            <img src={require("../../images/filter icon (2).png")} className='w-[24px] h-[24px]' alt="" />
            <span>Filters</span>
        </div>
    );
}


const SortOverLay = ({ dropdownOption, setActiveSort, activeSort, toggleOverlay, clearAllFilters }) => {

    return (
        <div className="">
            <motion.div
                className='bg-white lg:relative fixed lg:rounded-[10px] rounded-t-[30px] top-0 w-[100vw] pb-10 lg:w-[650px] lg:h-[700px] h-[100vh] left-0 px-[25px]'
                style={{ zIndex: 999999, overflowX: "hidden", height: "100vh", width: "100vw" ,top: "10px", overflowY: 'auto', }}
                initial={{ y: '100%' }} // Start from bottom
                animate={{ y: 0 }} // Animate to original position
                exit={{ y: '100%' }} // Exit to bottom
                transition={{ duration: 0.3 }} // Animation duration
            >
                <div className="flex justify-between mt-[37.5px] items-center lg:mb-20">
                    <div className="text-[30px] font-[700] text-black ">
                        <div className="flex gap-5 items-center">
                            <img src={require("../../images/filter icon.png")} className='w-[24px] h-[24px]' alt="" />
                            <span>Sort by</span>
                        </div>
                    </div>
                    <img
                        src={require("../../images/crossSearch.png")}
                        alt=""
                        className='w-[32px] h-[28.84px]'
                        onClick={toggleOverlay} // Close overlay on click
                    />
                </div>
                <div className="text-[16px] font-[700] flex gap-2 items-center my-7">
                    <div className="w-[6px] h-[6px] bg-black rounded-full"></div>
                    {activeSort}
                </div>
                {dropdownOption.map((value) => <div className="" onClick={() => setActiveSort(value)}>
                    <div className="bg-[#E9E9E9] h-[1px] w-[100%] my-5"></div>

                    <div className="w-[325px] h-[44px] text-[#636363] text-[16px] font-[500] py-4 px-3  items-center flex cursor-pointer ">
                        {value}
                    </div>

                </div>)}

                <div className="button flex lg:gap-10 gap-3">
                    <button className='w-full h-[56px] flex justify-center items-center font-[500] bg-black text-white rounded-[10px] lg:text-base text-[14px] mt-20 mx-auto lg:w-[300px]'>
                        Show results (232)
                    </button>
                    <button className='w-full h-[56px] flex  items-center font-[500]  rounded-[10px] mt-20 mx-auto'>
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



export default LeftSideHeader;
