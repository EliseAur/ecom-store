// import { useState } from "react";
// import reactLogo from "../../public/assets/react.svg";
// import viteLogo from "../../public/vite.svg";
// import "../styles/App.css";
import { Header, Footer } from "../components";

function Home() {
  // const [count, setCount] = useState(0);

  return (
    <div id="main-container" className="container mx-auto">
      <Header />
      <main className="text-center">
        <h1 className="text-3xl">HOME - Welcome to Shop:it</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis necessitatibus incidunt ducimus in ab ratione voluptas, a possimus aperiam cumque, ipsa quae dolorem doloremque odio.
          Exercitationem, aspernatur accusamus? Illo, consequatur?
        </p>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
