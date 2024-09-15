import React from 'react';

const DoubleLine = ({ bg = "white", color = "#B9B9B9" }) => {
  return (
    <div>
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="80" height="80" rx="15" fill={bg} className='transition-all duration-200' />
        <path
          d="M38.6875 29H46.8125L28.125 51H20L38.6875 29ZM50.875 29H59L40.3125 51H32.1875L50.875 29Z"
          fill={color}
          className='transition-all duration-200'
        />
      </svg>
    </div>
  );
};

export default DoubleLine;
