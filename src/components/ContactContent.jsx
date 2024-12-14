import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import PropTypes from "prop-types";

const schema = yup
  .object({
    fullName: yup
      .string()
      .min(3, "Your full name should be at least 3 characters.")
      .required("Please enter your full name"),
    subject: yup
      .string()
      .min(3, "Your subject should be at least 3 characters.")
      .required("Please enter a subject"),
    email: yup
      .string()
      .email("Please enter a valid email address")
      .required("Please enter your email address"),
    message: yup
      .string()
      .min(3, "Your message should be at least 3 characters.")
      .required("Please enter your message"),
  })
  .required();

function ContactContent({ onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <div className="container mx-auto p-4 flex-grow">
      <main className="text-center">
        <h1 className="text-3xl mb-4">Contact</h1>
        <p className="mb-6">
          If you have any questions, please fill out the form and contact us
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto">
          <div className="grid grid-cols-1 gap-4 mb-4">
            <div className="text-left">
              <label
                htmlFor="fullName"
                className="block text-sm font-bold text-gray-700"
              >
                Full name
              </label>
              <input
                id="fullName"
                type="text"
                placeholder="Full name"
                {...register("fullName")}
                className="mt-1 p-2 border border-gray-300 rounded w-full"
              />
              <p className="text-red-600 text-sm">{errors.fullName?.message}</p>
            </div>
            <div className="text-left">
              <label
                htmlFor="subject"
                className="block font-bold text-sm text-gray-700"
              >
                Subject
              </label>
              <input
                id="subject"
                type="text"
                placeholder="Subject"
                {...register("subject")}
                className="mt-1 p-2 border border-gray-300 rounded w-full"
              />
              <p className="text-red-600 text-sm">{errors.subject?.message}</p>
            </div>
            <div className="text-left">
              <label
                htmlFor="email"
                className="block text-sm font-bold text-gray-700"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Email"
                {...register("email")}
                className="mt-1 p-2 border border-gray-300 rounded w-full"
              />
              <p className="text-red-600 text-sm">{errors.email?.message}</p>
            </div>
          </div>
          <div className="text-left">
            <label
              htmlFor="message"
              className="block text-sm font-bold text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              cols="30"
              rows="5"
              placeholder="Message"
              {...register("message")}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
            ></textarea>
            <p className="text-red-600 text-sm">{errors.message?.message}</p>
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white p-2 mt-4 w-full rounded hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      </main>
    </div>
  );
}

ContactContent.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactContent;
