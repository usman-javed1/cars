import React from 'react'

const ContainerWraper = ({children}) => {
    return (
        <div className='lg:w-full md:w-full w-[350px] px-[10px]'>
            <div className="container">
                {children}
            </div>
        </div>
    )
}

export default ContainerWraper
