import React from 'react'

const ImageFullWidth = () => {
  return (
   <>
   
     <img  className="lg:block hidden w-[100%] lg:h-[669px] object-fit  lg:mt-[65px] mt-[10px] lg:mb-[100px] mb-[20px]" src={require('../../../src/images/image 168.png')} alt="" />
     <img  className="w-[100%] lg:hidden block :h-[600%]  mt-[65px] mb-[70px] " src={require('../../../src/images/Mask group (2).png')} alt="" />
    
   </>
  )
}

export default ImageFullWidth