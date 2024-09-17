import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../main/Features/icon/icon';

const Pagination = ({ totalPages = 10, currentPage = 1, setPage }) => {
  const [active, setActive] = useState({
    left: currentPage === 1 ? "#959595" : "#0E0E0E",
    right: currentPage === totalPages ? "#959595" : "#0E0E0E",
  });

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setPage(page);
    }
  };

  const renderButtons = () => {
    const visiblePages = [];

    if (totalPages <= 4) {
      // Case for total pages <= 4: show all pages
      for (let i = 1; i <= totalPages; i++) {
        visiblePages.push(i);
      }
    } else {
      // Always show the first page
      visiblePages.push(1);

      // Display pages close to the beginning
      if (currentPage <= 2) {
        visiblePages.push(2, 3);
        if (currentPage < totalPages - 1) {
          visiblePages.push('...');
        }
        visiblePages.push(totalPages);
      } 
      // Display pages close to the end
      else if (currentPage >= totalPages - 1) {
        visiblePages.push('...');
        visiblePages.push(totalPages - 2, totalPages - 1, totalPages);
      } 
      // Display pages in the middle
      else {
        if (currentPage > 3) {
          visiblePages.push('...');
        }
        visiblePages.push(currentPage - 1, currentPage, currentPage + 1);
        if (currentPage < totalPages - 2) {
          visiblePages.push('...');
        }
        visiblePages.push(totalPages);
      }
    }

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
    <div className="mt-[5%]  overflow-hidden gap-3 flex items-center justify-center">
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
  );
};

export default Pagination;
