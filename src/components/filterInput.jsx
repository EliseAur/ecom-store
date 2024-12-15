import PropTypes from "prop-types";
import { filterProducts } from "../utils";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function FilterInputHero({ products }) {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredProducts = filterProducts(products, searchTerm);

  return (
    <div>
      <input
        type="text"
        placeholder="Search for products..."
        className="w-full mt-4 py-3 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-900"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
          }
        }}
      />
      {searchTerm && (
        <ul className="mt-0 bg-white border border-gray-300 rounded-md">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <li
                key={product.id}
                className="p-2 border-b last:border-b-0 text-left hover:bg-zinc-100"
              >
                <Link to={`/product/${product.id}`}>{product.title}</Link>
              </li>
            ))
          ) : (
            <li className="p-2 border-b last:border-b-0 text-left">
              No results..
            </li>
          )}
        </ul>
      )}
    </div>
  );
}

FilterInputHero.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
