import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [randomImage, setRandomImage] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);

      // Get a random product index
      const randomIndex = Math.floor(Math.random() * data.length);

      // Set the random image from the selected product
      setRandomImage(data[randomIndex].image);
      setSelectedProduct(data[randomIndex]);
    };
    fetchProducts();
  }, []);

  const navigate = useNavigate();
  const handleClick = (product, redirect) => {
    console.log(product);
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const isProductExist = cart.find((item) => item.id === product.id);
    if (isProductExist) {
      const updatedCart = cart.map((item) => {
        if (item.id === product.id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      });
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    } else {
      localStorage.setItem(
        "cart",
        JSON.stringify([...cart, { ...product, quantity: 1 }])
      );
    }
    alert("Product Added To Cart.");
    if (redirect === true) {
      navigate("/cart");
    }
  };

  if (!selectedProduct) {
    return <div>Loading...</div>;
  }

  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img
            className="object-contain object-center rounded"
            alt={selectedProduct.title}
            src={randomImage}
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Before they sold out
          </h1>
          <h2 className="title-font sm:text-2xl text-xl mb-2 font-semibold text-gray-800 capitalize">
            <br className="hidden lg:inline-block" />
            {selectedProduct.title}
            <br className="hidden lg:inline-block" />
            {selectedProduct.category}
          </h2>

          <p className="mb-8 leading-relaxed">
            {selectedProduct.description}
          </p>
          <div className="flex justify-center">
            <button
              className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg"
              onClick={() => handleClick(selectedProduct, true)}
            >
              Buy Now
            </button>
            <button
              className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
              onClick={() => handleClick(selectedProduct)}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
