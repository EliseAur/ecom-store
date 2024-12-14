import PropTypes from "prop-types";
import CartTableRow from "./CartTableRow";
import CartTotalRow from "./CartTotalRow";

function CartTable({ groupedProducts, handleQuantityChange, total }) {
  return (
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
        {groupedProducts.map((product, index) => (
          <CartTableRow
            key={index}
            product={product}
            handleQuantityChange={handleQuantityChange}
          />
        ))}
        <CartTotalRow total={total} />
      </tbody>
    </table>
  );
}

CartTable.propTypes = {
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

export default CartTable;
