import React, { useEffect, useState } from 'react'

const Newscontact = ({ description, heading, category, publishDate }) => {
  const [date, setDate]= useState("")

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }


  useEffect(() => {
    if (publishDate) {
      setDate(formatDate(publishDate));
    }
  }, [publishDate])
  return (
    <>
      <div className="textfirst lg:w-[55%] w-[100%] m-auto">
        <p className='text-[14px]  font-[500] text-[#959595]'>{category}</p>
        <h2 className='class-for-h1 py-[20px]'>
          {heading}
        </h2>
        <p className='text-[14px]  font-[500] text-[#959595] '>{description}</p>
        <p className='text-[14px]  font-[500] text-[#636363] pt-[50px]'>{date}</p>

      </div>


    </>
  )
}

export default Newscontact