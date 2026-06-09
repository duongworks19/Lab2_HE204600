import { useState } from "react";
import './App.css';
import Navbars from "./components/Header";
import PromoCarousel from "./components/Banner";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";

function App() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <>
      <Navbars cartCount={cartCount} />
      <PromoCarousel />
      <ProductList onAddToCart={() => setCartCount(prev => prev + 1)} />
      <Footer />
    </>
  )
}

export default App