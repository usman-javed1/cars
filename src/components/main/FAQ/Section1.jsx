import React, { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi'; // Import plus and minus icons from react-icons

const FAQ = () => {
    const [openQuestions, setOpenQuestions] = useState([]);

    const toggleQuestion = (index) => {
        if (openQuestions.includes(index)) {
            setOpenQuestions(openQuestions.filter((q) => q !== index));
        } else {
            setOpenQuestions([...openQuestions, index]);
        }
    };

    const faqs = [
        { id: 1, question: "What is auto leasing?", answer: "Auto leasing is a financial arrangement where you pay for the use of a vehicle over a set period, typically 2-4 years, rather than purchasing it outright. At the end of the lease term, you can return the vehicle, buy it, or lease a new one." },
        { id: 2, question: "What do I need to apply for a lease?", answer: "You can query the status of your orders any time in My orders..." },
        { id: 3, question: "Can I lease a vehicle if I have bad credit?", answer: "Chanel releases several collections every year based on seasons..." },
        { id: 4, question: "What are the typical lease terms?", answer: "Some collections may be available exclusively in stores..." },
        { id: 5, question: "What happens if I exceed the mileage limit?", answer: "You can look for products online or contact customer service for more information." },
    ];

    return (
        <div className="lg:-mt-10 md:-mt-10 mt-[10%]">
            <div className="lg:w-[600px] md:w-[600px] w-[325px]">
                {faqs.map((faq, index) => (
                    <div key={faq.id} className="w-full md:px-6">
                        <div className="w-full my-10" />
                        <div
                            className={`flex justify-between items-center w-full pb-4 cursor-pointer ${
                                openQuestions.includes(index)
                                    ? 'border-none'
                                    : 'border-b border-transparent hover:border-black transition-all duration-300'
                            }`}
                        >
                            <div>
                                <p className={`lg:text-[18px] md:text-[18px] text-[16px] text-black font-[700] text-start`}>
                                    {faq.question}
                                </p>
                            </div>
                            <button
                                aria-label="toggler"
                                className="focus:outline-none "
                                onClick={() => toggleQuestion(index)}
                            >
                                {openQuestions.includes(index) ? (
                                    <FiMinus className="text-[32px] text-[#959595]" strokeWidth={1.5} />
                                ) : (
                                    <FiPlus className="text-[32px] text-[#959595]" strokeWidth={1.5} />
                                )}
                            </button>
                        </div>
                        <div className={`${openQuestions.includes(index) ? 'block' : 'hidden'} mt-6 w-full`}>
                            <p className="text-start leading-6 text-[#959595] lg:text-[16px] md:text-[16px] text-[14px] font-[500]">{faq.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;
