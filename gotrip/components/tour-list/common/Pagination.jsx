'use client'

import { useState } from "react";

const Pagination = ({ totalPages = 20 }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageClick = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const handlePrevClick = () => handlePageClick(currentPage - 1);
  const handleNextClick = () => handlePageClick(currentPage + 1);

  const renderPage = (pageNumber, isActive = false) => (
    <div key={pageNumber} className="col-auto">
      <button
        className={`size-40 flex-center rounded-full cursor-pointer ${
          isActive ? "bg-dark-1 text-white" : "bg-light"
        }`}
        onClick={() => handlePageClick(pageNumber)}
        aria-current={isActive ? "page" : undefined}
      >
        {pageNumber}
      </button>
    </div>
  );

  const renderPages = () => {
    const pages = [];
    const visiblePages = 5;

    if (totalPages <= visiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(renderPage(i, i === currentPage));
      }
    } else {
      if (currentPage > 3) {
        pages.push(renderPage(1));
        if (currentPage > 4) pages.push(<div key="ellipsis1">...</div>);
      }

      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);
      for (let i = start; i <= end; i++) {
        pages.push(renderPage(i, i === currentPage));
      }

      if (currentPage < totalPages - 2) {
        pages.push(<div key="ellipsis2">...</div>);
        pages.push(renderPage(totalPages));
      }
    }
    return pages;
  };

  return (
    <div className="border-top-light mt-30 pt-30">
      <div className="row x-gap-10 y-gap-20 justify-between md:justify-center">
        <div className="col-auto md:order-1">
          <button
            className="button -blue-1 size-40 rounded-full border-light"
            onClick={handlePrevClick}
            disabled={currentPage === 1}
            aria-label="Previous page"
          >
            <i className="icon-chevron-left text-12" />
          </button>
        </div>

        <div className="col-md-auto md:order-3">
          <div className="row x-gap-20 y-gap-20 items-center md:d-none">
            {renderPages()}
          </div>

          <div className="text-center mt-30 md:mt-10">
            <div className="text-14 text-light-1">
              Showing {currentPage * 20 - 19} – {Math.min(currentPage * 20, 300)} of 300+ properties
            </div>
          </div>
        </div>

        <div className="col-auto md:order-2">
          <button
            className="button -blue-1 size-40 rounded-full border-light"
            onClick={handleNextClick}
            disabled={currentPage === totalPages}
            aria-label="Next page"
          >
            <i className="icon-chevron-right text-12" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
