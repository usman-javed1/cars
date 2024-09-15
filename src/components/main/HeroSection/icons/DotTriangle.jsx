import React from 'react';

const DotTriangle = ({ bg = "white", color = "#B9B9B9" }) => {
    return (
        <div>
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="80" height="80" rx="15" fill={bg} className="transition-all duration-200" />
                <path
                    d="M39.9582 26L34.6696 35.5824L39.7163 44.7273L29.8547 44.7222L24 53.9987L34.9761 54L40 45.6722L45.0239 54L56 53.9987L50.1453 44.7222L40.5699 44.7273H40.2001L45.2468 35.5824L39.9582 26Z"
                    fill={color}
                    className="transition-all duration-200"
                />
            </svg>
        </div>
    );
};

export default DotTriangle;
