import React, { useState, useEffect } from "react";
import FeatureCard from "../pages/hero/featureCard/FeatureCard";

const Categories = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
      const fetchCategories = async () => {
        const response = await fetch('https://fakestoreapi.com/products/categories');
        const data = await response.json();
        console.log(data);
        setCategories(data);
      }
      fetchCategories()
    }, [])

    if(categories.length === 0) {
      return(
        <div className="text-center text-4xl justify-center w-full h-full">Loading...</div>
      )
    }

  return (
    <>
    <FeatureCard cards={categories} />
    </>
  )
}

export default Categories