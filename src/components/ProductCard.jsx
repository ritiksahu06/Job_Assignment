import React from 'react'
import Rating from "./Rating";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-[#F6F7F8] shadow rounded flex flex-col h-[420px] w-[335.2px] items-center relative">
      {product.isHot && (
        <span className="bg-red-500 text-white text-xs px-2 py-1 absolute top-0 left-0">
          HOT
        </span>
      )}

      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-[276px] object-cover "
      />

      <h3 className="font-poppins font-medium text-lg mt-4 text-center text-[#223263]">
        {product.name}
      </h3>

      {/* Rating */}
      <Rating value={Number(product.ratingValue)} />

      {/* Price */}
      <div className="flex items-center mt-2 gap-2">
        <span className="text-[#40BFFF] font-bold text-lg">
          ₹{product.discountPrice}
        </span>
        {product.discountPercent > 0 && (
          <>
            <span className="text-[#9098B1] line-through">₹{product.price}</span>
            <span className="text-[#FB7181] font-medium text-sm">
              {product.discountPercent}% off
            </span>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
