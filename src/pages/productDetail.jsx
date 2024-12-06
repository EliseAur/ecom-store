import { useState, useEffect } from "react";
import { useParams, useOutletContext } from "react-router-dom";
import { fetchProductDetails } from "../api";
import { ProductDetailContent } from "../components";
import { ErrorMessage } from "../components";

function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useOutletContext();
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
    addToCart({ ...product, quantity: 1 });
  };

  if (error) {
    return <ErrorMessage message={error.message} status={error.status} statusCode={error.statusCode} />;
  }

  if (!product) {
    return <div>Loading...</div>;
  }

  return <ProductDetailContent product={product} onAddToCart={handleAddToCart} />;
}

export default ProductDetail;
