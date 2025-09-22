import React from "react";

const Toolbar = ({ totalCount, search, setSearch, sortBy, setSortBy, show, setShow, view, setView }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center bg-[#F6F7F8] rounded shadow gap-4 md:gap-0">
      {/* Left Section: Search + Sort + Show */}
      <div className="flex flex-wrap items-center gap-4 md:gap-6">
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search products..."
          aria-label="Search products"
          className="border border-gray-300 rounded px-3 py-1 text-sm focus:outline-none"
        />
        <p className="font-proxima font-normal text-[16px] text-[#22262A]">{totalCount} Items found</p>

        <div className="flex items-center gap-2">
          <label className="font-proxima font-normal text-[16px] text-[#22262A]">Sort By:</label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none"
          >
            <option value="Name">Name</option>
            <option value="Price">Price</option>
            <option value="Rating">Rating</option>
            <option value="Newest">Newest</option>
          </select>
        </div>

        <div className="flex items-center gap-2">
          <label className="font-proxima font-normal text-[16px] text-[#22262A]">Show:</label>
          <select
            value={show}
            onChange={(e) => setShow(Number(e.target.value))}
            className="border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none"
          >
            <option value={6}>6</option>
            <option value={12}>12</option>
            <option value={24}>24</option>
          </select>
        </div>
      </div>

      {/* Right Section: View Toggle */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => setView("grid")}
          aria-label="Grid view"
          className={`p-1 rounded ${view === "grid" ? "bg-[#40BFFF] text-white" : ""}`}
        >
          <img src="/assets/switch-1.png" alt="Grid View" className="w-[61.47px] h-[62.57px]" />
        </button>
        <button
          onClick={() => setView("list")}
          aria-label="List view"
          className={`p-1 rounded ${view === "list" ? "bg-[#40BFFF] text-white" : ""}`}
        >
          <img src="/assets/switch-2.png" alt="List View" className="w-[61.47px] h-[62.57px]" />
        </button>
      </div>
    </div>
  );
};

export default Toolbar;
