import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchProductDetails } from "../api";
import { ProductDetailContent } from "../components";
import { ErrorMessage } from "../components";

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
        setError({
          message: error.message,
          status: error.status,
          statusCode: error.statusCode,
        });
      }
    }

    loadProduct();
  }, [id]);

  const handleAddToCart = (product) => {
    console.log("Add to Cart:", product);
    // Implement the logic to add the product to the cart later
  };

  // if (error) {
  //   return (
  //     <div>
  //       <h2>Error: {error.message}</h2>
  //       <p>Status: {error.status}</p>
  //       <p>Status code: {error.statusCode}</p>
  //     </div>
  //   );
  // }

  if (error) {
    return <ErrorMessage message={error.message} status={error.status} statusCode={error.statusCode} />;
  }

  if (!product) {
    return <div>Loading...</div>;
  }

  return <ProductDetailContent product={product} onAddToCart={handleAddToCart} />;
}

export default ProductDetail;
