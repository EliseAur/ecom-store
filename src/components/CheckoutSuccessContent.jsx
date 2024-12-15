import { Link } from "react-router-dom";

function CheckoutSuccessContent() {
  return (
    <div className="container p-4 mx-auto text-center flex-grow max-w-lg">
      <div className="mb-8">
        <h1 className="text-3xl mb-4">Thank you for your purchase!</h1>
        <p>
          Your order has been successfully processed. You will receive an email
          confirmation shortly.
        </p>
      </div>

      <div className="my-5">
        <Link
          to="/"
          className="mt-4 bg-zinc-900 text-white px-4 py-2 rounded-md hover:bg-zinc-800"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}

export default CheckoutSuccessContent;
