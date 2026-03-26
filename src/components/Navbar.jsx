// components/Navbar.jsx
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="inter-regular fixed top-0 left-0 right-0 z-50 ">
      <div className="mx-auto backdrop-blur-lg px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div
          onClick={() => scrollToSection("home")}
          className="flex items-center cursor-pointer shrink-0"
        >
          <img
            src="./Infer_Full.png"
            alt="Inferago Logo"
            className="h-10 w-auto object-contain"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 text-xs">
          <button
            onClick={() => scrollToSection("home")}
            className="border border-transparent hover:border-b-white py-1.5 transition-colors"
          >
            HOME
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="border border-transparent hover:border-b-white py-1.5 transition-colors"
          >
            ABOUT
          </button>
          <button
            onClick={() => scrollToSection("products")}
            className="border border-transparent hover:border-b-white py-1.5 transition-colors"
          >
            PRODUCTS
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="border border-transparent hover:border-b-white py-1.5 transition-colors"
          >
            CONTACT
          </button>
          <a
            href="#"
            className="border border-transparent hover:border-b-white py-1.5 transition-colors"
          >
            DOCS
          </a>
        </div>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => alert("Login coming soon")}
            className="px-2 py-3 text-sm text-white"
          >
            Login
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="px-3 py-1.5 text-sm bg-white text-black rounded-full hover:bg-white/90 transition-all active:scale-95"
          >
            Get Started
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-3xl"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-white/10 px-6 py-8 flex flex-col gap-6 text-lg font-medium">
          <button onClick={() => scrollToSection("home")} className="text-left">
            Home
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-left"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("products")}
            className="text-left"
          >
            Products
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-left"
          >
            Contact
          </button>
          <a href="#" className="text-left">
            Docs
          </a>

          <div className="flex flex-col gap-4 pt-6 border-t border-white/10">
            <button
              onClick={() => alert("Login coming soon")}
              className="w-full py-4 text-white"
            >
              Login
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="w-full py-4 bg-white text-zinc-950 rounded-2xl font-semibold"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
