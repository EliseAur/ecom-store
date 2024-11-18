import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import { fetchProducts } from "../api";
import { filterProducts } from "../utils";
import { FilterInput } from "../components";
import { ProductCard } from "../components";

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

  //     // API URL
  //     const url = "https://v2.api.noroff.dev/online-shop";

  //     try {
  //       // Fetch products from the API
  //       const response = await fetch(url, {
  //         method: "GET",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       });

  //       // Parse the JSON response
  //       const result = await response.json();

  //       // Check if the response is ok (status code in the range 200-299)
  //       if (response.ok) {
  //         // Check if the data is an array
  //         if (!Array.isArray(result.data)) {
  //           throw new Error("Data is not an array");
  //         }
  //         // Set the products state with the fetched data
  //         setProducts(result.data);
  //         // Log the products array to the console
  //         console.log("Fetched products:", result.data);
  //       } else {
  //         // Throw an error if the response is not ok
  //         throw new Error(result.errors ? result.errors[0].message : "An error occurred");
  //       }
  //     } catch (error) {
  //       // Log and set the error state if an error occurs
  //       console.error("Error fetching products:", error);
  //       setError(error.message);
  //     }
  //   };

  //   // Call the fetchProducts function
  //   fetchProducts();
  // }, []); // Empty dependency array means this effect runs once when the component mounts

  // // Filter the products based on the search term
  // const filteredProducts = Array.isArray(products) ? products.filter((product) => product.title.toLowerCase().includes(searchTerm.toLowerCase())) : [];

  // // If there is an error, display the error message
  // if (error) {
  //   return <div>Error: {error}</div>;
  // }

  return (
    <div id="main-container" className="container mx-auto">
      <div className="text-center py-4">
        <h1 className="text-3xl font-bold">HOME - Welcome to Shop:it</h1>
        <p className="mt-2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis necessitatibus incidunt ducimus in ab ratione voluptas, a possimus aperiam cumque, ipsa quae dolorem doloremque odio.
          Exercitationem, aspernatur accusamus? Illo, consequatur?
        </p>
        <FilterInput value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        {/* <input type="text" placeholder="Search for products..." className="mt-4 p-2 border border-gray-300 rounded-md" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} /> */}
      </div>
      <main className="mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
          {/* {filteredProducts.map((product) => (
            <Link to={`/product/${product.id}`} key={product.id} className="block p-4 border border-gray-200 rounded-md shadow-md hover:shadow-lg transition-shadow duration-200">
              <img src={product.image.url} alt={product.image.alt} className="w-full h-48 object-cover rounded-md" />
              <h2 className="mt-2 text-xl font-bold">{product.title}</h2>
              <p className="mt-1 text-gray-700">${product.price}</p>
            </Link>
          ))} */}
        </div>
      </main>
    </div>
  );
}

// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// export default function Home() {
//   const [products, setProducts] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await fetch("https://v2.api.noroff.dev/online-shop");
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         const result = await response.json();
//         if (!Array.isArray(result.data)) {
//           throw new Error("Data is not an array");
//         }
//         setProducts(result.data);
//       } catch (error) {
//         console.error("Error fetching products:", error);
//         setError(error.message);
//       }
//     };

//     fetchProducts();
//   }, []);

//   const filteredProducts = Array.isArray(products) ? products.filter((product) => product.title.toLowerCase().includes(searchTerm.toLowerCase())) : [];

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div id="main-container" className="container mx-auto">
//       <div className="text-center py-4">
//         <h1 className="text-3xl font-bold">HOME - Welcome to Shop:it</h1>
//         <p className="mt-2">
//           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis necessitatibus incidunt ducimus in ab ratione voluptas, a possimus aperiam cumque, ipsa quae dolorem doloremque odio.
//           Exercitationem, aspernatur accusamus? Illo, consequatur?
//         </p>
//         <input type="text" placeholder="Search for products..." className="mt-4 p-2 border border-gray-300 rounded-md" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
//       </div>
//       <main className="mt-8">
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {filteredProducts.map((product) => (
//             <Link to={`/product/${product.id}`} key={product.id} className="block p-4 border border-gray-200 rounded-md shadow-md hover:shadow-lg transition-shadow duration-200">
//               <img src={product.image.url} alt={product.image.alt} className="w-full h-48 object-cover rounded-md" />
//               <h2 className="mt-2 text-xl font-bold">{product.title}</h2>
//               <p className="mt-1 text-gray-700">${product.price}</p>
//             </Link>
//           ))}
//         </div>
//       </main>
//     </div>
//   );
// }

// function Home() {

//   return (
//     <div id="main-container" className="container mx-auto">
//       <main className="text-center">
//         <h1 className="text-3xl">HOME - Welcome to Shop:it</h1>
//         <p>
//           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis necessitatibus incidunt ducimus in ab ratione voluptas, a possimus aperiam cumque, ipsa quae dolorem doloremque odio.
//           Exercitationem, aspernatur accusamus? Illo, consequatur?
//         </p>
//       </main>
//     </div>
//   );
// }

// export default Home;
