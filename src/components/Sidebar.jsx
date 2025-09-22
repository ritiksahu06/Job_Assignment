import React, { useState } from "react";
import FilterPanel from "./FilterPanel";

const Sidebar = ({
  maxPrice = 500,
  onPriceChange = () => {},
  selectedBrands = [],
  toggleBrand = () => {},
  selectedColors = [],
  toggleColor = () => {},
  selectedHotDeals = [],
  toggleHotDeal = () => {},
}) => {
  const [expanded] = useState({
    hotDeals: false,
    brands: false,
    colors: false,
  });

  const hotDealsItems = ["Nike", "Adidas", "Vans", "Converse", "New Balance","Asics","Jordan"];
  const brandItems = ["Nike", "Adidas", "Converse", "Vans"];
  const colorItems = ["blue", "red", "black", "yellow", "#FF00B4", "#EFDFDF"];

  return (
    <aside className=" mt-[65px] flex flex-col w-full lg:w-[355px] bg-white p-4 gap-6">
      {/* Hot Deals */}
      <FilterPanel
        title="Hot Deals"
        items={hotDealsItems}
        selectedItems={selectedHotDeals}
        toggleItem={toggleHotDeal}
        expanded={expanded.hotDeals}
        outerHeight={548.57}
        innerHeight={405.14}
      />

      {/* Price Slider */}
      <div className="bg-[#F6F7F8] border h-[190px] border-gray-200 rounded p-4">
        <h3 className="text-lg font-semibold mb-3">Prices</h3>
        <input
          type="range"
          min="0"
          max={10000}
          value={maxPrice}
          onChange={(e) => onPriceChange(Number(e.target.value))}
          className="w-full"
        />
        <div className="flex justify-between text-sm mt-2 text-gray-600">
          <span>$0</span>
          <span>${maxPrice}</span>
        </div>
      </div>

      {/* Color Filter */}
      <FilterPanel
        title="Color"
        items={colorItems}
        selectedItems={selectedColors}
        toggleItem={toggleColor}
        isColor
        expanded={expanded.colors}
        innerHeight={30.49}
        outerHeight={144.22}
      />

      {/* Brand Filter */}
      <FilterPanel
        title="Brand"
        items={brandItems}
        selectedItems={selectedBrands}
        toggleItem={toggleBrand}
        expanded={expanded.brands}
        innerHeight={183.12}
        outerHeight={303.15}
      />

      {/* More Button */}
      <div className="bg-[#F6F7F8] border border-gray-200 rounded p-4">
        <button className="w-full text-[#262626] font-semibold py-2 rounded-lg hover:text-blue-500 transition">
          MORE
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;

