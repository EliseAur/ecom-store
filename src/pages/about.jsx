import { Link } from "react-router-dom";

function About() {
  return (
    <div className="container mx-auto p-4 flex-grow">
      <main className="text-center max-w-lg mx-auto">
        <h1 className="text-3xl font-semibold">About Us</h1>
        <p className="p-2">
          Welcome to our store! We are passionate about providing high-quality
          products to our customers. Our mission is to offer a wide range of
          items that cater to various needs and preferences, ensuring that
          everyone can find something they love.
        </p>
        <p className="p-2">
          We offer a diverse selection of products, including electronics, home
          goods, fashion, beauty, and more. Each item in our store is carefully
          curated to meet our high standards of excellence. We work closely with
          our suppliers to ensure that every product we sell is of the highest
          quality.
        </p>
        <p className="p-2">
          At our store, we believe in the power of great customer service. Our
          team is dedicated to providing a seamless shopping experience, from
          browsing our website to receiving your order. We are always here to
          help with any questions or concerns you may have.
        </p>
        <p className="p-2 pb-4 mb-4">
          Thank you for choosing our store. We look forward to serving you and
          helping you find the perfect products to enhance your life.
        </p>
        <Link
          to="/"
          className="bg-zinc-900 text-white p-2 px-4 mt-8 rounded hover:bg-zinc-800"
        >
          Start shopping
        </Link>
      </main>
    </div>
  );
}

export default About;
