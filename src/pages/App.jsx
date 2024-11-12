// import { useState } from "react";
// import reactLogo from "../../public/assets/react.svg";
// import viteLogo from "../../public/vite.svg";
// import "../styles/App.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div id="main-container" className="container mx-auto">
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
      <main className="text-center">
        <h1 className="text-3xl">Welcome to Shop:it</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis necessitatibus incidunt ducimus in ab ratione voluptas, a possimus aperiam cumque, ipsa quae dolorem doloremque odio.
          Exercitationem, aspernatur accusamus? Illo, consequatur?
        </p>
      </main>
      <footer>&copy;Noroff School - tutorial React + Vite</footer>
    </div>
  );
}

export default App;
