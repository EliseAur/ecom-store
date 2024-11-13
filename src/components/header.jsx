export default function Header() {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-lg font-bold">
          <a href="#" className="hover:text-gray-200">
            Shop:it
          </a>
        </div>
        <nav className="space-x-4">
          <a href="#" className="hover:text-gray-200">
            Home
          </a>
          <a href="#" className="hover:text-gray-200">
            About
          </a>
          <a href="#" className="hover:text-gray-200">
            Contact
          </a>
          <a href="#" className="hover:text-gray-200">
            Cart
          </a>
        </nav>
        <div>Login</div>
      </div>
    </header>
  );
}
