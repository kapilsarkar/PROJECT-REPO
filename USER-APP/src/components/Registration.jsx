import { useFormik } from "formik";
import { signUpSchema } from "../schemas";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
};

const Registration = () => {
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    isValid,
    dirty,
  } = useFormik({
    initialValues,
    validationSchema: signUpSchema,
    onSubmit: (values) => {
      console.log("Form submitted:", values);
    },
  });

  return (
    <div className="max-w-md mx-auto mt-10 bg-white rounded-2xl shadow-lg border p-6">
      <h2 className="text-2xl font-bold text-center text-purple-600 mb-6">
        Create Account
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <input
            type="text"
            autoComplete="off"
            name="name"
            id="name"
            placeholder="Enter your name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full px-4 py-2 rounded-lg border ${
              errors.name && touched.name
                ? "border-red-500 focus:ring-red-400"
                : "border-gray-300 focus:ring-purple-400"
            } focus:outline-none focus:ring-2`}
          />
          {errors.name && touched.name ? (
            <p className="text-red-500 text-xs mt-1">{errors.name}</p>
          ) : null}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            autoComplete="off"
            name="email"
            id="email"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full px-4 py-2 rounded-lg border ${
              errors.email && touched.email
                ? "border-red-500 focus:ring-red-400"
                : "border-gray-300 focus:ring-purple-400"
            } focus:outline-none focus:ring-2`}
          />
          {errors.email && touched.email ? (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          ) : null}
        </div>

        {/* Password */}
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            autoComplete="off"
            name="password"
            id="password"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full px-4 py-2 rounded-lg border ${
              errors.password && touched.password
                ? "border-red-500 focus:ring-red-400"
                : "border-gray-300 focus:ring-purple-400"
            } focus:outline-none focus:ring-2`}
          />
          {errors.password && touched.password ? (
            <p className="text-red-500 text-xs mt-1">{errors.password}</p>
          ) : null}
        </div>

        {/* Confirm Password */}
        <div>
          <label
            htmlFor="confirm_password"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Confirm Password
          </label>
          <input
            type="password"
            autoComplete="off"
            name="confirm_password"
            id="confirm_password"
            placeholder="Re-enter your password"
            value={values.confirm_password}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full px-4 py-2 rounded-lg border ${
              errors.confirm_password && touched.confirm_password
                ? "border-red-500 focus:ring-red-400"
                : "border-gray-300 focus:ring-purple-400"
            } focus:outline-none focus:ring-2`}
          />
          {errors.confirm_password && touched.confirm_password ? (
            <p className="text-red-500 text-xs mt-1">{errors.confirm_password}</p>
          ) : null}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={!(isValid && dirty)}
          className={`w-full py-2 rounded-lg font-semibold transition ${
            isValid && dirty
              ? "bg-purple-600 text-white hover:bg-purple-700"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          Register
        </button>

        {/* Extra Option */}
        <p className="text-center text-sm text-gray-500 mt-3">
          Or{" "}
          <a href="#" className="text-purple-600 font-medium hover:underline">
            sign up with Google
          </a>
        </p>
      </form>
    </div>
  );
};

export default Registration;
