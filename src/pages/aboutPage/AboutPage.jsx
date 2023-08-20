import React from "react";
import AboutImage from "../../image/ecommerce_store.png";

const About = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img
            className="object-contain object-center rounded"
            alt="About Us"
            src={AboutImage} // Replace with the actual image path
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            About ProductStore
          </h1>
          <p className="mb-8 leading-relaxed">
            At ProductStore, we believe in bringing you the best of the best.
            Our curated selection of products reflects our commitment to
            quality, style, and innovation. With a team of experts sourcing
            products from around the world, we offer you a diverse range of
            items that cater to your unique needs and preferences.
          </p>
          <p className="mb-8 leading-relaxed">
            Our mission is to provide a seamless and enjoyable shopping
            experience that lets you discover new products, make informed
            decisions, and elevate your lifestyle. From fashion and electronics
            to home essentials and beyond, ProductStore is your go-to
            destination for premium products that enrich your daily life.
          </p>
          <p className="mb-8 leading-relaxed">
            We value your trust and satisfaction above all else. With secure
            transactions, prompt customer support, and a user-friendly platform,
            we strive to exceed your expectations at every step of your shopping
            journey. Join us in exploring a world of possibilities and enhance
            your lifestyle with ProductStore.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
