import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../main/Features/icon/icon';

const Pagination = ({ totalPages = 10, currentPage = 1, setPage }) => {
  const [active, setActive] = useState({
    left: currentPage === 1 ? "#959595" : "#0E0E0E",
    right: currentPage === totalPages ? "#959595" : "#0E0E0E",
  });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust this width according to your mobile breakpoint
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setPage(page);
    }
  };

  const renderButtons = () => {
    const visiblePages = [];
  
    // Always push the first page
    visiblePages.push(1);
  
    // Check if we should add the ellipsis and the middle pages
    if (currentPage > 4) {
      visiblePages.push('...');
    }
  
    // Add the current page and its neighbors (if applicable)
    if (currentPage > 1 && currentPage < totalPages) {
      visiblePages.push(currentPage);
    }
  
    if (currentPage < totalPages - 1 && currentPage > 1) {
      visiblePages.push(currentPage + 1);
    } else if (currentPage === 1 && totalPages > 3) {
      visiblePages.push(2);
      visiblePages.push(3);
    }
  
    // Add the ellipsis before the last page if needed
    if (currentPage < totalPages - 3) {
      // visiblePages.push('...');
    }
  
    // Always push the last page
    if (totalPages > 1) {
      visiblePages.push(totalPages);
    }
  
    // Render the visible pages
    return visiblePages.map((page, index) => {
      if (page === '...') {
        return (
          <span key={`ellipsis-${index}`} className="mx-2">...</span>
        );
      }
  
      return (
        <button
          key={page}
          type="button"
          onClick={() => handlePageChange(page)}
          className={`w-[32px] h-[32px] rounded-full ${currentPage === page ? 'bg-black text-white' : 'bg-lightgray text-black hover:bg-black hover:text-white'} flex justify-center items-center transition-all duration-300`}
        >
          {page}
        </button>
      );
    });
  };
  
  return (
    <div className="mt-[5%] w-full flex justify-center">
      <div className=" gap-3 flex items-center justify-start lg:ml-0 -ml-5">
        {/* Left Icon (Previous Page) */}
        <motion.div
          className={`bg-lightgray w-[32px] h-[32px] flex justify-center items-center rounded-full featureLeftIcon transition-all duration-300 ${currentPage === 1 ? 'cursor-not-allowed' : 'cursor-pointer'}`}
          onClick={() => handlePageChange(currentPage - 1)}
          onHoverStart={() => {
            setActive({ left: currentPage === 1 ? "#959595" : "#fff", right: active.right });
          }}
          onHoverEnd={() => {
            setActive({ left: currentPage === 1 ? "#959595" : "#0E0E0E", right: active.right });
          }}
        >
          <div className="featureLeftIconInner transition-all duration-200">
            <Icon color={active.left} />
          </div>
          <div className="featureLeftLine transition-all duration-200 absolute"></div>
        </motion.div>

        {renderButtons()}

        {/* Right Icon (Next Page) */}
        <motion.div
          className={`bg-lightgray w-[32px] h-[32px] flex justify-center items-center rounded-full featureLeftIcon transition-all duration-300 ${currentPage === totalPages ? 'cursor-not-allowed' : 'cursor-pointer'}`}
          onClick={() => handlePageChange(currentPage + 1)}
          onHoverStart={() => {
            setActive({ left: active.left, right: currentPage === totalPages ? "#959595" : "#fff" });
          }}
          onMouseLeave={() => {
            setActive({ left: active.left, right: currentPage === totalPages ? "#959595" : "#0E0E0E" });
          }}
        >
          <div className="rotate-180 transition-all duration-200 featureRightInner">
            <Icon color={active.right} />
          </div>
          <div className="featureLeftLine transition-all duration-200 absolute"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default Pagination;
