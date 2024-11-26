import { useState, useEffect } from "react";
import { fetchProducts } from "../api";
import { filterProducts } from "../utils";
// import { FilterInput } from "../components";
// import { ProductCard } from "../components";
import { HomeContent } from "../components";

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
      <div>
        <h2>Error: {error.message}</h2>
        <p>Status: {error.status}</p>
        <p>Status code: {error.statusCode}</p>
      </div>
    );
  }

  return (
    // <div id="main-container" className="container mx-auto">
    //   <div className="text-center py-4">
    //     <h1 className="text-3xl font-bold">HOME - Welcome to Shop:it</h1>
    //     <p className="mt-2">
    //       Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis necessitatibus incidunt ducimus in ab ratione voluptas, a possimus aperiam cumque, ipsa quae dolorem doloremque odio.
    //       Exercitationem, aspernatur accusamus? Illo, consequatur?
    //     </p>
    //     <FilterInput value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
    //   </div>
    //   <main className="mt-8">
    //     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    //       {filteredProducts.map((product) => (
    //         <ProductCard key={product.id} product={product} />
    //       ))}
    //     </div>
    //   </main>
    // </div>
    <HomeContent searchTerm={searchTerm} setSearchTerm={setSearchTerm} filteredProducts={filteredProducts} />
  );
}
