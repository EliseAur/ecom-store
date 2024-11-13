import { Header, Footer } from "../components";

function About() {
  return (
    <div id="main-container" className="container mx-auto">
      <Header />
      <main className="text-center">
        <h1 className="text-3xl">About us</h1>
        <p>This text is telling about out business. Woop woop!!!</p>
      </main>
      <Footer />
    </div>
  );
}

export default About;
