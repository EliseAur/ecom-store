import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-lg font-bold">
          <Link to="/" className="hover:text-gray-200">
            Shop:it
          </Link>
        </div>
        <nav className="space-x-4">
          <Link to="/" className="hover:text-gray-200">
            Home
          </Link>
          <Link to="/about">About</Link>
          <a href="#" className="hover:text-gray-200">
            Contact
          </a>
          <a href="#" className="hover:text-gray-200">
            Cart
          </a>
        </nav>
        <Link to="/login">Login</Link>
      </div>
    </header>
  );
}
