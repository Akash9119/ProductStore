import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./pages/hero/Hero";
import { Routes, Route } from "react-router-dom";
import Product from "./pages/product/Product";

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/products/:id" element={<Product />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;
