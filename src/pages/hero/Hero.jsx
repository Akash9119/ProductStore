import React,{ useEffect, useState } from "react"
import Home from "./home/Home"
import Products from "./products/Products"
import FearureCard from "./featureCard/FearureCard"
import StatsCard from "./stastsCard/StatsCard"

const Hero = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
      const fetchProducts = async () => {
        const response = await fetch('https://fakestoreapi.com/products?limit=18');
        const data = await response.json();
        console.log(data);
        setProducts(data);
      }
      fetchProducts()
    }, [])

  return (
    <div className="mx-5">
    <Home />
    <h2 className="text-5xl font-bold text-center mt-20">Our Products</h2>
    {products.length >0 ? <Products products={products}/>: <div> Loading...</div>}
    <Products />
    <h2 className="text-5xl font-bold text-center mt-10">Our Featured Products</h2>
    <FearureCard />
    <h2 className="text-5xl font-bold text-center mt-10">Stats About Our Web App</h2>
    <h3 className="text-2xl font-bold text-center mt-10">Last Updated: 12th August 2023</h3>
    <StatsCard />
    </div>
  )
}

export default Hero