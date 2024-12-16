import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { calculateDiscount, calculateProductTotal } from "../utils";

function CartTableRow({ product, handleQuantityChange }) {
  const discountInfo = calculateDiscount(product);
  const totalProductPrice = calculateProductTotal(product);

  return (
    <tr className="border-b">
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
              On sale: -{discountInfo.discountPercentage.toFixed(2)}%
            </div>
          )}
        </Link>
      </td>
      <td className="py-2">
        <select
          value={product.quantity}
          className="w-12 text-center border rounded"
          onChange={(e) =>
            handleQuantityChange(product.id, parseInt(e.target.value))
          }
        >
          <option value={0}>Delete</option>
          {[...Array(5).keys()].map((num) => (
            <option key={num + 1} value={num + 1}>
              {num + 1}
            </option>
          ))}
        </select>
      </td>
      <td className="py-2 text-xs sm:text-base">
        ${product.discountedPrice.toFixed(2)}
      </td>
      <td className="py-2 text-xs sm:text-base">
        ${totalProductPrice.toFixed(2)}
      </td>
    </tr>
  );
}

CartTableRow.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.shape({
      url: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    }).isRequired,
    discountedPrice: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
  handleQuantityChange: PropTypes.func.isRequired,
};

export default CartTableRow;
