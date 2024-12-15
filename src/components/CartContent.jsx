import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import CartTable from "./CartTable";

function CartContent({ groupedProducts, handleQuantityChange, total }) {
  const navigate = useNavigate();

  console.log("CartContent groupedProducts:", groupedProducts);

  const handleCheckout = () => {
    navigate("/checkout-success");
  };

  return (
    <div className="container mx-auto flex-grow">
      <main className="text-center p-4 max-w-xl mx-auto">
        <h1 className="text-3xl font-semibold mb-5">Shopping Cart</h1>
        {groupedProducts.length === 0 ? (
          <div>
            <p>Your cart is empty.</p>
            <div className="mt-8">
              <Link
                to="/"
                className="bg-zinc-900 text-white p-2 px-4 mt-8 rounded hover:bg-zinc-800"
              >
                Start shopping
              </Link>
            </div>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <CartTable
              groupedProducts={groupedProducts}
              handleQuantityChange={handleQuantityChange}
              total={total}
            />
            <button
              onClick={handleCheckout}
              className="mt-4 bg-zinc-900 text-white px-4 py-2 rounded-md hover:bg-zinc-600"
            >
              Checkout
            </button>
          </div>
        )}
      </main>
    </div>
  );
}

CartContent.propTypes = {
  groupedProducts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      image: PropTypes.shape({
        url: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
      }).isRequired,
      discountedPrice: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
    }),
  ).isRequired,
  handleQuantityChange: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
};

export default CartContent;
