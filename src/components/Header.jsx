import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

const Header = () => {
  const navigations = [
    {
      name: 'Home',
      path: '/'
    },
    {
      name: 'products',
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
  ]
  return (
    <header className="text-gray-400 body-font shadow-lg">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <img src="" alt="logo" />
          <span className="ml-3 text-xl">Ecommerce</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
        {
          navigations.map((navigations) => {
            return(
              <Link to={navigations.path} className="mr-5 hover:text-gray-900"> {navigations.name} </Link>
            )
          })
        }
        </nav>
        <button className="inline-flex items-center bg-red-400 text-white font-bold border-0 py-1 px-2 focus:outline-none hover:bg-red-500 rounded mt-4 md:mt-0">
          Go To Cart
          <AiOutlineShoppingCart className="w-4 h-4 ml-1" />
        </button>
      </div>
    </header>
  );
};

export default Header;
