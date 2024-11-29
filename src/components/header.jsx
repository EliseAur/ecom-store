import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const cartItemCount = 3; // Placeholder number

  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-lg font-bold">
          <Link to="/" className="hover:text-gray-200">
            Shop:it
          </Link>
        </div>
        <nav className="space-x-4 flex">
          <Link to="/" className="hover:text-gray-200">
            Home
          </Link>
          <Link to="/about" className="hover:text-gray-200">
            About
          </Link>
          <Link to="/contact" className="hover:text-gray-200">
            Contact
          </Link>
          <Link to="/cart" className="hover:text-gray-200 flex items-center">
            <FontAwesomeIcon icon={faCartShopping} className="h-6 w-6 mr-1" />
            <span>{cartItemCount}</span>
          </Link>
        </nav>
        <Link to="/login" className="hover:text-gray-200">
          Login
        </Link>
      </div>
    </header>
  );
}
