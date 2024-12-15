import { useState, useEffect } from "react";
import { fetchProducts } from "../api";
import { filterProducts } from "../utils";
import { HomeContent } from "../components";
import { ErrorMessage } from "../components";
import { useLocation } from "react-router-dom";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const hasVisitedHome = localStorage.getItem("hasVisitedHome");
    if (!hasVisitedHome) {
      localStorage.setItem("hasVisitedHome", "true");
    } else if (location.hash === "#productsContainer") {
      const productsContainer = document.getElementById("productsContainer");
      if (productsContainer) {
        productsContainer.scrollIntoView({ behavior: "smooth" });
      }
    }

    async function loadProducts() {
      try {
        const products = await fetchProducts();
        setProducts(products);
      } catch (error) {
        setError({
          message: error.message,
          status: error.status,
          statusCode: error.statusCode,
        });
      }
    }

    loadProducts();
  }, [location]);

  const filteredProducts = filterProducts(products, searchTerm);

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
