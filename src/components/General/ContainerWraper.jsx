import React from 'react';
import { useLocation } from 'react-router-dom';

const ContainerWraper = ({ children }) => {
    const location = useLocation();
    const isDetailPage = location.pathname.startsWith('/detail');

    return (
        <div className={`App w-[100%] max-w-full mx-auto ${isDetailPage ? 'pl-0' : 'pl-[5%]'} lg:pl-0`}>
            <div className="lg:w-full md:w-full w-[350px] mx-auto lg:pl-0">
                <div className="container ">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default ContainerWraper
