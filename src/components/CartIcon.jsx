import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const CartIcon = ({ cart, className }) => {
  const totalCartItems = cart.reduce(
    (sum, product) => sum + product.quantity,
    0,
  );

  return (
    <span className={`relative ${className}`}>
      <Link to="/cart" className="hover:text-gray-200">
        <FontAwesomeIcon icon={faShoppingCart} className="h-6 w-6" />
        {totalCartItems > 0 && (
          <span className="absolute bottom-3 left-5 inline-flex items-center justify-center px-1.5 py-1 text-[10px] font-bold leading-none rounded-full text-red-100 bg-red-600">
            {totalCartItems}
          </span>
        )}
      </Link>
    </span>
  );
};

CartIcon.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
    }),
  ).isRequired,
  className: PropTypes.string,
};

CartIcon.defaultProps = {
  className: "",
};

export default CartIcon;
