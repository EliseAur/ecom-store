import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { calculateDiscount } from "../utils";

export default function ProductCard({ product }) {
  const discountInfo = calculateDiscount(product);
  return (
    <Link
      to={`/product/${product.id}`}
      className="block p-2 border border-zinc-200 rounded-md shadow-md hover:shadow-lg transition-shadow duration-200"
    >
      <img
        src={product.image.url}
        alt={product.image.alt}
        className="w-full h-48 object-cover rounded-md"
      />
      <div className="p-3">
        <h2 className="text-xl font-semibold">{product.title}</h2>
        <p className="mt-1 text-black font-semibold">
          ${product.discountedPrice}
          {product.discountedPrice < product.price && (
            <span className="ml-4 font-light text-gray-600 line-through italic">
              <span className="line-through">${product.price.toFixed(2)}</span>
            </span>
          )}
        </p>
        <p className="font-semibold text-red-600 text-sm">
          {discountInfo ? (
            <span>On sale: -{discountInfo.discountPercentage.toFixed(0)}%</span>
          ) : (
            <span className="text-gray-600 text-sm">&nbsp;</span>
          )}
        </p>

        <Link
          to={`/product/${product.id}`}
          className="mt-4 inline-block bg-zinc-900 text-white px-4 py-1 rounded-md hover:bg-zinc-800"
        >
          View
        </Link>
      </div>
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
