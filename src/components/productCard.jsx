import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { calculateDiscount } from "../utils";

export default function ProductCard({ product }) {
  const discountInfo = calculateDiscount(product);
  return (
    <div className="block p-1 sm:p-2 border border-zinc-200 rounded-md shadow-md hover:shadow-lg transition-shadow duration-200">
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image.url}
          alt={product.image.alt}
          className="w-full h-36 sm:h-48 object-cover rounded-md"
        />
      </Link>
      <div className="p-3 flex flex-col justify-between flex-grow h-44">
        <div className="">
          <h2 className="text-base sm:text-xl font-semibold">
            {product.title}
          </h2>
          <p className="mt-1 text-sm sm:text-base text-black font-semibold">
            ${product.discountedPrice}
            {product.discountedPrice < product.price && (
              <span className="ml-4 font-light text-gray-600 line-through italic">
                <span className="line-through">
                  ${product.price.toFixed(2)}
                </span>
              </span>
            )}
          </p>
          <p className="font-semibold text-sm sm:text-base text-red-600">
            {discountInfo && (
              <div>
                <span>
                  On sale: -{discountInfo.discountPercentage.toFixed(0)}%
                </span>
              </div>
            )}
          </p>
        </div>
        <div>
          <Link
            to={`/product/${product.id}`}
            className="sm:mt-4 inline-block bg-zinc-900 text-white px-4 py-1 rounded-md hover:bg-zinc-800"
          >
            View
          </Link>
        </div>
      </div>
    </div>
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
