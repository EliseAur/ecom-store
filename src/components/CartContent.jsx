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
            <div className="mt-4 flex flex-col max-w-[157px] sm:flex-row sm:justify-between mx-auto sm:max-w-none">
              <div className="my-1 max-w-[157px] sm:max-w-[180px] sm:flex-1">
                <div className=" w-full bg-white text-black border-zinc-900 border-2 py-1.5 rounded-md hover:bg-zinc-200 text-center">
                  <Link to="/#productsContainer">Continue shopping</Link>
                </div>
              </div>
              <div className="my-1 max-w-[157px] sm:max-w-[180px] sm:flex-1">
                <button
                  onClick={handleCheckout}
                  className="w-full bg-zinc-900 text-white py-2 rounded-md hover:bg-zinc-800"
                >
                  Checkout
                </button>
              </div>
            </div>
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
