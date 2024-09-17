import React from 'react';


const BlogPost = ({ imageSrc, category, title, description, date }) => (
  <div className="w-[32.3%] blogContainer mb-[20px]">
    <div className="">
      <img className="w-full h-[300px] rounded-[15px]" src={imageSrc} alt={title} />
    </div>
    <div className="m-auto mt-4 pr-[10px]">
      <p className='text-[14px] font-[500] text-[#959595]'>{category}</p>
      <h2 className='py-[20px] text-2xl font-bold'>
        {title}
      </h2>
      <p className='text-[14px] font-[500] text-[#959595]'>
        {description}
      </p>
      <p className='text-[14px] font-[500] text-[#636363] pt-[30px]'>{date}</p>
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

  return (
    <div className="flex flex-wrap pt-[30px] gap-[20px]">
      {blogPosts.map((post, index) => (
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
}

export default BlogMainPart;
