import React, { useState, useRef, useEffect } from 'react';
import styles from './HeroSection.module.css';

import Jeep from '../../../images/merwhite.png'

import './RangeSlider.css'
import { img } from 'framer-motion/client';


const RangeSlider = ({ min, max, value, step, onChange }) => {
    const [minValue, setMinValue] = React.useState(value ? value.min : min);
    const [maxValue, setMaxValue] = React.useState(value ? value.max : max);

    React.useEffect(() => {
        if (value) {
            setMinValue(value.min);
            setMaxValue(value.max);
        }
    }, [value]);

    const handleMinChange = e => {
        e.preventDefault();
        const newMinVal = Math.min(+e.target.value, maxValue - step);
        if (!value) setMinValue(newMinVal);
        onChange({ min: newMinVal, max: maxValue });
    };

    const handleMaxChange = e => {
        e.preventDefault();
        const newMaxVal = Math.max(+e.target.value, minValue + step);
        if (!value) setMaxValue(newMaxVal);
        onChange({ min: minValue, max: newMaxVal });
    };

    const minPos = ((minValue - min) / (max - min)) * 100;
    const maxPos = ((maxValue - min) / (max - min)) * 100;

    return (
        <div className="root">
            <div class="wrapper">
                <div class="input-wrapper">
                    <input
                        class="input"
                        type="range"
                        value={minValue}
                        min={min}
                        max={max}
                        step={step}
                        onChange={handleMinChange}
                    />
                    <input
                        class="input"
                        type="range"
                        value={maxValue}
                        min={min}
                        max={max}
                        step={step}
                        onChange={handleMaxChange}
                    />
                </div>

                <div class="control-wrapper">
                    <div class="control" style={{ left: `${minPos}%` }} />
                    <div class="rail">
                        <div
                            class="inner-rail"
                            style={{ left: `${minPos}%`, right: `${100 - maxPos}%` }}
                        />
                    </div>
                    <div class="control" style={{ left: `${maxPos}%` }} />
                </div>
            </div>
        </div>
    );
};



const CustomDropdown = ({ options, defaultText, selectedValues, onSelect, width, handlePriceChange, name, priceRange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const toggleOption = (value, label) => {
        if (selectedValues.includes(value)) {
            onSelect(value, false); // Deselect
        } else {
            onSelect(value, true); // Select
        }
    };

    return (
        <div className="relative w-[166px]" ref={dropdownRef} >
            <div
                className={styles.customSelect}
                onClick={() => setIsOpen(!isOpen)}
            >
                {defaultText}
                <img src={require("../../../images/heroicon.png")} className='w-[20px] h-[20px]' alt="" />
            </div>
            {isOpen && (
                <ul className={`flex  absolute justify-start items-center bg-white text-black flex-wrap top-[70px] rounded-2xl p-3 font-[500]`} style={{ width: width }}>
                    {name !== "Price" ? name !=="Make"? options.map((option) => (
                        <li
                            key={option.value}
                            className={`${styles.option} ${selectedValues.includes(option.value) ? styles.selected : ''} rounded-full `}
                            onClick={() => toggleOption(option.value, option.label)}
                        >
                            {option.label}
                        </li>
                    )) : options.map((option) => (
                        <Jeep className={styles.selected} />
                    )) : <div>
                        {/* <div>
                            <RangeSlider min={0} max={100} step={5} value={priceRange} onChange={handlePriceChange} />
                            <p>The min value is: <span>{priceRange.min}</span></p>
                            <p>The max value is: <span>{priceRange.max}</span></p>
                        </div> */}
                    </div>}
                </ul>
            )}
        </div>
    );
};

const HeroSection = () => {
    const [openDropdown, setOpenDropdown] = useState(null);
    const [selectedValues, setSelectedValues] = useState({});

    const [priceRange, setPriceRange] = useState({ min: 0, max: 100 });

    const handlePriceChange = (newRange) => {
        setPriceRange(newRange);
    };

    const selections = [
        {
            name: "Categories",
            options: [
                { value: 'sedan', label: 'Sedan' },
                { value: 'suv', label: 'SUV' },
                { value: 'sports', label: 'Sports' },
                { value: 'luxury', label: 'Luxury' },
                { value: 'electric', label: 'Electric' },
                { value: 'hybrid', label: 'Hybrid' },
            ],
            default: "All categories",
            width: '500px'
        },
        {
            name: "Make",
            options: [
                { value: 'toyota', label: require('../../../images/jeep.svg') },
                { value: 'honda', label: 'Honda' },
                { value: 'ford', label: 'Ford' },
            ],
            default: "All makes",
            width: '200px'
        },
        {
            name: "Model",
            options: [
                { value: 'camry', label: 'Camry' },
                { value: 'civic', label: 'Civic' },
                { value: 'f150', label: 'F-150' },
            ],
            default: "All models",
            width: '200px'
        },
        {
            name: "Year",
            options: [
                { value: '2023', label: '2023' },
                { value: '2022', label: '2022' },
                { value: '2021', label: '2021' },
            ],
            default: "Any year",
            width: '200px'
        },
        {
            name: "Price",
            options: [
                { value: '0-20000', label: '$0 - $20,000' },
                { value: '20000-40000', label: '$20,000 - $40,000' },
                { value: '40000+', label: '$40,000+' },
            ],
            default: "Any price",
            width: '200px'
        }
    ];

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

    return (
        <div className='w-full h-[720px] bg-black p-[60px] flex justify-center'>
            <div className="w-[100%] h-[632px] relative">
                <img src={require("../../../images/hero.png")} className='w-full h-[632px]' alt="" />
                <div className="samllText absolute  w-[560px] right-[5%] top-[50px] text-[8.76px] text-white text-right font-[300]">
                    Explore our exclusive collection of exotic cars, each meticulously chosen to represent the epitome of automotive <br /> engineering and design. From sleek sports cars to powerful luxury SUVs, our selection caters to every discerning taste.
                </div>
                <div className="heading w-[1030px] absolute top-[22%] left-[50%] transform -translate-x-1/2  text-white flex flex-col items-center">
                    <div className='font-[700] text-[60px] text-centertracking-[0.02em] leading-[1.1] w-[950px]'>
                        Drive Your Dreams with The Wheel Deal Auto Leasing
                    </div>
                    <br />
                    <div className="text-[16px]font-[500] text-center">
                        Discover the perfect vehicle for you with our seamless leasing experience.
                    </div>

                    <div className="w-[1030px] h-[78px] bg-white rounded-[15px] mt-10 flex justify-between items-center">
                        {selections.map((sel) => (
                            <div key={sel.name} className="w-[166px]">
                                <div className="ml-[16px] text-start font-[500] text-[12px] text-[#797979] mt-[4px]">
                                    {sel.name}
                                </div>
                                <div className="relative ml-[16px] -mt-[4px]">
                                    <CustomDropdown
                                        options={sel.options}
                                        defaultText={sel.default}
                                        selectedValues={selectedValues[sel.name] || []}
                                        onSelect={(value, isSelected) => handleSelect(sel.name, value, isSelected)}
                                        width={"500px"}
                                        handlePriceChange={setPriceRange}
                                        priceRange={priceRange}
                                        name={sel.name}
                                    />
                                </div>
                            </div>
                        ))}
                        <div className="">
                            <button className='w-[162px] h-[56px] flex justify-center items-center bg-[#000] text-[16px] font-[500] rounded-[10px] mx-[15px]
                            hover:bg-[#F6B000] transition-all duration-300'>
                                Browse vehicles
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default HeroSection


