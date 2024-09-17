import React, { useState, useEffect } from 'react';

const BlogPost = ({ imageSrc, category, title, description, date }) => (
  <div className="lg:w-[400px] w-[325px] blogContainer lg:mb-[20px] mb-[30px]">
    <div className="">
      <img className="w-full lg:h-[300px] h-[243px] rounded-[15px]" src={imageSrc} alt={title} />
    </div>
    <div className="m-auto mt-4 pr-[10px]">
      <p className='text-[14px] font-[500] text-[#959595] ' >{category}</p>
      <h2 className='py-[20px] lg:text-2xl text-[16px] w-[100%] font-bold cursor-pointer'>
        {title}
      </h2>
      <p className='lg:text-[14px] text-[12px] font-[500] text-[#959595]'>
        {description}
      </p>
      <p className='lg:text-[14px] text-[12px] font-[500] text-[#636363] lg:pt-[30px] pt-[18.6px]'>{date}</p>
    </div>
  </div>
);

const BlogMainPart = () => {
  const blogPosts = [
    {
      imageSrc: require('../../../images/image.png'),
      category: 'New Models and Offers',
      title: 'Special Lease Offers for Fall 2024!',
      description: 'We are excited to announce the addition of the latest models from top brands to our leasing options! Discover the new Mercedes-Benz, BMW, Audi, and Tesla models now available for lease.',
      date: 'September 5, 2024',
    },
    {
      imageSrc: require('../../../images/Mask group.png'),
      category: 'Lease Now, Pay Later',
      title: 'New Models Available for Leasing!',
      description: 'We are excited to announce the addition of the latest models from top brands to our leasing options! Discover the new Mercedes-Benz, BMW, Audi, and Tesla models now available for lease.',
      date: 'September 5, 2024',
    },
    {
      imageSrc: require('../../../images/Mask group (1).png'),
      category: 'New Models and Offers',
      title: 'Sustainable Driving: New Electric and Hybrid Models',
      description: 'We are excited to announce the addition of the latest models from top brands to our leasing options! Discover the new Mercedes-Benz, BMW, Audi, and Tesla models now available for lease.',
      date: 'September 5, 2024',
    },
    {
      imageSrc: require('../../../images/Mask group (1).png'),
      category: 'New Models and Offers',
      title: 'New Models Available for Leasing!',
      description: 'We are excited to announce the addition of the latest models from top brands to our leasing options! Discover the new Mercedes-Benz, BMW, Audi, and Tesla models now available for lease.',
      date: 'September 5, 2024',
    },
    {
      imageSrc: require('../../../images/Mask group (1).png'),
      category: 'New Models and Offers',
      title: 'New Models Available for Leasing!',
      description: 'We are excited to announce the addition of the latest models from top brands to our leasing options! Discover the new Mercedes-Benz, BMW, Audi, and Tesla models now available for lease.',
      date: 'September 5, 2024',
    },
    {
      imageSrc: require('../../../images/image.png'),
      category: 'New Models and Offers',
      title: 'New Models Available for Leasing!',
      description: 'We are excited to announce the addition of the latest models from top brands to our leasing options! Discover the new Mercedes-Benz, BMW, Audi, and Tesla models now available for lease.',
      date: 'September 5, 2024',
    },
    {
      imageSrc: require('../../../images/image.png'),
      category: 'New Models and Offers',
      title: 'New Models Available for Leasing!',
      description: 'We are excited to announce the addition of the latest models from top brands to our leasing options! Discover the new Mercedes-Benz, BMW, Audi, and Tesla models now available for lease.',
      date: 'September 5, 2024',
    },
    {
      imageSrc: require('../../../images/Mask group.png'),
      category: 'New Models and Offers',
      title: 'New Models Available for Leasing!',
      description: 'We are excited to announce the addition of the latest models from top brands to our leasing options! Discover the new Mercedes-Benz, BMW, Audi, and Tesla models now available for lease.',
      date: 'September 5, 2024',
    },
    {
      imageSrc: require('../../../images/Mask group (1).png'),
      category: 'New Models and Offers',
      title: 'New Models Available for Leasing!',
      description: 'We are excited to announce the addition of the latest models from top brands to our leasing options! Discover the new Mercedes-Benz, BMW, Audi, and Tesla models now available for lease.',
      date: 'September 5, 2024',
    },
  ];

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [visiblePosts, setVisiblePosts] = useState(isMobile ? blogPosts.slice(0, 2) : blogPosts.slice(0, 6));

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
    <div className="flex flex-wrap pt-[30px] justify-center w-full gap-[25px]">
      {visiblePosts.map((post, index) => (
        <BlogPost
          key={index}
          imageSrc={post.imageSrc}
          category={post.category}
          title={post.title}
          description={post.description}
          date={post.date}
        />
      ))}
    </div>
  );
};

export default BlogMainPart;
