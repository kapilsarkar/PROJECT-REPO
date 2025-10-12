import { useState } from "react";
import { useFormik } from "formik";
import GoogleSignInButton from "./GoogleSignInButton";
import { SignUpSchema, LoginSchema } from "../utils"; // ✅ we’ll define both schemas
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  const toggleSignInForm = () => setIsSignInForm(!isSignInForm);

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: isSignInForm ? LoginSchema : SignUpSchema, // ✅ Dynamic schema
      onSubmit: async (values, actions) => {
        const { email, password } = values;
        try {
          if (isSignInForm) {
            // ✅ LOGIN FLOW
            const userCredential = await signInWithEmailAndPassword(
              auth,
              email,
              password
            );
            console.log("User logged in:", userCredential.user);
            alert("Login Successful!");
            navigate("/browse");
          } else {
            // ✅ SIGNUP FLOW
            const userCredential = await createUserWithEmailAndPassword(
              auth,
              email,
              password
            );
            console.log("User signed up:", userCredential.user);
            alert("Sign Up Successful!");
            navigate("/browse");
          }
          actions.resetForm();
        } catch (error) {
          console.error("Firebase Error:", error);
          alert(error.message);
        }
      },
    });

  return (
    <div className="bg-white/90 mx-auto backdrop-blur-md shadow-2xl rounded-2xl p-6 sm:p-10 w-full max-w-md mt-5 border border-white/20 transition-all duration-300 hover:shadow-yellow-500/30">
      <h2 className="text-center text-2xl font-bold p-2 text-indigo-700">
        {isSignInForm ? "Welcome Back 👋" : "Create Your Account"}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-3 mt-4">
        {/* Full Name & Mobile (Signup only) */}
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
                  : "border-gray-300 focus:ring-indigo-400"
              } focus:outline-none focus:ring-2`}
            />
            {errors.name && touched.name && (
              <p className="text-red-500 text-xs">{errors.name}</p>
            )}

            <input
              type="tel"
              name="mobile"
              value={values.mobile}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Mobile Number"
              className={`w-full px-4 py-2 rounded-lg border ${
                errors.mobile && touched.mobile
                  ? "border-red-500 focus:ring-red-400"
                  : "border-gray-300 focus:ring-indigo-400"
              } focus:outline-none focus:ring-2`}
            />
            {errors.mobile && touched.mobile && (
              <p className="text-red-500 text-xs">{errors.mobile}</p>
            )}
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
          className={`w-full px-4 py-2 rounded-lg border ${
            errors.username && touched.username
              ? "border-red-500 focus:ring-red-400"
              : "border-gray-300 focus:ring-indigo-400"
          } focus:outline-none focus:ring-2`}
        />
        {errors.username && touched.username && (
          <p className="text-red-500 text-xs">{errors.username}</p>
        )}

        {/* ✅ Always show Email field */}
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="E-Mail"
          className={`w-full px-4 py-2 rounded-lg border ${
            errors.email && touched.email
              ? "border-red-500 focus:ring-red-400"
              : "border-gray-300 focus:ring-indigo-400"
          } focus:outline-none focus:ring-2`}
        />
        {errors.email && touched.email && (
          <p className="text-red-500 text-xs">{errors.email}</p>
        )}

        {/* Password */}
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Password"
          className={`w-full px-4 py-2 rounded-lg border ${
            errors.password && touched.password
              ? "border-red-500 focus:ring-red-400"
              : "border-gray-300 focus:ring-indigo-400"
          } focus:outline-none focus:ring-2`}
        />
        {errors.password && touched.password && (
          <p className="text-red-500 text-xs">{errors.password}</p>
        )}

        {/* Confirm Password (Signup only) */}
        {!isSignInForm && (
          <>
            <input
              type="password"
              name="confirm_password"
              value={values.confirm_password}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Confirm Password"
              className={`w-full px-4 py-2 rounded-lg border ${
                errors.confirm_password && touched.confirm_password
                  ? "border-red-500 focus:ring-red-400"
                  : "border-gray-300 focus:ring-indigo-400"
              } focus:outline-none focus:ring-2`}
            />
            {errors.confirm_password && touched.confirm_password && (
              <p className="text-red-500 text-xs">{errors.confirm_password}</p>
            )}
          </>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="p-3 bg-indigo-600 hover:bg-indigo-700 active:scale-95 transition-all duration-300 text-white font-semibold rounded-md shadow-md w-full mt-4"
        >
          {isSignInForm ? "Log In" : "Sign Up"}
        </button>
      </form>

      {/* Toggle between forms */}
      <div className="text-center mt-4">
        <p className="text-sm text-gray-700">
          {isSignInForm ? "Don’t have an account?" : "Already have an Account?"}
          <span
            className="text-indigo-600 font-semibold ml-1 cursor-pointer hover:underline"
            onClick={toggleSignInForm}
          >
            {isSignInForm ? "Sign Up" : "Log In"}
          </span>
        </p>
      </div>

      {/* Google Sign-In (Login only) */}
      {isSignInForm && (
        <div className="mt-4">
          <GoogleSignInButton
            onClick={() => console.log("Google Sign In Clicked")}
          />
        </div>
      )}
    </div>
  );
};

export default Login;
