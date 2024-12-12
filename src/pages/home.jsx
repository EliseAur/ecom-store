import { useState, useEffect } from "react";
import { fetchProducts } from "../api";
import { filterProducts } from "../utils";
import { HomeContent } from "../components";
import { ErrorMessage } from "../components";

export default function Home() {
  // State to store the list of products
  const [products, setProducts] = useState([]);
  // State to store the search term entered by the user
  const [searchTerm, setSearchTerm] = useState("");
  // State to store any error messages
  const [error, setError] = useState(null);

  // useEffect hook to fetch products when the component mounts
  useEffect(() => {
    async function loadProducts() {
      try {
        const products = await fetchProducts();
        setProducts(products);
        const productsContainer = document.getElementById("productsContainer");
        if (productsContainer) {
          productsContainer.scrollIntoView({ behavior: "smooth" });
        }
      } catch (error) {
        setError({
          message: error.message,
          status: error.status,
          statusCode: error.statusCode,
        });
      }
    }

    loadProducts();
  }, []);

  // Filter the products based on the search term
  const filteredProducts = filterProducts(products, searchTerm);

  // If there is an error, display the error message
  if (error) {
    return (
      <ErrorMessage
        message={error.message}
        status={error.status}
        statusCode={error.statusCode}
      />
    );
  }

  return (
    <HomeContent
      searchTerm={searchTerm}
      setSearchTerm={setSearchTerm}
      filteredProducts={filteredProducts}
    />
  );
}
