import { useState } from "react";
import { useFormik } from "formik";
import GoogleSignInButton from "./GoogleSignInButton";
import { SignUpSchema } from "../utils";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
  username: "",
  mobile: "",
};

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => setIsSignInForm(!isSignInForm);

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: SignUpSchema,
      onSubmit: async (values) => {
        const { email, password } = values;
        try {
          if (isSignInForm) {
            const userCredential = await signInWithEmailAndPassword(
              auth,
              email,
              password
            );
            console.log("User logged in:", userCredential.user);
            alert("Login Successful!");
          } else {
            const userCredential = await createUserWithEmailAndPassword(
              auth,
              email,
              password
            );
            console.log("User signed up:", userCredential.user);
            alert("Sign Up Successful!");
          }
        } catch (error) {
          console.error(error);
          alert(error.message);
        }
      },
    });

  return (
    <>
      <div className="bg-white/90 mx-auto backdrop-blur-md shadow-xl rounded-2xl p-6 sm:p-10 w-full max-w-md mt-5">
        <h2 className="text-center text-xl font-bold p-2">
          {isSignInForm ? "Log In" : "Sign Up"}
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="p-3 shadow-lg">
            {/* Only show full name + mobile in Sign Up */}
            {!isSignInForm && (
              <>
                <input
                  type="text"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Full Name"
                  className={`w-full px-4 py-2 rounded-lg border ${
                    errors.name && touched.name
                      ? "border-red-500 focus:ring-red-400"
                      : "border-gray-300 focus:ring-purple-400"
                  } focus:outline-none focus:ring-2`}
                />
                {errors.name && touched.name ? (
                  <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                ) : null}

                <input
                  type="tel"
                  name="mobile"
                  value={values.mobile}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Mobile Number"
                  className={`w-full px-4 py-2 rounded-lg mt-2 border ${
                    errors.mobile && touched.mobile
                      ? "border-red-500 focus:ring-red-400"
                      : "border-gray-300 focus:ring-purple-400"
                  } focus:outline-none focus:ring-2`}
                />
                {errors.mobile && touched.mobile ? (
                  <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>
                ) : null}
              </>
            )}

            {/* Username */}
            <input
              type="text"
              name="username"
              value={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Username"
              className={`w-full px-4 py-2 rounded-lg mt-2 border ${
                errors.username && touched.username
                  ? "border-red-500 focus:ring-red-400"
                  : "border-gray-300 focus:ring-purple-400"
              } focus:outline-none focus:ring-2`}
            />
            {errors.username && touched.username ? (
              <p className="text-red-500 text-xs mt-1">{errors.username}</p>
            ) : null}

            {/* Email only in Sign Up */}
            {!isSignInForm && (
              <>
                <input
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="E-Mail"
                  className={`w-full px-4 py-2 rounded-lg mt-2 border ${
                    errors.email && touched.email
                      ? "border-red-500 focus:ring-red-400"
                      : "border-gray-300 focus:ring-purple-400"
                  } focus:outline-none focus:ring-2`}
                />
                {errors.email && touched.email ? (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                ) : null}
              </>
            )}

            {/* Password */}
            <input
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Password"
              className={`w-full px-4 py-2 rounded-lg mt-2 border ${
                errors.password && touched.password
                  ? "border-red-500 focus:ring-red-400"
                  : "border-gray-300 focus:ring-purple-400"
              } focus:outline-none focus:ring-2`}
            />
            {errors.password && touched.password ? (
              <p className="text-red-500 text-xs mt-1">{errors.password}</p>
            ) : null}

            {/* Confirm Password only in Sign Up */}
            {!isSignInForm && (
              <>
                <input
                  type="password"
                  name="confirm_password"
                  value={values.confirm_password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Confirm Password"
                  className={`w-full px-4 py-2 rounded-lg mt-2 border ${
                    errors.confirm_password && touched.confirm_password
                      ? "border-red-500 focus:ring-red-400"
                      : "border-gray-300 focus:ring-purple-400"
                  } focus:outline-none focus:ring-2`}
                />
                {errors.confirm_password && touched.confirm_password ? (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.confirm_password}
                  </p>
                ) : null}
              </>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="p-3 bg-yellow-500 hover:bg-yellow-600 transition-all text-white font-semibold rounded-md shadow-md w-full mt-4"
            >
              {isSignInForm ? "Log In" : "Sign Up"}
            </button>
          </div>
        </form>

        {/* Switch between login / signup */}
        <div className="text-center mt-4">
          <p className="text-sm text-gray-700">
            {isSignInForm
              ? "Don’t have an account?"
              : "Already have an Account?"}
            <span
              className="text-yellow-600 font-semibold ml-1 cursor-pointer hover:underline"
              onClick={toggleSignInForm}
            >
              {isSignInForm ? "Sign Up" : "Log In"}
            </span>
          </p>
        </div>

        {/* Google Sign In only in Login */}
        {isSignInForm && (
          <GoogleSignInButton
            onClick={() => console.log("Google Sign In Clicked")}
          />
        )}
      </div>
    </>
  );
};

export default Login;
