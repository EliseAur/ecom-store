import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { CartIcon } from "./index";

function Header({ cart }) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close the menu when the route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header className="bg-blue-600 text-white shadow-md w-full sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-lg font-bold">
          <Link to="/" className="hover:text-gray-200">
            Shop:it
          </Link>
        </div>
        <div className="md:hidden">
          <CartIcon cart={cart} className="mx-7" />
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <FontAwesomeIcon
              icon={isOpen ? faTimes : faBars}
              className="h-6 w-6"
            />
          </button>
        </div>
        <nav className={`hidden md:flex md:items-center space-x-4`}>
          <Link to="/" className="hover:text-gray-200">
            Home
          </Link>
          <Link to="/about" className="hover:text-gray-200">
            About
          </Link>
          <Link to="/contact" className="hover:text-gray-200">
            Contact
          </Link>
        </nav>
        <CartIcon cart={cart} className="mx-9 hidden md:block" />
      </div>
      {isOpen && (
        <div className="fixed inset-0 bg-blue-600 text-white flex flex-col items-center justify-start z-50">
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-white focus:outline-none"
          >
            <FontAwesomeIcon icon={faTimes} className="h-6 w-6" />
          </button>
          <div className="mt-16 pb-10 space-y-4">
            <Link
              to="/"
              className="block px-4 py-2 text-xl hover:text-gray-200"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block px-4 py-2 text-xl hover:text-gray-200"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block px-4 py-2 text-xl hover:text-gray-200"
            >
              Contact
            </Link>
            <div className="relative px-4 py-2 hover:text-gray-200">
              <span className="mr-3 text-xl">Cart</span>
              <CartIcon cart={cart} />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

Header.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      image: PropTypes.shape({
        url: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
      }).isRequired,
      discountedPrice: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Header;
