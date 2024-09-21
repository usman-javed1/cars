import React from 'react'

const ContainerWraper = ({children}) => {
    return (
        <div className='lg:w-full md:w-full w-[100vw] px-[5%] justify-center items-center'>
            <div className="container mx-auto">
                {children}
            </div>
        </div>
    )
}

export default ContainerWraper
