import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { calculateDiscount } from "../utils";

export default function ProductCard({ product }) {
  const discountInfo = calculateDiscount(product);
  return (
    <Link
      to={`/product/${product.id}`}
      className="block p-4 border border-gray-200 rounded-md shadow-md hover:shadow-lg transition-shadow duration-200"
    >
      <img
        src={product.image.url}
        alt={product.image.alt}
        className="w-full h-48 object-cover rounded-md"
      />
      <h2 className="mt-2 text-xl font-bold">{product.title}</h2>
      <p className="mt-1 text-black font-semibold">
        ${product.discountedPrice}
        {product.discountedPrice < product.price && (
          <span className="ml-4 font-normal text-gray-600 line-through italic">
            <span className="line-through">${product.price.toFixed(2)}</span>
          </span>
        )}
      </p>
      <p className="font-bold">
        {discountInfo ? (
          <span className="text-red-600 text-sm">
            On sale: -{discountInfo.discountPercentage.toFixed(0)}%
          </span>
        ) : (
          <span className="text-gray-600 text-sm">&nbsp;</span>
        )}
      </p>

      <Link
        to={`/product/${product.id}`}
        className="mt-4 inline-block bg-blue-600 text-white px-4 py-1 rounded-md hover:bg-blue-700"
      >
        View
      </Link>
    </Link>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    image: PropTypes.shape({
      url: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    }).isRequired,
    title: PropTypes.string.isRequired,
    discountedPrice: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};
