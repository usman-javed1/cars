import React from 'react';

const All = ({ width = 80, height = 80, bg = '#0E0E0E', color="white" }) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect width="80" height="80" rx="15" fill={bg} />
            <path
                d="M35.872 34.336L33.648 40.448H38.112L35.872 34.336ZM33.232 41.888L32.48 44H30.432L34.48 32.672H37.264L41.296 44H39.264L38.512 41.888H33.232ZM42.4064 32.192H44.1344V44H42.4064V32.192ZM45.9576 32.192H47.6856V44H45.9576V32.192Z"
                fill={color}
            />
        </svg>
    );
};

export default All;
