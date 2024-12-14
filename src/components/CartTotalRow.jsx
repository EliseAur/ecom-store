import PropTypes from "prop-types";

function CartTotalRow({ total }) {
  return (
    <tr className="font-bold">
      <td className="w-1/3 py-2 text-xs sm:text-base">Total:</td>
      <td className="w-2/9 py-2 text-xs sm:text-base"></td>
      <td className="w-2/9 py-2 text-xs sm:text-base"></td>
      <td className="w-2/9 py-2 text-xs sm:text-base">${total.toFixed(2)}</td>
    </tr>
  );
}

CartTotalRow.propTypes = {
  total: PropTypes.number.isRequired,
};

export default CartTotalRow;
