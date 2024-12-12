import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import CartTable from "./CartTable";

function CartContent({ groupedProducts, handleQuantityChange, total }) {
  const navigate = useNavigate();

  console.log("CartContent groupedProducts:", groupedProducts);

  const handleCheckout = () => {
    navigate("/checkout-success");
  };

  return (
    <div className="container mx-auto flex-grow">
      <main className="text-center">
        <h1 className="text-3xl">Shopping Cart</h1>
        <p>This is your shopping cart</p>
        {groupedProducts.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="overflow-x-auto">
            <CartTable
              groupedProducts={groupedProducts}
              handleQuantityChange={handleQuantityChange}
              total={total}
            />
            <button
              onClick={handleCheckout}
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
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
      id: PropTypes.number.isRequired,
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
