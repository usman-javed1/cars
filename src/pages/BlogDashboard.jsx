import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import Sidebar from '../components/dashboard/Sidebar';
import Main from '../components/dashboard/Main';
import Blog from '../components/dashboard/Blog';

const BlogDashBoard = () => {
    const navigate = useNavigate(); // Hook to programmatically navigate

    const [page, setPage] = useState("main");

    useEffect(() => {
        // Check for the token in localStorage
        const token = localStorage.getItem('token');
        if (!token) {
            // If no token is found, redirect to the login page
            navigate('/admin');
        }
    }, [navigate]); // Empty dependency array to run only on mount

    return (
        <div className='flex w-[100%] overflow-hidden'>
            <Sidebar  />

            { <Blog />}
            
        </div>
    );
};

export default BlogDashBoard;
