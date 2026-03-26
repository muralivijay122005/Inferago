// App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

import Products from "./components/Products";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="dark min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      
      <Products />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
