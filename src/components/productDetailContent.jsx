import PropTypes from "prop-types";

function ProductDetailContent({ product, onAddToCart }) {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">{product.title}</h1>
      <img src={product.image.url} alt={product.image.alt} className="w-full h-64 object-cover rounded-md" />
      <p className="mt-4">{product.description}</p>
      <p className="mt-2 text-xl font-bold">${product.price}</p>
      <p className="mt-2 text-gray-700">Rating: {product.rating}</p>
      <button onClick={() => onAddToCart(product)} className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
        Add to Cart
      </button>
      <div className="mt-4">
        <h2 className="text-2xl font-bold">Reviews</h2>
        {product.reviews.map((review) => (
          <div key={review.id} className="mt-2">
            <p className="font-bold">{review.username}</p>
            <p>Rating: {review.rating}</p>
            <p>{review.description}</p>
          </div>
        ))}
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
      })
    ).isRequired,
  }).isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

export default ProductDetailContent;
