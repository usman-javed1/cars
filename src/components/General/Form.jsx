import React, { useState } from 'react';
import Thankyou from './Thankyou'; // Import Thankyou component

const Form = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [showThankYou, setShowThankYou] = useState(false); // State to control modal visibility

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        setShowThankYou(true); // Show Thankyou modal on submit
    };

    return (
        <div className='w-[505px] h-[232px] lg:mt-0 md:mt-0 mt-10'>
            <form onSubmit={handleSubmit}> {/* Add form submission handler */}
                <div className="row1 flex gap-[20px]">
                    <div className="">
                        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} className='lg:w-[244.94px] md:w-[244.94px] w-[157.63px] h-[54px] border-[0px, 0px, 1px, 0px] border-[#B9B9B9] placeholder:text-[#B9B9B9] p-[16px, 10px, 14px, 0px] bg-transparent border-b outline-none text-[16px] font-[500] text-white' placeholder='First name' />
                    </div>
                    <div className="">
                        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} className='lg:w-[244.94px] md:w-[244.94px] w-[157.63px] h-[54px] border-[0px, 0px, 1px, 0px] border-[#B9B9B9] placeholder:text-[#B9B9B9] p-[16px, 10px, 14px, 0px] bg-transparent border-b outline-none text-[16px] font-[500] text-white' placeholder='Last name' />
                    </div>
                </div>
                <div className="mt-8">
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className='lg:w-[510px] md:w-[510px] w-[324px] h-[54px] border-[0px, 0px, 1px, 0px] border-[#B9B9B9] placeholder:text-[#B9B9B9] p-[16px, 10px, 14px, 0px] bg-transparent border-b outline-none text-[16px] font-[500] text-white' placeholder='Email' />
                </div>

                <div className="mt-8">
                    <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} className='lg:w-[510px] md:w-[510px] w-[324px] h-[54px] border-[0px, 0px, 1px, 0px] border-[#B9B9B9] placeholder:text-[#B9B9B9] p-[16px, 10px, 14px, 0px] bg-transparent border-b outline-none text-[16px] font-[500] text-white' placeholder='Message' />
                </div>

                <div className="">
                    <button
                        className='submitButton lg:w-[510px] md:w-[510px] w-[325px] h-[56px] flex justify-center items-center text-[16px] font-[500] mt-[30.4px] text-black bg-white rounded-[10px] hover:bg-brand-main transition-all duration-300 hover:text-white gap-3 relative'
                    >
                        Submit
                        <img src={require("../../images/fullwhitearrow.png")} className=' w-[0] h-[0] hidden absolute lg:right-[35%] right-[28%]' alt="" />
                    </button>
                </div>
            </form>
            {showThankYou && <Thankyou onClose={() => setShowThankYou(false)} />} {/* Render Thankyou modal */}
        </div>
    )
}

export default Form
