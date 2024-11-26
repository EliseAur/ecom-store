import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchProductDetails } from "../api";
import { ProductDetailContent } from "../components";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadProduct() {
      try {
        const product = await fetchProductDetails(id);
        setProduct(product);
      } catch (error) {
        setError(error.message);
      }
    }

    loadProduct();
  }, [id]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!product) {
    return <div>Loading...</div>;
  }

  return <ProductDetailContent product={product} />;
}

export default ProductDetail;

// function ProductDetail() {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     async function fetchProduct() {
//       try {
//         const response = await fetch(`https://v2.api.noroff.dev/online-shop/${id}`);
//         const result = await response.json();

//         if (response.ok) {
//           setProduct(result.data);
//         } else {
//           throw new Error(result.errors ? result.errors[0].message : "An error occurred");
//         }
//       } catch (error) {
//         setError(error.message);
//       }
//     }

//     fetchProduct();
//   }, [id]);

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   if (!product) {
//     return <div>Loading...</div>;
//   }

//   return <ProductDetailContent product={product} />;
// }

// export default ProductDetail;
