import React, { useState } from "react";
import ProductItem from "./ProductItem";

const ProductManager = ({ products, onAddProduct }) => {
  const [showInStock, setShowInStock] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    inStock: true,
  });

  const toggleFilter = () => setShowInStock(!showInStock);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewProduct({
      ...newProduct,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (newProduct.name && newProduct.price) {
      onAddProduct({
        id: products.length + 1,
        name: newProduct.name,
        price: parseFloat(newProduct.price),
        inStock: newProduct.inStock,
      });
      setNewProduct({ name: "", price: "", inStock: true });
    }
  };

  const filteredProducts = showInStock
    ? products.filter((product) => product.inStock)
    : products;

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-800 text-gray-100 shadow-lg rounded-lg">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Product Manager</h2>
        <button
          onClick={toggleFilter}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          {showInStock ? "Show All" : "Show In Stock"}
        </button>
      </div>

      <div className="grid gap-4 mb-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductItem key={product.id} {...product} />
          ))
        ) : (
          <p className="text-gray-400">No products available.</p>
        )}
      </div>

      <form onSubmit={handleFormSubmit} className="bg-gray-800 p-4 rounded space-y-4">
        <h3 className="text-lg font-semibold">Add New Product</h3>
        <div>
          <label className="block text-sm font-medium text-gray-300">Product Name</label>
          <input
            type="text"
            name="name"
            value={newProduct.name}
            onChange={handleInputChange}
            placeholder="Enter product name"
            className="border border-gray-700 rounded p-2 w-full bg-gray-700 text-gray-100"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300">Product Price</label>
          <input
            type="number"
            name="price"
            value={newProduct.price}
            onChange={handleInputChange}
            placeholder="Enter product price"
            className="border border-gray-700 rounded p-2 w-full bg-gray-700 text-gray-100"
            required
          />
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            name="inStock"
            checked={newProduct.inStock}
            onChange={handleInputChange}
            className="h-4 w-4 text-blue-600 border-gray-600 rounded bg-gray-700"
          />
          <label className="ml-2 text-sm text-gray-300">In Stock</label>
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default ProductManager;
