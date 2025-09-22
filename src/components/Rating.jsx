import React from "react";
const RatingStars = ({ value = 0, size = "sm" }) => {
  const clampedValue = Math.max(0, Math.min(5, value));
  const filledStars = Math.round(clampedValue);

  const sizeConfig = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-7 h-7",
  };
  const starSize = sizeConfig[size] || sizeConfig.sm;

  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <img
          key={i}
          src={i < filledStars ? "/assets/frontend_assets/star.png" : "/assets/frontend_assets/star2.png"}
          alt={i < filledStars ? "Filled Star" : "Empty Star"}
          className={`${starSize} object-contain`}
        />
      ))}
    </div>
  );
};

export default RatingStars;
