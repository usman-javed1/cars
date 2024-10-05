import React, { useEffect, useState } from 'react';
import MainBlog from '../MainBlog/MainBlog';
import BlogMainPart from '../BlogMainPart/BlogMainPart';
import Pagination from '../Pagination/Pagination';

const RenderContent = ({ blogPosts, currentPage, lastPage, setPage  }) => {
  // const [page, setPage] = useState(1);
  useEffect(() => {
    console.log("Blogs post in render component", blogPosts)
  },[blogPosts])
  return (
    <>
      {lastPage > 0 && <MainBlog post={blogPosts[0]} />}
      {<BlogMainPart blogPosts={blogPosts} />}
      {lastPage > 0 && <Pagination currentPage={currentPage} setPage={setPage} totalPages={lastPage} />}
    </>
  );
};
const Blogstab = () => {
  // State to manage the active tab and active category
  const [activeTab, setActiveTab] = useState('all'); // 'all' for the All tab by default
  const [activeCategory, setActiveCategory] = useState('All'); // Default category is 'All'
  const [blogPosts, setBlogsPosts] = useState([]);
  
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  useEffect(() => {
    const init = async () => {
      try {
        const queryParams = new URLSearchParams();
        console.log("Heelo djkda");

        queryParams.append('page', page);
        queryParams.append('limit', 6);

        if (activeCategory !== 'All') {
            queryParams.append('category', activeCategory);
        }

        console.log("Active Category", activeCategory);

        // Fetch the data with the applied filters
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/blog/public?${queryParams.toString()}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data?.data?.blogs);
        const formattedBlogs = data?.data?.blogs.map((blog) => ({
          ...blog,
          publishDate: formatDate(blog.publishDate),
        }));
        setBlogsPosts(formattedBlogs);
        setLastPage(data?.data?.lastPage);
        return data;

    } catch (error) {
        console.log('Error fetching data:', error);
    }
    };
    init();
  }, [page, activeCategory]);

  useEffect(() => {
    setPage(1);
  }, [activeCategory]);

  // Function to filter blog posts based on the active category
  const getFilteredBlogPosts = () => {
    if (activeCategory === 'All') return blogPosts;
    return blogPosts.filter(post => post.category === activeCategory);
  };

  // Category tabs
  const categories = [
    { id: 'all', label: 'All', category: 'All' }, // Default 'All' tab
    { id: 'updates', label: 'Company Updates', category: 'Company Updates' },
    { id: 'new-models', label: 'New Models and Offers', category: 'New Models and Offers' },
    { id: 'customer-stories', label: 'Customer Stories', category: 'Customer Stories' },
    { id: 'tips', label: 'Tips and Advice', category: 'Tips and Advice' },
    { id: 'insights', label: 'Insights', category: 'Insights' },
    { id: 'financial-tips', label: 'Financial Tips', category: 'Financial Tips' },
  ];

  return (
    <>
      <div>
        <div className="mb-4">
          <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" role="tablist">
            {categories.map(({ id, label, category }) => (
              <li className="me-2" role="presentation" key={id}>
                <button
                  className={`inline-block lg:mt-0 mt-2 h-[48px] flex justify-center items-center px-4 rounded-[43px] ${
                    activeTab === id ? 'bg-black text-white border-black' : 'bg-[#F8F8F8] text-black border-transparent'
                  }`}
                  onClick={() => {
                    setActiveTab(id);
                    setActiveCategory(category); // Set category based on tab
                  }}
                  role="tab"
                  aria-controls={id}
                  aria-selected={activeTab === id}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div id="default-tab-content">
          {categories.map(({ id }) => (
            <div
              key={id}
              className={`pt-[20px] ${activeTab === id ? '' : 'hidden'}`}
              id={id}
              role="tabpanel"
              aria-labelledby={`${id}-tab`}
            >
              <RenderContent blogPosts={blogPosts} currentPage={page} lastPage={lastPage} setPage={setPage} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blogstab;
