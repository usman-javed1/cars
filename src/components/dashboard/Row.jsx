import React from 'react';

const Row = ({ obj }) => {
    return (
        <div className='h-[60px] flex items-center justify-between px-5' style={{ borderBottom: "1px solid #E9E9E9" }}>
            <div className="flex max-w-[22%] w-[22%] gap-3 items-center text-[14px] font-[500] text-[#636363]">
                <img src={require("../../images/315_isolated_realistic_metallic_white_high_performance_racing_super_car_from_left_side_view 1.png")} alt="" className={`w-[38px] h-[38px] rounded`} />
                <div className="">
                    { "Ford Mustang"}
                </div>
            </div>

            <div className="flex max-w-[18%] w-[18%] gap-3 items-center text-[14px] font-[500] text-[#000]">
                <div className="">
                    310
                </div>
            </div>
            <div className="flex max-w-[18%] w-[18%] gap-3 items-center text-[14px] font-[500] text-[#000]">
                <div className="">
                    I-4 cyl
                </div>
            </div>
            <div className="flex max-w-[14%] w-[18%] gap-3 items-center text-[14px] font-[500] text-[#000]">
                <div className="">
                    $1 080
                </div>
            </div>
            <div className="flex max-w-[18%] w-[18%] gap-3 items-center text-[14px] font-[500] text-[#000]">
                <div className="">
                    Sport Cars
                </div>
            </div>

            {/* Icons with hover effect */}
            <div className="flex max-w-[18%] w-[5%] gap-5  items-center">
                {/* Edit Icon */}
                <div className="hover:text-black text-[#767676] transition duration-200 cursor-pointer">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.2496 6.19035L14.7851 9.72591L6.53553 17.9755H3V14.4399L11.2496 6.19035ZM12.4281 5.01184L14.1958 3.24408C14.5213 2.91864 15.0489 2.91864 15.3743 3.24408L17.7314 5.6011C18.0568 5.92653 18.0568 6.45417 17.7314 6.77961L15.9636 8.54737L12.4281 5.01184Z" fill="currentColor" />
                    </svg>
                </div>

                {/* Delete Icon */}
                <div className="hover:text-red-500 transition duration-200 text-[#767676] cursor-pointer">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.167 4.99935H18.3337V6.66602H16.667V17.4993C16.667 17.9596 16.2939 18.3327 15.8337 18.3327H4.16699C3.70676 18.3327 3.33366 17.9596 3.33366 17.4993V6.66602H1.66699V4.99935H5.83366V2.49935C5.83366 2.03912 6.20676 1.66602 6.66699 1.66602H13.3337C13.7939 1.66602 14.167 2.03912 14.167 2.49935V4.99935ZM7.50033 9.16602V14.166H9.16699V9.16602H7.50033ZM10.8337 9.16602V14.166H12.5003V9.16602H10.8337ZM7.50033 3.33268V4.99935H12.5003V3.33268H7.50033Z" fill="currentColor" />
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default Row;
