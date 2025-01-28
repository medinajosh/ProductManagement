import React from "react";

const ProductItem = ({ name, price, inStock }) => {
  return (
    <div className="p-5 border border-gray-700 rounded-lg shadow-sm bg-gray-800 hover:shadow-md transition-shadow duration-200">
      <h3 className="text-xl font-bold text-gray-100">{name}</h3>
      <p className="text-gray-400 text-sm">Price: ₱{price.toFixed(2)}</p>
      <span
        className={`inline-block px-3 py-1 text-sm font-medium rounded-full mt-3 ${
          inStock ? "bg-green-600 text-green-100" : "bg-red-600 text-red-100"
        }`}
      >
        {inStock ? "In Stock" : "Out of Stock"}
      </span>
    </div>
  );
};

export default ProductItem;
