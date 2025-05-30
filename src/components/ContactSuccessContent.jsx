import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function ContactSuccessContent({ fullName, subject, email, message }) {
  return (
    <div className="container mx-auto p-4 flex-grow max-w-lg">
      <main className="text-left">
        <h1 className="text-3xl mb-4">Thank You for Contacting Us!</h1>
        <p className="mb-6">
          We have received your message and will get back to you shortly.
        </p>
        <div className="max-w-lg mx-auto text-left mb-8">
          <p>
            <strong>Full Name:</strong> {fullName}
          </p>
          <p>
            <strong>Subject:</strong> {subject}
          </p>
          <p>
            <strong>Email:</strong> {email}
          </p>
          <p>
            <strong>Message:</strong> {message}
          </p>
        </div>
        <Link
          to="/"
          className="mt-4 bg-zinc-900 text-white px-4 py-2 rounded-md hover:bg-zinc-800"
        >
          Back to Home
        </Link>
      </main>
    </div>
  );
}

ContactSuccessContent.propTypes = {
  fullName: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default ContactSuccessContent;
