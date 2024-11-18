// import React from "react";

// export default function FilterInput({ value, onChange }) {
//   return <input type="text" placeholder="Search for products..." className="mt-4 p-2 border border-gray-300 rounded-md" value={value} onChange={onChange} />;
// }

import PropTypes from "prop-types";

export default function FilterInput({ value, onChange }) {
  return <input type="text" placeholder="Search for products..." className="mt-4 p-2 border border-gray-300 rounded-md" value={value} onChange={onChange} />;
}

FilterInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
