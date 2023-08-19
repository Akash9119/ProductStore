import React from "react";
import { Link } from "react-router-dom";

const Products = ({ products = [] }) => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {products.map((product) => {
            // Use singular "product" instead of "products"
            console.log(product, "product"); // Updated log for better clarity
            const { id, title, price, description, category, image } = product; // Updated variable name for clarity
            return (
              <div
                key={id}
                className="lg:w-1/3 md:w-1/2 p-5 w-full border border-opacity-20 mb-4"
              >
                <Link
                  to={`/products/${id}`}
                  className="block cursor-pointer relative h-48 rounded overflow-hidden"
                >
                  <img
                    alt={title}
                    className="object-contain object-center w-full h-full block mb-4"
                    src={image}
                  />
                </Link>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 uppercase">
                    {category}
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    {title}
                  </h2>
                  <p className="mt-1 text-lg font-bold">${price}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Products;
