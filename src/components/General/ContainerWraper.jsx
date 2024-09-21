import React from 'react'

const ContainerWraper = ({ children }) => {
    return (
        <div className="App w-[100%] max-w-full mx-auto pl-[5%]">
            <div className="lg:w-full md:w-full w-[350px] mx-auto lg:pl-0">
                <div className="container ">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default ContainerWraper
