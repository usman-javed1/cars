import React, { useState } from 'react';
import MainBlog from '../MainBlog/MainBlog';
import BlogMainPart from '../BlogMainPart/BlogMainPart';

const Blogstab = () => {
  // State to manage the active tab
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <>
      <div className="">
        <div className="mb-4">
          <ul className="flex overflow-auto -mb-px text-sm font-medium text-center" role="tablist">
            <li className="me-2" role="presentation">
              <button
                className={`inline-block p-4 border-b-2 w-[49px] h-[48px] ${activeTab === 'profile' ? 'bg-black text-white rounded-[43px]  border-black ' : 'bg-[#F8F8F8] text-black border-transparent rounded-[43px]'}`}
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
                className={`text-[14px] h-[48px]  flex justify-center items-center px-4 rounded-[43px]  ${activeTab === 'dashboard' ? 'bg-black text-white border-black  ' : 'bg-[#F8F8F8] text-black border-transparent'}`}
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
                className={` text-[14px] h-[48px]  flex justify-center items-center px-4 rounded-[43px] ${activeTab === 'settings' ? 'bg-black text-white border-black rounded-[8px]' : 'bg-[#F8F8F8] text-black border-transparent rounded-[8px]'}`}
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
                className={`text-[14px] h-[48px]  flex justify-center items-center px-4 rounded-[43px] ${activeTab === 'contacts' ? 'bg-black text-white border-black rounded-[8px]' : 'bg-[#F8F8F8] text-black border-transparent '}`}
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
                className={`text-[14px] h-[48px]  flex justify-center items-center px-4 rounded-[43px] ${activeTab === 'tips' ? 'bg-black text-white border-black rounded-[8px]' : 'bg-[#F8F8F8] text-black border-transparent rounded-[8px]'}`}
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
                className={`text-[14px] h-[48px]  flex justify-center items-center px-4 rounded-[43px] ${activeTab === 'insights' ? 'bg-black text-white border-black rounded-[8px]' : 'bg-[#F8F8F8] text-black border-transparent rounded-[8px]'}`}
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
                className={`text-[14px] h-[48px]  flex justify-center items-center px-4 rounded-[43px] ${activeTab === 'financialTips' ? 'bg-black text-white border-black rounded-[8px]' : 'bg-[#F8F8F8] text-black border-transparent rounded-[8px]'}`}
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
          <div
            className={`pt-[20px] ${activeTab === 'profile' ? '' : 'hidden'}`}
            id="profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            <MainBlog />
            <BlogMainPart />
          </div>
          <div
            className={`p-4 ${activeTab === 'dashboard' ? '' : 'hidden'}`}
            id="dashboard"
            role="tabpanel"
            aria-labelledby="dashboard-tab"
          >
            <MainBlog />
          </div>
          <div
            className={`p-4 rounded-lg bg-gray-50 dark:bg-gray-800 ${activeTab === 'settings' ? '' : 'hidden'}`}
            id="settings"
            role="tabpanel"
            aria-labelledby="settings-tab"
          >
            <p className="text-sm text-gray-500 dark:text-gray-400">
              This is some placeholder content for the{' '}
              <strong className="font-medium text-gray-800 dark:text-white">Settings tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next.
            </p>
          </div>
          <div
            className={`p-4 rounded-lg bg-gray-50 dark:bg-gray-800 ${activeTab === 'contacts' ? '' : 'hidden'}`}
            id="contacts"
            role="tabpanel"
            aria-labelledby="contacts-tab"
          >
            <p className="text-sm text-gray-500 dark:text-gray-400">
              This is some placeholder content for the{' '}
              <strong className="font-medium text-gray-800 dark:text-white">Contacts tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blogstab;
