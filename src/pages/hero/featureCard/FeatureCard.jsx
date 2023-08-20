import React from "react";
import { Link } from "react-router-dom";

const FeatureCard = ({ cards = [] }) => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto w-fit m-5">
        {cards?.map((card) => (
          <div
            key={card} // Add a unique key for each card
            className="flex items-center  mx-auto pb-10 mb-10 sm:flex-row flex-col m-5 bg-slate-200 p-10 border-black rounded-xl"
          >
            <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-red-100 text-red-500 flex-shrink-0">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="sm:w-16 sm:h-16 w-10 h-10"
                viewBox="0 0 24 24"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-2 capitalize">
                {card || "Example Card"}
              </h2>
              <p className="leading-relaxed text-base">
                Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                taxidermy. Gastropub indxgo juice poutine.
              </p>
              <Link
                to={`/categories/${card}`}
                className="mt-3 text-red-500 inline-flex items-center"
              >
                Go To {card}
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureCard;
