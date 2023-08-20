import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./pages/hero/Hero";
import { Routes, Route } from "react-router-dom";
import ProductCard from "./pages/productCard/ProductCard";
import ProductsPage from "./pages/products/ProductsPage";
import ProductsCategories from "./pages/productsCategories/ProductsCategories";
import Cart from "./pages/cart/Cart";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/products/:id" element={<ProductCard />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/categories/:name" element={<ProductsCategories />} />
        <Route path="/cart" element={ <Cart /> } />
        <Route path="*" element={<div className="text-center block font-bold text-4xl">404 Page Not Found</div>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
