import React from 'react';
import PropTypes from 'prop-types';
import engineIcon1 from '../../../images/engine-motor-icon 1.png';
import engineIcon2 from '../../../images/speedometer-icon 1.png';
import engineIcon3 from '../../../images/sports-car-icon (1) 1.png';
import engineIcon4 from '../../../images/seatbelt-icon 1.png';

const WhyThisCar = () => {
  // Array of card data with different images
  const cardData = [
    { id: 1, image: engineIcon1, title: 'Engine Power', description: 'Handcrafted AMG 4.0L V8 biturbo engine, providing up to 523 horsepower' },
    { id: 2, image: engineIcon2, title: 'Design', description: 'Accelerates from 0 to 100 km/h in just 3.7 seconds' },
    { id: 3, image: engineIcon3, title: 'Technology', description: 'Premium leather interior, advanced infotainment system' },
    { id: 4, image: engineIcon4, title: 'Performance', description: 'State-of-the-art safety features, including adaptive cruise control' }
  ];

  return (
    <section className='pt-[150px] pb-[150px]'>
      <h2 className='class-for-h2 text-center lg:w-[35%]  m-auto'>Why Mercedes-AMG GT Coupé?</h2>
      <div className='flex justify-center items-center gap-[100px] mt-[70px]'>

        {cardData.map(card => (
          <div key={card.id} className="cardwhythiscar w-[210px]">
            <img className='m-auto ' src={card.image} alt={`${card.title} icon`} />
            <h5 className='class-for-h5 pt-[34px] pb-[18px] flex justify-center '>{card.title}</h5>
            <p className='text-[14px] text-[#959595] text-center'>{card.description}</p>
          </div>
        ))}

      </div>
    </section>
  );
};

WhyThisCar.propTypes = {
  cardData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ),
};

export default WhyThisCar;
