import { Link } from "react-router-dom";

function CheckoutSuccessContent() {
  return (
    <div className="container p-4 mx-auto text-center">
      <div className="mb-5">
        <h1 className="text-3xl">Thank you for your purchase!</h1>
        <p>
          Your order has been successfully processed. You will receive an email
          confirmation shortly.
        </p>
      </div>

      <div className="my-5">
        <Link
          to="/"
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}

export default CheckoutSuccessContent;
