import React from 'react';

const KeyFeature = () => {
    // Array of key features
    const keyFeatures = [
        { label: 'Transmission', value: 'Automatic' },
        { label: 'Seats', value: '5 seats' },
        { label: 'Exterior Color', value: 'White' },
        { label: 'Odometer', value: '78,703 miles' },
        { label: 'Drivetrain', value: 'Front-wheel Drive' },
        { label: 'Engine', value: 'I-4 cyl' },
        { label: 'Horsepower', value: '310' },
        { label: 'Fuel Economy', value: '26/38 MPG City/Hwy' }
    ];

    return (
        <div className="mainkeyfeature bg-black pt-[80px] pb-[80px]">
            <div className='container px-[25px] lg:px-[0px]'>
                <h2 className='class-for-h2 text-[#ffffff]'>Key specifications</h2>
                <div className='flex flex-wrap lg:gap-[130px] gap-8'>
                    {keyFeatures.map((feature, index) => (
                        <div key={index} className='lg:w-[190px] w-[158px] mt-[50px]'>
                            <hr />
                            <p className='text-[14px] text-[#959595] pt-[25px] pb-[18px]'>{feature.label}</p>
                            <h5 className='class-for-h5 text-[#ffffff]'>{feature.value}</h5>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default KeyFeature;
