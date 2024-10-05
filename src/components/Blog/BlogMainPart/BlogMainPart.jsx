import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const BlogPost = ({ imageSrc, category, title, description, date, id }) => {
  const navigate = useNavigate()
  return (
    <div className="lg:w-[31.5%] w-[325px] blogContainer lg:mb-[20px] mb-[30px]">
      <div className="">
        <img className="w-full lg:h-[300px] h-[243px] rounded-[15px]" src={imageSrc} alt={title} />
      </div>
      <div className="m-auto mt-4 pr-[10px]">
        <p className="text-[14px] font-[500] text-[#959595]">{category}</p>
        <Link to={`/news/${id}`} className="py-[20px] lg:text-2xl text-[16px] w-[100%] font-bold cursor-pointer">
          {title}
        </Link>
        <p className="lg:text-[14px] text-[12px] font-[500] text-[#959595]">
          {description}
        </p>
        <p className="lg:text-[14px] text-[12px] font-[500] text-[#636363] lg:pt-[30px] pt-[18.6px]">
          {date}
        </p>
      </div>
    </div>
  )
};



const BlogMainPart = ({ blogPosts }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [visiblePosts, setVisiblePosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Handle window resize and adjust the visible posts accordingly
  useEffect(() => {
    const handleResize = () => {
      const mobileView = window.innerWidth < 768;
      setIsMobile(mobileView);
      setVisiblePosts(mobileView ? blogPosts.slice(0, 2) : blogPosts.slice(0, 6));
    };

    window.addEventListener('resize', handleResize);

    // Set the visible posts when the component mounts or when blogPosts change
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [blogPosts]);

  // Simulate backend fetch and loading state
  useEffect(() => {
    if (blogPosts.length > 0) {
      setLoading(false); // Data is loaded, so set loading to false
    }
  }, [blogPosts]);

  if (loading) {
    return <div>Loading...</div>; // Display a loading message or spinner while data is being fetched
  }

  return (
    <div className="flex flex-wrap pt-[30px]  w-full gap-[2.5%]">
      {visiblePosts.map((post, index) => (
        <BlogPost
          key={index}
          imageSrc={post.photos}
          category={post.category}
          title={post.title}
          description={post.description}
          date={post.publishDate}
          id={post.id}
        />
      ))}
    </div>
  );
};

export default BlogMainPart;
