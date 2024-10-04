import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumb = ({ crumbs = [{label: "Home", url: "/"}, {label: "Blog", url: "/blog"}], activeCrumb = "Blog", isOnImage = false, isCar=false }) => {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="py-[60px] inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        {crumbs.map((crumb, index) => (
          <li key={index} className="inline-flex items-center">
            {index !== 0 && (
              <div className={`flex items-center ${isCar?"lg:px-[10px] px-[5px]":"px-[10px]"}`}>
                <svg
                  width="6"
                  height="10"
                  viewBox="0 0 6 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.78112 5.00047L0.481262 1.70062L1.42408 0.757812L5.66672 5.00047L1.42408 9.24306L0.481262 8.30027L3.78112 5.00047Z"
                    fill={isOnImage ? "#A0A0A0" : "#0E0E0E"} // Use actual color codes
                  />
                </svg>
              </div>
            )}

            {crumb.label === activeCrumb ? (
              <Link to={crumb.url}>
                <span className={`ms-1 ${isCar?"lg:text-sm text-[12px]":"text-sm"} font-medium ${"text-gray-500"} md:ms-2`}>
                  {crumb.label}
                </span>
              </Link>
            ) : (
              <Link
                to={crumb.url}
                className={`inline-flex items-center ${isCar?"lg:text-sm text-[12px]":"text-sm"} font-medium ${isOnImage ? "text-white" : "text-black"}`}
              >
                {crumb.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
