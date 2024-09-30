import React from 'react'
import Dropdown from './Dropdown'

const Modal = ({ closeModal, heading = "Add new vehicle" }) => {
    return (
        <div className='w-[100vw] h-[100vh] flex fixed justify-center items-center top-0 left-0' style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
            <div className="w-[690px] flex flex-wrap rounded-[15px] h-[95vh] max-h-[778px] bg-white px-10 overflow-y-auto">
                <div className="head text-[22px] font-[700] text-black mt-[36px]">
                    {heading}
                </div>
                <div className="head text-[15px] w-[650px] mt-[18.75px] font-[700] text-black">
                    Vehicle Details
                </div>
                <div className="flex flex-wrap pt-4 gap-3">
                    <div className="w-[284px]">
                        <div className="text-[#767676] text-[12px] font-[500]">
                            Choose Category
                        </div>

                        <div className="">
                            <Dropdown options={['Usman', 'Javed ', 'Usman2', 'Javed2']} label={'Categories'} />
                        </div>
                    </div>

                    <div className="w-[284px]">
                        <div className="text-[#767676] text-[12px] font-[500]">
                            Vehicle Model
                        </div>

                        <div className="">
                            <Dropdown options={['Usman', 'Javed ', 'Usman2', 'Javed2']} label={'Categories'} />
                        </div>
                    </div>

                    <div className="w-[284px]">
                        <div className="text-[#767676] text-[12px] font-[500]">
                            Vehicle Brand
                        </div>

                        <div className="">
                            <Dropdown options={['Usman', 'Javed ', 'Usman2', 'Javed2']} label={'Categories'} />
                        </div>
                    </div>

                    <div className="w-[284px]">
                        <div className="text-[#767676] text-[12px] font-[500]">
                            Lease Term
                        </div>

                        <div className="">
                            <Dropdown options={['Usman', 'Javed ', 'Usman2', 'Javed2']} label={'Categories'} />
                        </div>
                    </div>

                    <div className="">
                        <div className="text-[#767676] text-[12px] font-[500]">
                            Miles per year
                        </div>

                        <input type='text' placeholder='10,000 miles/year' className="flex items-center justify-between  cursor-pointer bg-[#F8F8F8] w-[284px] h-[50px] rounded-xl px-5 text-[14px] font-[400] mt-4" />


                    </div>


                    <div className="">
                        <div className="text-[#767676] text-[12px] font-[500]">
                            Monthly Payment
                        </div>

                        <input type='text' placeholder='10,000 miles/year' className="flex items-center justify-between  cursor-pointer bg-[#F8F8F8] w-[284px] h-[50px] rounded-xl px-5 text-[14px] font-[400] mt-4" />


                    </div>


                    <div className="">
                        <div className="text-[#767676] text-[12px] font-[500]">
                            Number of Seats
                        </div>

                        <input type='text' placeholder='10,000 miles/year' className="flex items-center justify-between  cursor-pointer bg-[#F8F8F8] w-[284px] h-[50px] rounded-xl px-5 text-[14px] font-[400] mt-4" />


                    </div>

                    <div className="w-[284px]">
                        <div className="text-[#767676] text-[12px] font-[500]">
                            Transmission type
                        </div>

                        <div className="">
                            <Dropdown options={['Usman', 'Javed ', 'Usman2', 'Javed2']} label={'Categories'} />
                        </div>
                    </div>

                    <div className="">
                        <div className="text-[#767676] text-[12px] font-[500]">
                            Number of Cylinders
                        </div>

                        <input type='text' placeholder='10,000 miles/year' className="flex items-center justify-between  cursor-pointer bg-[#F8F8F8] w-[284px] h-[50px] rounded-xl px-5 text-[14px] font-[400] mt-4" />


                    </div>


                </div>


                <div className="head text-[15px] mt-[18.75px] font-[700] text-black">
                    Add photos
                </div>
                <br />
                <br />
                <div className="w-[40px]"></div>


                <div className="text-[12px] font-[400] flex gap-3 text-[#4E4E4E]">
                    <img src={require("../../images/info.png")} alt="" />
                    <div className="">
                        Upload upto 10 images of any damages or the vehicle condition upon return
                    </div>
                </div>

                <div className="w-[80px]"></div>

                <div className="bg-lightgray mt-3 text-[16px] font-[500] px-7 py-4 rounded-[10px]">
                    Browse files
                </div>

                <div className="w-[690px] flex justify-end gap-5 font-[500] pb-[30px]">
                    <button className="" onClick={closeModal}>
                        Cancel
                    </button>
                    <button className="bg-black text-white px-8 py-4 rounded-[15px]" onClick={closeModal}>
                        Save
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Modal
