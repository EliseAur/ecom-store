import PropTypes from "prop-types";

export default function FilterInputMainSection({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Search for products..."
      className="w-full mt-4 py-3 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-900"
      value={value}
      onChange={onChange}
      // onKeyDown={onKeyDown}
    />
  );
}

FilterInputMainSection.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func.isRequired,
};
