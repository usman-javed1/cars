import React from 'react'
import { Link } from 'react-router-dom'

const MainBlog = ({post}) => {
  return (
    <>
      <div className="flex flex-wrap  blogContainer lg:mb-0  mb-[20px]">
        <div className="lg:w-[715px] w-[325px] md:w-[500px] ">
          <img className="lg:w-[715px] w-[325] lg:h-[522px] h-[243.75px] rounded-[15px]" src={post?.photos} alt="" />
        </div>
        <div className="w-[443px] lg:h-[522px] m-auto lg:mt-0 md:mt-0 mt-10 flex flex-col justify-center">
          <p className='text-[14px]  font-[500] text-[#959595]'>{post?.category}</p>
          <Link to={`/news/${post?.id}`} className=' hover:underline lg:text-[36px] text-[18px] font-[700] py-[20px]'>
            {post?.title}
          </Link>
          <p className='lg:text-[14px] text-[12px]  font-[500] text-[#959595] lg:w-[444px] w-[325px] '>{post?.description}</p>
          <p className='lg:text-[14px] text-[12px] font-[500] text-[#636363] lg:pt-[30px] pt-[18.6px]'>{post?.publishDate}</p>

        </div>

      </div>

    </>
  )
}

export default MainBlog