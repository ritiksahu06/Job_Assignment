
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../public/assets/logo.png";
import cart from "../../public/assets/cart.png";

const Navbar = ({ onToggleSidebar }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed top-0 left-0 w-full h-[60px] bg-white shadow-md flex items-center justify-between px-4 sm:px-6 z-50 text-lg">
      {/* Logo */}
      <div className="flex items-center justify-center bg-gray-200 rounded w-[120px] h-[32px] sm:w-[150px] sm:h-[38px] xl:w-[182px] xl:h-[44px]">
        <img src={logo} alt="LOGO" className="h-full object-contain" />
      </div>

      {/* Desktop Links */}
      <div className="hidden xl:flex items-center justify-between w-[804px] h-[40px]">
        <Link to="/" className="text-gray-800 font-medium hover:text-blue-500">
          HOME
        </Link>
        <Link
          to="/bag"
          className="text-gray-800 font-medium hover:text-blue-500"
        >
          BAG
        </Link>
        <Link
          to="/sneakers"
          className="text-gray-800 font-medium hover:text-blue-500"
        >
          SNEAKERS
        </Link>
        <Link
          to="/belt"
          className="text-gray-800 font-medium hover:text-blue-500"
        >
          BELT
        </Link>
        <Link
          to="/contact"
          className="text-gray-800 font-medium hover:text-blue-500"
        >
          CONTACT
        </Link>
      </div>

      {/* Cart + Mobile Buttons */}
      <div className="flex items-center gap-3">
        {/* Mobile Sidebar Toggle Button */}
        <button
          onClick={onToggleSidebar}
          className="xl:hidden bg-blue-500 text-white px-3 py-1 rounded-md font-medium mr-2"
        >
          Filters
        </button>

        {/* Cart */}
        <div className="flex items-center gap-2 h-[44px]">
          <div className="w-[31px] h-[34px] flex items-center justify-center">
            <img src={cart} alt="Cart" className="w-full h-full object-contain" />
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <p className="text-gray-800">items</p>
            <p className="text-gray-800">$0.00</p>
          </div>
        </div>

        {/* Hamburger Menu */}
        <button
          onClick={toggleMenu}
          className="xl:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`xl:hidden fixed top-[60px] left-0 w-full bg-white shadow-lg z-50 transform transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col py-4 px-6 space-y-3">
          {["HOME", "BAG", "SNEAKERS", "BELT", "CONTACT"].map((item, i) => (
            <Link
              key={i}
              to={item.toLowerCase()}
              className="text-gray-800 font-medium hover:text-blue-500 py-2 border-b border-gray-100 last:border-b-0"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Mobile-only cart info */}
        <div className="sm:hidden px-6 py-3 border-t border-gray-100 bg-gray-50">
          <div className="flex items-center justify-between text-gray-800">
            <span className="text-sm">Items: 0</span>
            <span className="text-sm font-medium">$0.00</span>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="xl:hidden fixed inset-0 top-[60px] bg-black bg-opacity-25 z-40"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;


