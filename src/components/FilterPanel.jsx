

import React from "react";

const FilterPanel = ({
  title,
  items,
  selectedItems = [],
  toggleItem = () => {},
  isColor = false,
  expanded = false,
  outerHeight, 
  innerHeight, 
}) => {
  const showCount = expanded ? items.length : Math.min(7, items.length);
  const displayItems = items.slice(0, showCount);

  // Calculate dynamic gap for vertical distribution
  const itemGap = !isColor && innerHeight
    ? (innerHeight - displayItems.length * 24) / (displayItems.length - 1) // 24px = approx item height
    : 8; // default gap

  return (
    <div
      className="bg-[#F6F7F8] border border-gray-200 rounded transition-all duration-300 flex flex-col"
      style={{ height: outerHeight ? `${outerHeight}px` : "auto" }}
    >
      {/* Header */}
      <div
        className="p-4  cursor-pointer"
      >
        <h3 className="font-poppins font-medium text-[20px] text-[#223263]">
          {title}
        </h3>
      </div>

      {/* Body */}
      <div className="p-4 flex-1">
        <div
          className={
            isColor
              ? "flex gap-3 flex-wrap overflow-y-auto"
              : "flex flex-col text-gray-700"
          }
          style={{
            height: innerHeight ? `${innerHeight}px` : "auto",
            justifyContent: !isColor ? "space-between" : undefined,
          }}
        >
          {displayItems.map((item) => {
            const selected = selectedItems.includes(item);
            if (isColor) {
              return (
                <button
                  key={item}
                  onClick={() => toggleItem(item)}
                  aria-pressed={selected}
                  className={`w-6 h-6 rounded-full border cursor-pointer ${
                    selected ? "ring-2 ring-offset-1 ring-[#40BFFF]" : ""
                  }`}
                  style={{ backgroundColor: item }}
                  title={item}
                />
              );
            } else {
              return (
                <div
                  key={item}
                  onClick={() => toggleItem(item)}
                  className={`hover:text-blue-500 cursor-pointer font-normal ${
                    selected ? "text-[#40BFFF] font-medium" : ""
                  }`}
                  style={{ marginBottom: displayItems.indexOf(item) !== displayItems.length - 1 ? `${itemGap}px` : 0 }}
                >
                  {item}
                </div>
              );
            }
          })}
        </div>

      </div>
    </div>
  );
};

export default FilterPanel;


