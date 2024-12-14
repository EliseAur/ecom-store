import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { calculateDiscount } from "../utils";

function ProductDetailContent({ product, onAddToCart }) {
  // const { title, description, price, discountedPrice, image, rating, reviews } = product;

  const discountInfo = calculateDiscount(product);

  return (
    <div className="container mx-auto p-4 max-w-[400px] flex-grow">
      <h1 className="text-3xl font-bold">{product.title}</h1>
      <img
        src={product.image.url}
        alt={product.image.alt}
        className="mt-3 w-full h-80 object-cover rounded-md"
      />
      <h2 className="mt-3 text-xl font-bold">Product details</h2>
      <p className="">{product.description}</p>
      <p className="mt-3 text-xl font-bold">
        ${product.discountedPrice.toFixed(2)}
        {product.discountedPrice < product.price && (
          <span className="ml-4 font-semibold text-gray-600 line-through italic">
            <span className="line-through">${product.price.toFixed(2)}</span>
          </span>
        )}
      </p>
      <p className=" font-bold">
        {discountInfo && (
          <span className="text-red-600 text-sm">
            On sale: -{discountInfo.discountPercentage.toFixed(0)}%
          </span>
        )}
      </p>
      <button
        onClick={() => onAddToCart(product)}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
      >
        Add to Cart
      </button>
      <Link
        to="/"
        className="mt-4 ml-3 bg-blue-600 text-white px-4 py-2.5 rounded-md hover:bg-blue-700"
      >
        Back to products
      </Link>

      <h2 className="mt-5 text-xl">
        <span className="font-bold">Ratings ({product.reviews.length}):</span>{" "}
        {product.rating}/5
      </h2>
      <div className="mt-4">
        <h2 className="text-xl font-bold">
          Reviews ({product.reviews.length})
        </h2>
        {product.reviews.length > 0 ? (
          product.reviews.map((review) => (
            <div key={review.id} className="mt-2">
              <p className="font-bold underline">{review.username}</p>
              <p className="text-sm">
                <span className="font-bold">Rating: </span>
                {review.rating}
              </p>
              <p className="text-sm">
                <span className="font-bold">Description: </span>
                {review.description}
              </p>
            </div>
          ))
        ) : (
          <p>No reviews yet</p>
        )}
      </div>
    </div>
  );
}

ProductDetailContent.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    discountedPrice: PropTypes.number.isRequired,
    image: PropTypes.shape({
      url: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    }).isRequired,
    rating: PropTypes.number.isRequired,
    reviews: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
      }),
    ).isRequired,
  }).isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

export default ProductDetailContent;
