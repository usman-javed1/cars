import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../main/Features/icon/icon';

const Pagination = ({ totalPages = 10, currentPage = 1 }) => {
  const [active, setActive] = useState({
    left: currentPage === 1 ? "#959595" : "#0E0E0E",
    right: currentPage === totalPages ? "#959595" : "#0E0E0E",
  });

  const renderButtons = () => {
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i}
          type="button"
          className={`w-[32px] h-[32px] rounded-full ${currentPage === i + 1 ? 'bg-black text-white' : 'bg-lightgray text-black hover:bg-black hover:text-white'} flex justify-center items-center transition-all duration-300`}
        >
          {i + 1}
        </button>
      ));
    } else {
      return (
        <>
          <button
            type="button"
            className={`w-[32px] h-[32px] rounded-full ${currentPage === 1 ? 'bg-black text-white' : 'bg-lightgray text-black hover:bg-black hover:text-white'} flex justify-center items-center transition-all duration-300`}
          >
            1
          </button>
          {currentPage > 3 && <span>...</span>}
          {Array.from({ length: Math.min(4, totalPages - 2) }, (_, i) => {
            const page = i + 2;
            return (
              <button
                key={page}
                type="button"
                className={`w-[32px] h-[32px] rounded-full ${currentPage === page ? 'bg-black text-white' : 'bg-lightgray text-black hover:bg-black hover:text-white'} flex justify-center items-center transition-all duration-300`}
              >
                {page}
              </button>
            );
          })}
          {currentPage < totalPages - 2 && <span>...</span>}
          <button
            type="button"
            className={`w-[32px] h-[32px] rounded-full ${currentPage === totalPages ? 'bg-black text-white' : 'bg-lightgray text-black hover:bg-black hover:text-white'} flex justify-center items-center transition-all duration-300`}
          >
            {totalPages}
          </button>
        </>
      );
    }
  };

  return (
    <div className="mt-[5%] gap-3 flex items-center justify-center">
      {/* Left Icon */}
      <motion.div
        className="bg-lightgray w-[32px] h-[32px] flex justify-center items-center rounded-full featureLeftIcon transition-all duration-300"
        onHoverStart={() => {
          setActive({ left: "#fff", right: active.right });
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

      {/* Right Icon */}
      <motion.div
        className="bg-lightgray w-[32px] h-[32px] flex justify-center items-center rounded-full featureLeftIcon transition-all duration-300"
        onHoverStart={() => {
          setActive({ left: active.left, right: "#fff" });
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
}

export default Pagination;
