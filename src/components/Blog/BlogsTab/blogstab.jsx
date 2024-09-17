import React, { useState } from 'react';
import MainBlog from '../MainBlog/MainBlog';
import BlogMainPart from '../BlogMainPart/BlogMainPart';
import Pagination from '../Pagination/Pagination';


const RenderContent = ({ blogs }) => {
  const [page, setPage] = useState(1);
  return (


    <>
      <MainBlog />
      <BlogMainPart />
      <Pagination currentPage={page} setPage={setPage} />
    </>
  )
};

const Blogstab = () => {
  // State to manage the active tab
  const [activeTab, setActiveTab] = useState('profile');

  // Common content for all tabs
  

  return (
    <>
      <div className="">
        <div className="mb-4">
          <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" role="tablist">
            <li className="me-2" role="presentation">
              <button
                className={`inline-block lg:mt-0 mt-2 p-4 border-b-2 w-[49px] h-[48px] ${activeTab === 'profile' ? 'bg-black text-white rounded-[43px] border-black ' : 'bg-[#F8F8F8] text-black border-transparent rounded-[43px]'}`}
                onClick={() => setActiveTab('profile')}
                role="tab"
                aria-controls="profile"
                aria-selected={activeTab === 'profile'}
              >
                All
              </button>
            </li>
            <li className="me-2" role="presentation">
              <button
                className={`text-[14px] lg:mt-0 mt-2 h-[48px] flex justify-center items-center px-4 rounded-[43px] ${activeTab === 'dashboard' ? 'bg-black text-white border-black ' : 'bg-[#F8F8F8] text-black border-transparent'}`}
                onClick={() => setActiveTab('dashboard')}
                role="tab"
                aria-controls="dashboard"
                aria-selected={activeTab === 'dashboard'}
              >
                Company&nbsp;Updates
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
                New&nbsp;Models&nbsp;and&nbsp;Offers
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
                Customer&nbsp;Stories
              </button>
            </li>
            <li className="me-2" role="presentation">
              <button
                className={`text-[14px] lg:mt-0 mt-2 h-[48px] flex justify-center items-center px-4 rounded-[43px] ${activeTab === 'tips' ? 'bg-black text-white border-black ' : 'bg-[#F8F8F8] text-black border-transparent'}`}
                onClick={() => setActiveTab('tips')}
                role="tab"
                aria-controls="tips"
                aria-selected={activeTab === 'tips'}
              >
                Tips&nbsp;and&nbsp;Advice
              </button>
            </li>
            <li className="me-2" role="presentation">
              <button
                className={`text-[14px] lg:mt-0 mt-2 h-[48px] flex justify-center items-center px-4 rounded-[43px] ${activeTab === 'insights' ? 'bg-black text-white border-black ' : 'bg-[#F8F8F8] text-black border-transparent'}`}
                onClick={() => setActiveTab('insights')}
                role="tab"
                aria-controls="insights"
                aria-selected={activeTab === 'insights'}
              >
                Insights
              </button>
            </li>
            <li className="me-2" role="presentation">
              <button
                className={`text-[14px] lg:mt-0 mt-2 h-[48px] flex justify-center items-center px-4 rounded-[43px] ${activeTab === 'financialTips' ? 'bg-black text-white border-black ' : 'bg-[#F8F8F8] text-black border-transparent'}`}
                onClick={() => setActiveTab('financialTips')}
                role="tab"
                aria-controls="financialTips"
                aria-selected={activeTab === 'financialTips'}
              >
                Financial&nbsp;Tips
              </button>
            </li>
          </ul>
        </div>
        <div id="default-tab-content">
          <div className={`pt-[20px] ${activeTab === 'profile' ? '' : 'hidden'}`} id="profile" role="tabpanel" aria-labelledby="profile-tab">
            <RenderContent />
          </div>
          <div className={`pt-[20px] ${activeTab === 'dashboard' ? '' : 'hidden'}`} id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
          <RenderContent />
          </div>
          <div className={`pt-[20px] rounded-lg ${activeTab === 'settings' ? '' : 'hidden'}`} id="settings" role="tabpanel" aria-labelledby="settings-tab">
          <RenderContent />
          </div>
          <div className={`pt-[20px] rounded-lg ${activeTab === 'contacts' ? '' : 'hidden'}`} id="contacts" role="tabpanel" aria-labelledby="contacts-tab">
          <RenderContent />
          </div>
          <div className={`pt-[20px] rounded-lg ${activeTab === 'tips' ? '' : 'hidden'}`} id="tips" role="tabpanel" aria-labelledby="tips-tab">
          <RenderContent />
          </div>
          <div className={`pt-[20px] rounded-lg ${activeTab === 'insights' ? '' : 'hidden'}`} id="insights" role="tabpanel" aria-labelledby="insights-tab">
          <RenderContent />
          </div>
          <div className={`pt-[20px] rounded-lg ${activeTab === 'financialTips' ? '' : 'hidden'}`} id="financialTips" role="tabpanel" aria-labelledby="financialTips-tab">
          <RenderContent />
          </div>
        </div>
      </div>
    </>
  );
}

export default Blogstab;
