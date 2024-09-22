import React, { useState } from 'react';
import Pagination from '../Blog/Pagination/Pagination';
import CardContainer from './CardContainer';


const RenderContent = ({ blogPosts }) => {

    const [page, setPage] = useState(1);
    return (


        <>
            {/* <MainBlog /> */}
            {/* <BlogMainPart blogPosts={blogPosts} /> */}
            <CardContainer blogPosts={blogPosts} />
            <Pagination currentPage={page} setPage={setPage} />
        </>
    )
};

const Tabs = () => {
    // State to manage the active tab
    const [activeTab, setActiveTab] = useState('dashboard');

    // Common content for all tabs
    const blogPosts = [
        {
            name: "2024 Kia Forte LXS 4dr Sedan",
            heading: "Sport cars",
            image: require("../../images/blackcar.png"),
            price: "839",
            lease: "39 months",
            mile: "8000",
            seat: "4",
            discount: "-40%",
        },
        {
            name: "Mercedes-AMG GT Coupé",
            heading: "Sport cars",
            image: require("../../images/cardwhite.png"),
            price: "1239",
            lease: "39 months",
            mile: "8000",
            seat: "4",
            discount: "-40%",
        },
        {
            name: "BMW M8 Competition",
            heading: "Sport cars",
            image: require("../../images/card3.png"),
            price: "1239",
            lease: "39 months",
            mile: "8000",
            seat: "4",
            discount: "-40%",
        },
        {
            name: "2024 Kia Forte LXS 4dr Sedan",
            heading: "Sport cars",
            image: require("../../images/blackcar.png"),
            price: "839",
            lease: "39 months",
            mile: "8000",
            seat: "4",
            discount: "-40%",
        },
        {
            name: "2024 Kia Forte LXS 4dr Sedan",
            heading: "Sport cars",
            image: require("../../images/blackcar.png"),
            price: "839",
            lease: "39 months",
            mile: "8000",
            seat: "4",
            discount: "-40%",
        },
        {
            name: "Mercedes-AMG GT Coupé",
            heading: "Sport cars",
            image: require("../../images/cardwhite.png"),
            price: "1239",
            lease: "39 months",
            mile: "8000",
            seat: "4",
            discount: "-40%",
        },
        {
            name: "BMW M8 Competition",
            heading: "Sport cars",
            image: require("../../images/card3.png"),
            price: "1239",
            lease: "39 months",
            mile: "8000",
            seat: "4",
            discount: "-40%",
        },
        {
            name: "2024 Kia Forte LXS 4dr Sedan",
            heading: "Sport cars",
            image: require("../../images/blackcar.png"),
            price: "839",
            lease: "39 months",
            mile: "8000",
            seat: "4",
            discount: "-40%",
        },
        {
            name: "2024 Kia Forte LXS 4dr Sedan",
            heading: "Sport cars",
            image: require("../../images/blackcar.png"),
            price: "839",
            lease: "39 months",
            mile: "8000",
            seat: "4",
            discount: "-40%",
        },
    ]; // Placeholder for card data



    return (
        <>
            <div className="mt-20 " style={{maxWidth: "100vw", overflow: "hidden"}}>
                <div className="lg:text-[45px] text-[35px] font-[700]">
                    Current Special Lease Deals
                </div>
                <div className="text-[14px] font-[500] text-[#959595] my-5">
                    Explore our current special lease offers and discover how easy it is to drive a new car:
                </div>
                <div className="mb-4">
                    <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" role="tablist">
                        <li className="me-2" role="presentation">
                            <button
                                className={`text-[14px] lg:mt-0 mt-2 h-[48px] flex justify-center items-center px-4 rounded-[43px] ${activeTab === 'dashboard' ? 'bg-black text-white border-black ' : 'bg-[#F8F8F8] text-black border-transparent'}`}
                                onClick={() => setActiveTab('dashboard')}
                                role="tab"
                                aria-controls="dashboard"
                                aria-selected={activeTab === 'dashboard'}
                            >
                                Luxury&nbsp;Sedans
                                {/* Company&nbsp;Updates */}
                            </button>
                        </li>
                        <li className="me-2" role="presentation">
                            <button
                                className={`text-[14px] lg:mt-0 mt-2 h-[48px] flex justify-center items-center px-4 rounded-[43px] ${activeTab === 'settings' ? 'bg-black text-white border-black ' : 'bg-[#F8F8F8] text-black border-transparent'}`}
                                onClick={() => setActiveTab('settings')}
                                role="tab"
                                aria-controls="settings"
                                aria-selected={activeTab === 'settings'}
                            >
                                Family-Friendly&nbsp;SUVs
                            </button>
                        </li>
                        <li className="me-2" role="presentation">
                            <button
                                className={`text-[14px] lg:mt-0 mt-2 h-[48px] flex justify-center items-center px-4 rounded-[43px] ${activeTab === 'contacts' ? 'bg-black text-white border-black ' : 'bg-[#F8F8F8] text-black border-transparent'}`}
                                onClick={() => setActiveTab('contacts')}
                                role="tab"
                                aria-controls="contacts"
                                aria-selected={activeTab === 'contacts'}
                            >
                                Performance&nbsp;Sports
                            </button>
                        </li>

                    </ul>
                </div>
                <div id="default-tab-content">
                    <div className={`${activeTab === 'profile' ? '' : 'hidden'}`} id="profile" role="tabpanel" aria-labelledby="profile-tab">
                        <RenderContent blogPosts={blogPosts} />
                    </div>
                    <div className={` ${activeTab === 'dashboard' ? '' : 'hidden'}`} id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
                        <RenderContent blogPosts={blogPosts} />
                    </div>
                    <div className={` rounded-lg ${activeTab === 'settings' ? '' : 'hidden'}`} id="settings" role="tabpanel" aria-labelledby="settings-tab">
                        <RenderContent blogPosts={blogPosts} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Tabs;
