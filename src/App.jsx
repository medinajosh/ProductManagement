import React, { useState } from "react";
import ProductManager from "./ProductManager";

const App = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Classic Burger", price: 99.99, inStock: true },
    { id: 2, name: "Fries Supreme", price: 49.99, inStock: false },
    { id: 3, name: "Chocolate Shake", price: 79.99, inStock: true },
  ]);

  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  return (
    <div className="p-4 bg-gray-900 text-gray-100 min-h-screen">
      <h1 className="text-4xl mb-6 font-bold text-center">Product Manager</h1>
      <ProductManager products={products} onAddProduct={addProduct} />
    </div>
  );
};

export default App;
