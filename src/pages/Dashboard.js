import React from 'react'
import Sidebar from '../components/dashboard/Sidebar'
import Main from '../components/dashboard/Main'

const Dashboard = () => {
    return (
        <div className='flex w-[100vw]'>
            <Sidebar />
            <Main />
        </div>
    )
}

export default Dashboard
