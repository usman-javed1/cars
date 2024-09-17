import React, { useState } from 'react';

const ContactForm = () => {

    const [step, setStep] = useState(1);

    // Proceed to the next step
    const nextStep = () => {
        if (step < 4) {
            setStep(step + 1);
        }
    };

    // Go back to the previous step
    const prevStep = () => {
        if (step > 1) {
            setStep(step - 1);
        }
    };

    // Submit form (handle form submission)
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Form submitted!');
    };

    // Render different step contents
    const renderStep = () => {
        switch (step) {
            case 1:
                return <Info />;
            case 2:
                return <Address />;
            case 3:
                return <Employment />;
            case 4:
                return <Identity />;
            default:
                return <Info />;
        }
    };

    return (
        <div className="flex  ">
            <div className="form-container w-[50%]">
                <form onSubmit={handleSubmit}>

                    <div className="form-steps">
                        <span className={step >= 1 ? (step === 1 ? 'active' : 'completed') : ''}>Info</span> &gt;
                        <span className={step >= 2 ? (step === 2 ? 'active' : 'completed') : ''}>Address</span> &gt;
                        <span className={step >= 3 ? (step === 3 ? 'active' : 'completed') : ''}>Employment</span> &gt;
                        <span className={step >= 4 ? (step === 4 ? 'active' : 'completed') : ''}>Identity</span>
                    </div>
                    <div className="form-content">{renderStep()}</div>
                    <div className="form-navigation">
                        {step > 1 && <button type="button" onClick={prevStep}>Previous</button>}
                        {step < 4 && <button type="button" onClick={nextStep}>Next</button>}
                        {step === 4 && <button type="submit">Submit</button>}
                    </div>
                </form>
            </div>

            {/* Image container */}
            <div className="image-container w-[50%]">
                <img className="lg:w-[610px] w-[581] lg:h-[522px] h-[243.75px] rounded-[15px]" src={require('../../../src/images/car contact us.png')} alt="" />
            </div>
        </div>
    );
};

const Info = () => (
    <div className='w-[505px] h-[232px] lg:mt-0 md:mt-0 mt-10'>
        <div className="row1 flex gap-[20px]">
            <div className="">
                <input type="text" className='lg:w-[244.94px] md:w-[244.94px] w-[157.63px] h-[54px] border-[0px, 0px, 1px, 0px] border-[#B9B9B9] placeholder:text-[#B9B9B9] p-[16px, 10px, 14px, 0px] bg-transparent border-b outline-none text-[16px] font-[500] text-white' placeholder='First name' />
            </div>
            <div className="">
                <input type="text" className='lg:w-[244.94px] md:w-[244.94px] w-[157.63px] h-[54px] border-[0px, 0px, 1px, 0px] border-[#B9B9B9] placeholder:text-[#B9B9B9] p-[16px, 10px, 14px, 0px] bg-transparent border-b outline-none text-[16px] font-[500] text-white' placeholder='Last name' />
            </div>
        </div>
        <div className="mt-8">
            <input type="text" className='lg:w-[510px] md:w-[510px] w-[324px]  h-[54px] border-[0px, 0px, 1px, 0px] border-[#B9B9B9] placeholder:text-[#B9B9B9] p-[16px, 10px, 14px, 0px] bg-transparent border-b outline-none text-[16px] font-[500] text-white' placeholder='Email' />
        </div>

        <div className="mt-8">
            <input type="text" className='lg:w-[510px] md:w-[510px] w-[324px] h-[54px] border-[0px, 0px, 1px, 0px] border-[#B9B9B9] placeholder:text-[#B9B9B9] p-[16px, 10px, 14px, 0px] bg-transparent border-b outline-none text-[16px] font-[500] text-white' placeholder='Message' />
        </div>


    </div>
);

const Address = () => (
    <div>
        <h3>Step 2: Address</h3>
        <p>Enter your address information here.</p>
    </div>
);

const Employment = () => (
    <div>
        <h3>Step 3: Employment</h3>
        <p>Enter your employment details here.</p>
    </div>
);

const Identity = () => (
    <div>
        <h3>Step 4: Identity</h3>
        <p>Enter your identity verification here.</p>
    </div>
);

export default ContactForm;
