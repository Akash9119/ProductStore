import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import Store_Logo from "../image/store_logo.png";

const Header = () => {
  const navigations = [
    {
      name: 'Home',
      path: '/'
    },
    {
      name: 'Products',
      path: '/products'
    },
    {
      name: 'About',
      path: '/about'
    },
    {
      name: 'Contact',
      path: '/contact'
    }
  ];

  return (
    <header className="text-gray-400 body-font shadow-lg">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img src={Store_Logo} alt="Header Image" className="w-10" /> {/* Provide the logo image URL */}
          <span className="ml-3 text-xl">ProductStore</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          {navigations.map((navigation, index) => (
            <Link key={index} to={navigation.path} className="mr-5 hover:text-gray-900">
              {navigation.name}
            </Link>
          ))}
        </nav>
        <Link to={`/cart`} className="inline-flex items-center bg-red-400 text-white font-bold border-0 py-1 px-2 focus:outline-none hover:bg-red-500 rounded mt-4 md:mt-0">
          Go To Cart
          <AiOutlineShoppingCart className="w-4 h-4 ml-1" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
