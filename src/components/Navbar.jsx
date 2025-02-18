import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar sticky top-0 bg-[#e8f0fe] shadow-none transition-all ease-in-out duration-300 z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        
        <Link to="/" className="flex items-center">
          <img
            src="/assets/logo.png"
            alt="Company Logo"
            height="40"
            className="h-10"
          />
        </Link>

        {/* Centered Navbar Links */}
        <div className="hidden xl:flex flex-1 justify-center space-x-4">
          <Link to="/about" className="nav-link text-gray-700 hover:text-blue-600">
            About Us
          </Link>
          <Link to="/solution" className="nav-link text-blue-600 font-semibold">
            Solution
          </Link>
          <Link to="/career" className="nav-link text-gray-700 hover:text-blue-600">
            Career
          </Link>
          <Link to="/ourapps" className="nav-link text-gray-700 hover:text-blue-600">
            Our Apps
          </Link>
          <Link to="/ProductPricing" className="nav-link text-gray-700 hover:text-blue-600">
            Product And Pricing
          </Link>
        </div>

        {/* Toggle Button for Mobile */}
        <button
          type="button"
          aria-label="Toggle navigation"
          className="xl:hidden block text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            ></path>
          </svg>
        </button>

        {/* Mobile Navbar Links (When Menu is Open) */}
        <div
          className={`xl:hidden flex flex-col items-center justify-center space-y-4 absolute top-16 left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-lg p-4 w-64 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <Link to="/about" className="nav-link text-gray-700 hover:text-blue-600">
            About Us
          </Link>
          <Link to="/solution" className="nav-link text-blue-600 font-semibold">
            Solution 
          </Link>
          <Link to="/career" className="nav-link text-gray-700 hover:text-blue-600">
            Career
          </Link>
          <Link to="/ourapps" className="nav-link text-gray-700 hover:text-blue-600">
            Our Apps
          </Link>
          <Link to="/ProductPricing" className="nav-link text-gray-700 hover:text-blue-600">
            Product And Pricing
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
