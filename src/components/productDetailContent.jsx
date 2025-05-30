import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { calculateDiscount } from "../utils";

function ProductDetailContent({ product, onAddToCart }) {
  const { title, description, price, discountedPrice, image, rating, reviews } =
    product;

  const discountInfo = calculateDiscount(product);

  return (
    <div className="container mx-auto p-4 max-w-[400px] flex-grow">
      <h1 className="text-3xl font-semibold">{title}</h1>
      <img
        src={image.url}
        alt={image.alt}
        className="mt-3 w-full h-80 object-cover rounded-md"
      />
      <div className="mt-3 p-2 bg-zinc-100 rounded">
        <h2 className="text-xl font-semibold">Product details</h2>
        <p className="">{description}</p>
      </div>
      <div className="mt-3 p-2 bg-zinc-100 rounded">
        <p className="text-xl font-semibold bg-zinc-100 rounded flex justify-between">
          ${discountedPrice.toFixed(2)}
          {discountedPrice < price && (
            <span className="ml-4 font-light text-zinc-800 line-through italic">
              <span>${price.toFixed(2)}</span>
            </span>
          )}
        </p>
        {discountInfo && (
          <p className="font-semibold text-red-600 text-base flex justify-between">
            <span>&nbsp;</span>
            <span className="text-right">
              On sale: -{discountInfo.discountPercentage.toFixed(0)}%
            </span>
          </p>
        )}
      </div>
      <div className="sm:flex">
        <div className="my-4 max-w-[157px] sm:max-w-[180px] sm:flex-1">
          <button
            onClick={() => onAddToCart(product)}
            className="w-full bg-zinc-900 text-white py-2 rounded-md hover:bg-zinc-800"
          >
            Add to Cart
          </button>
        </div>
        <div className="my-4 max-w-[157px] sm:max-w-[180px] sm:flex-1">
          <div className="sm:ml-2 w-full bg-white text-black border-zinc-900 border-2 py-1.5 rounded-md hover:bg-zinc-200 text-center">
            <Link to="/#productsContainer">Back to products</Link>
          </div>
        </div>
      </div>
      <h2 className="p-2 text-xl bg-zinc-100 rounded">
        <span className="font-semibold">Ratings:</span> {rating}/5
      </h2>
      <div className="p-2 mt-4 bg-zinc-100 rounded">
        <h2 className="text-xl font-semibold">Reviews ({reviews.length})</h2>
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <div key={review.id} className="mt-2">
              <p className="font-bold underline">{review.username}</p>
              <p className="text-sm">
                <span className="font-semibold">Rating: </span>
                {review.rating}
              </p>
              <p className="text-sm">
                <span className="font-semibold">Description: </span>
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
