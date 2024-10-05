import React, { useContext, useEffect, useRef, useState } from 'react';
import BlogModal from './BlogModal';
import { context } from '../../context/context';

const BlogPost = ({ imageSrc, category, title, description, date, id }) => {
    const [openModal, setOpenModel] = useState(false);
    const onClose = () => {
        setOpenModel(false);
    };

    function formatDate(date) {
        if (date) {
            const dateObj = new Date(date);
    
            if (!isNaN(dateObj)) {
                const options = { year: 'numeric', month: 'long', day: 'numeric' };
                const formattedDate = dateObj.toLocaleDateString('en-US', options);
                return formattedDate;
            } else {
                return 'Invalid Date';
            }
        }
        return '';
    }

    return (
        <div className="lg:w-[100%] w-[325px] lg:mb-[20px] mb-[30px] overflow-hidden flex flex-col justify-between">
            <div className="">
                <div className="">
                    <img className=" lg:h-[200px] h-[200px] rounded-[15px]" src={imageSrc} alt={title} />
                </div>

                <div className=" mt-4 pr-[10px]">
                    <p className="text-[14px] font-[500] text-[#959595]">{category}</p>
                    <h2 className="py-[20px] lg:text-2xl text-[16px] w-[100%] font-bold cursor-pointer">
                        {title}
                    </h2>
                    <p className="lg:text-[14px] text-[12px] font-[500] text-[#959595]">
                        {description}
                    </p>
                    <p className="lg:text-[14px] text-[12px] font-[500] text-[#636363] lg:pt-[10px] pt-[18.6px]">
                        {formatDate(date)}
                    </p>
                </div>
            </div>

            <div
                className="w-[100%] mb-3 mt-6 cursor-pointer bg-[#F4F4F4] p-4 rounded-[10px] flex justify-center gap-2 text-[14px] items-center font-[500] text-[#636363]"
                onClick={() => setOpenModel(!openModal)}
            >
                <img src={require('../../images/FrameEdit.png')} className="w-[14px] h-[13px] mt-[-2px]" alt="" /> Edit
            </div>

            {openModal && <BlogModal blogId={id} closeModal={onClose} />}
        </div>
    );
};

const Blog = () => {
    const [user, setUser] = useState(null);
    const dropdownRef1 = useRef(null);
    const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);
    const dropdownOptions1 = [
        'All Categories',
        'Company Updates',
        'New Models and Offers',
        'Customer Stories',
        'Tips and Advice',
        'Insights',
        'Financial Tips',
    ];
    const [activeSort1, setActiveSort1] = useState('All Categories');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { fetchBlogAdmin } = useContext(context);
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const tempUser = JSON.parse(window.localStorage.getItem('user'));
        if (tempUser) {
            setUser(tempUser);
        }

        const init = async () => {
            const data = await fetchBlogAdmin(activeSort1 === 'All Categories' ? null : activeSort1);
            console.log('Data in blog  ', data);
            setBlogs(data?.data?.blogs);
        };

        init();
    }, [activeSort1]); // Ensure it refetches when `activeSort1` changes

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef1.current && !dropdownRef1.current.contains(event.target)) {
                setIsDropdownOpen1(false); // Close the dropdown if clicked outside
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <>
            <div className="w-[83vw] overflow-hidden flex flex-col">
                <div
                    className="h-[60px] flex justify-between items-center w-[83vw] overflow-hidden pl-10"
                    style={{ borderBottom: '1px solid #E9E9E9' }}
                >
                    <div className="flex items-center relative">
                        <img
                            src={require('../../images/Frame (4).png')}
                            alt="Search icon"
                            className="absolute top-[19%] left-[10px]"
                        />
                        <input
                            type="text"
                            placeholder="Search"
                            style={{ border: 'none', outline: 'none' }}
                            className="text-[16px] ml-10 py-2 w-[500px]"
                        />
                    </div>
                    <div className="flex gap-5 font-[500] text-[14px] items-center cursor-pointer">
                        <div className="">
                            <img src={require('../../images/Mask group (5).png')} alt="User icon" className="" />
                        </div>
                        <div className="flex items-center">{user && user.name}</div>
                    </div>
                </div>

                <div className="pl-10 mt-[45px] flex justify-between w-[83vw]">
                    <div className="font-[700] text-[36px]">Blog</div>
                    <div className="flex gap-2">
                        <div className="flex gap-5 relative cursor-pointer" ref={dropdownRef1}>
                            <div
                                className="p-4 gap-3 text-[14px] font-[500] border rounded-[10px] border-[#E9E9E9] lg:flex hidden"
                                onClick={() => setIsDropdownOpen1(!isDropdownOpen1)} // Toggle the dropdown
                            >
                                <img
                                    src={require('../../images/filter icon.png')}
                                    className="w-[20px] h-[20px]"
                                    alt="Filter icon"
                                />
                                <div className="flex gap-10">
                                    <div className="text-[14px] font-[500]">{activeSort1}</div>
                                    <img
                                        src={require('../../images/Frame (2).png')}
                                        className="w-[20px] h-[20px]"
                                        alt="Dropdown arrow"
                                    />
                                </div>
                            </div>

                            {/* Dropdown Menu */}
                            <div className=" z-[10000]">
                                <div
                                    className={`sortDropdown w-[252px] flex flex-col justify-center items-center top-16 left-0 bg-white rounded-[20px] transition-all duration-300 absolute ${isDropdownOpen1 ? 'block' : 'hidden'
                                        }`}
                                    style={{ zIndex: 99999, boxShadow: '0.5px 0.5px 5px #959595 ' }}
                                >
                                    {dropdownOptions1.map((value, index) => (
                                        <div
                                            key={index}
                                            className="text-[#636363] text-[14px] font-[500] py-4 px-3 w-[220px] items-center flex cursor-pointer"
                                            onClick={() => {
                                                setActiveSort1(value);
                                                setIsDropdownOpen1(false); // Close dropdown on selection
                                            }}
                                        >
                                            {value}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Add new article button */}
                            <div
                                className="px-4 flex gap-3 bg-[#FFB600] rounded-[10px] text-white hover:text-black hover:bg-white transition-all duration-300 justify-center items-center cursor-pointer"
                                onClick={openModal} // Open modal on click
                            >
                                <img
                                    src={require('../../images/Frame (5).png')}
                                    className="w-[20px] h-[20px] font-[500]"
                                    alt="Add icon"
                                />
                                <div className="text-[14px]">Add article</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Blog posts */}
                {isModalOpen && <BlogModal closeModal={closeModal} />}
                <div className="">
                    <div className="grid gap-[2%] grid-cols-4 pl-10 w-full mt-10">
                        {blogs &&
                            blogs.map((blog) => (
                                <BlogPost
                                    key={blog._id} // Add a key for better performance
                                    imageSrc={blog?.photos}
                                    category={blog?.category}
                                    title={blog?.title}
                                    description={blog?.description}
                                    date={blog?.publishDate}
                                    id={blog?.id}
                                />
                            ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Blog;
