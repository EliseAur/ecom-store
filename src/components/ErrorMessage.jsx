import PropTypes from "prop-types";

function ErrorMessage({ message, status, statusCode }) {
  return (
    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
      <strong className="font-bold">Error: </strong>
      <span className="block sm:inline">{message}</span>
      {status && <p>Status: {status}</p>}
      {statusCode && <p>Status code: {statusCode}</p>}
    </div>
  );
}

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
  status: PropTypes.string,
  statusCode: PropTypes.number,
};

export default ErrorMessage;
