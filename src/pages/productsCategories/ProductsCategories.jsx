import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Products from "../hero/products/Products";

const ProductsCategories = () => {
    const { name } = useParams();
    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
          const response = await fetch(`https://fakestoreapi.com/products/category/${name}`);
          const data = await response.json();
          console.log(data);
          setProducts(data);
        }
        fetchProducts()
      }, [name])


      if (products.length === 0 ) return <div>Loading...</div>
  return (
    <Products products={products} />
  )
}

export default ProductsCategories