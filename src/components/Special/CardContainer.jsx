import React, { useState, useEffect } from 'react';
import Card from '../General/Card';


const CardContainer = ({ blogPosts }) => {


    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const [visiblePosts, setVisiblePosts] = useState(isMobile ? blogPosts.slice(0, 4) : blogPosts.slice(0, 6));

    useEffect(() => {
        const handleResize = () => {
            const mobileView = window.innerWidth < 768;
            setIsMobile(mobileView);
            setVisiblePosts(mobileView ? blogPosts.slice(0, 2) : blogPosts.slice(0, 6));
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [blogPosts]);

    return (
        <div className="flex flex-wrap -mt-5 justify-between w-full gap-[5px]">
            {visiblePosts.map((post, index) => (
                <Card
                    key={index}
                    obj={post}
                />
            ))}
        </div>
    );
};

export default CardContainer;
