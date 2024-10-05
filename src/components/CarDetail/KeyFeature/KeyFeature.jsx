import React, { useEffect, useState } from 'react';

const KeyFeature = (props) => {
    // Array of key features
    const [keyFeatures, setKeyFeatures] = useState(null);

    useEffect(() => {
        setKeyFeatures([
            { label: 'Transmission', value: props.car?.transType },
            { label: 'Seats', value: props.car?.seats + ' seats' },
            { label: 'Engine', value:  'I-' + props.car?.miles + ' cyl' },
            { label: 'Miles per year', value: props.car?.miles + ' miles' }
        ]);
    }, [props]);

    return (
        <div className="mainkeyfeature bg-black pt-[80px] pb-[80px]">
            <div className='container px-[25px] lg:px-[0px]'>
                <h2 className='lg:class-for-h2 text-[35px] font-[700] text-[#ffffff]'>Key specifications</h2>
                <div className='grid lg:grid-cols-4 grid-cols-2  gap-8'>
                    {keyFeatures && keyFeatures.map((feature, index) => (
                        <div key={index} className='lg:w-[190px] w-[150px] mt-[50px]'>
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
