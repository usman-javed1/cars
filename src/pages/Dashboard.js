import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import Sidebar from '../components/dashboard/Sidebar';
import Main from '../components/dashboard/Main';

const Dashboard = () => {
    const navigate = useNavigate(); // Hook to programmatically navigate

    useEffect(() => {
        // Check for the token in localStorage
        const token = localStorage.getItem('token');
        if (!token) {
            // If no token is found, redirect to the login page
            navigate('/admin');
        }
    }, [navigate]); // Empty dependency array to run only on mount

    return (
        <div className='flex w-[100vw]'>
            <Sidebar />
            <Main />
        </div>
    );
};

export default Dashboard;
