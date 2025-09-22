import React from "react";

const Pagination = ({ page, setPage, totalPages }) => {
  return (
    <div className="flex justify-center items-center gap-4 bg-[#F6F7F8] shadow">
      {Array.from({ length: totalPages }).map((_, i) => {
        const num = i + 1;
        return (
          <button
            key={`page-${num}`}
            onClick={() => setPage(num)}
            className={`w-[69.41px] h-[68.56px] text-[#22262A] font-medium hover:bg-[#40BFFF] hover:text-white transition ${page === num ? "bg-[#40BFFF] text-white" : ""}`}
          >
            {num}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
