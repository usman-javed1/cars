import React from 'react';

const Thankyou = ({ onClose }) => { // Accept onClose prop
    return (
        <div className=' w-[100vw] h-screen flex justify-center items-center fixed top-0 left-0' style={{backgroundColor: "rgba(0, 0, 0,0.8)"}}>
            <div className="w-[400px] h-[400px] bg-white rounded-[15px] flex flex-col justify-center items-center relative">
                <div className="crossBtn absolute right-5 top-5 cursor-pointer" onClick={onClose}> {/* Call onClose when clicked */}
                    <img src={require("../../images/Frame.png")} className='w-[24px] h-[24px]' alt="" />
                </div>
                <div className="text-[30px] font-[700] w-[314px] rtext-center">
                    Thank You for Reaching Out!
                </div>
                <div className="text-[12px] font-[500] text-[#959595] w-[314px]">
                    We've received your message and will get back to you shortly to discuss your leasing needs
                </div>
                <button className="w-[300px] h-[56px] bg-black text-white mt-10 rounded-[10px]" onClick={onClose}>
                    Back to main page
                </button>
            </div>
        </div>
    )
}

export default Thankyou;
