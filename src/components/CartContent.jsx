import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import { calculateDiscount } from "../utils";

function CartContent({ groupedProducts, handleQuantityChange, total }) {
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/checkout-success");
  };

  return (
    <div id="main-container" className="container mx-auto">
      <main className="text-center">
        <h1 className="text-3xl">Shopping Cart</h1>
        <p>This is your shopping cart</p>
        {groupedProducts.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="py-2 text-xs sm:text-base">Product</th>
                  <th className="py-2 text-xs sm:text-base">Quantity</th>
                  <th className="py-2 text-xs sm:text-base">Price</th>
                  <th className="py-2 text-xs sm:text-base">Total</th>
                </tr>
              </thead>
              <tbody>
                {groupedProducts.map((product, index) => {
                  const discountInfo = calculateDiscount(product);
                  const totalPrice = product.discountedPrice * product.quantity;
                  return (
                    <tr key={index} className="border-b">
                      <td className="py-2 text-xs sm:text-base">
                        <Link
                          to={`/product/${product.id}`}
                          className="flex flex-col items-center"
                        >
                          <img
                            src={product.image.url}
                            alt={product.image.alt}
                            className="w-12 h-12 object-cover rounded-md hover:opacity-75 transition-opacity duration-200"
                          />
                          <div className="hover:underline">{product.title}</div>
                          {discountInfo && (
                            <div className="text-red-600">
                              On sale: -
                              {discountInfo.discountPercentage.toFixed(2)}%
                            </div>
                          )}
                        </Link>
                      </td>
                      <td className="py-2">
                        <input
                          type="number"
                          value={product.quantity}
                          min="0"
                          className="w-12 text-center border rounded"
                          onChange={(e) =>
                            handleQuantityChange(
                              product.id,
                              parseInt(e.target.value),
                            )
                          }
                        />
                      </td>
                      <td className="py-2">
                        ${product.discountedPrice.toFixed(2)}
                      </td>
                      <td className="py-2">${totalPrice.toFixed(2)}</td>
                    </tr>
                  );
                })}
                <tr className="font-bold">
                  <td className="w-1/3 py-2 text-xs sm:text-base">Total:</td>
                  <td className="w-2/9 py-2 text-xs sm:text-base"></td>
                  <td className="w-2/9 py-2 text-xs sm:text-base"></td>
                  <td className="w-2/9 py-2 text-xs sm:text-base">
                    ${total.toFixed(2)}
                  </td>
                </tr>
              </tbody>
            </table>
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
