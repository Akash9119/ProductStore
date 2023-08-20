import React, { useEffect, useState } from "react";
import Products from "../hero/products/Products";
import Categories from "../../components/Categories";

const ProductsPage = () => {
  const [products, setProducts] = useState([]); // Change 'product' to 'products'

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (response.ok) {
          const data = await response.json();
          console.log(data,"products page");
          setProducts(data); // Change 'product' to 'products'
        } else {
          console.error('Failed to fetch products');
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <h2 className="text-5xl font-bold text-center mt-20">All Categories</h2>
      <Categories />
      <h2 className="text-5xl font-bold text-center mt-20 ">All Products</h2>
      {products.length > 0 ? (
        <Products products={products} /> // Pass 'products' as a prop
      ) : (
        <div className="text-6xl text-center font-bold h-full w-full justify-center">Loading...</div>
      )}
    </>
  );
};

export default ProductsPage;
