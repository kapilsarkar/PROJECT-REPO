import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import GoogleSignInButton from "./GoggleSignInButton";
import { auth, db } from "../utils/firebase"; 
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

// Schemas
const signInSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const signUpSchema = Yup.object({
  FullName: Yup.string().required("Full name is required"),
  mobile: Yup.string().required("Mobile number is required"),
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(6, "Min 6 characters").required("Password is required"),
  confirm_password: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm your password"),
});

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const formik = useFormik({
    initialValues: {
      FullName: "",
      mobile: "",
      username: "",
      email: "",
      password: "",
      confirm_password: "",
    },
    validationSchema: isSignInForm ? signInSchema : signUpSchema,
    onSubmit: async (vals) => {
      try {
        // Trim all strings
        const email = vals.email.trim();
        const password = vals.password;
        const FullName = vals.FullName?.trim();
        const mobile = vals.mobile?.trim();
        const username = vals.username?.trim();

        if (isSignInForm) {
          if (!email || !password) {
            alert("Email and password are required.");
            return;
          }
          const userCredential = await signInWithEmailAndPassword(auth, email, password);
          console.log("Signed in:", userCredential.user);
          alert("Sign In Successful");
        } else {
          if (!email || !password || !FullName || !mobile || !username) {
            alert("Please fill all required fields.");
            return;
          }

          const userCredential = await createUserWithEmailAndPassword(auth, email, password);
          const user = userCredential.user;

          const userData = {
            FullName,
            mobile,
            username,
            email,
            createdAt: new Date(),
          };

          console.log("Writing to Firestore:", userData);
          await setDoc(doc(db, "users", user.uid), userData);

          console.log("User created & saved:", user.uid);
          alert("Sign Up Successful & Data Saved");
        }
      } catch (error) {
        console.error("Auth Error:", error.code, error.message);
        alert(`Error: ${error.message}`);
      }
    },
  });

  const { values, errors, touched, handleChange, handleBlur, handleSubmit, resetForm } = formik;

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
    resetForm();
  };

  return (
    <div className="bg-white/90 mx-auto backdrop-blur-md shadow-xl rounded-2xl p-6 sm:p-10 w-full max-w-md">
      <h2 className="text-3xl font-extrabold text-center text-yellow-700 mb-6 tracking-wide">
        {isSignInForm ? "Sign In" : "Sign Up"}
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {!isSignInForm && (
          <>
            <div>
              <input
                type="text"
                name="FullName"
                placeholder="Full Name"
                value={values.FullName}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`p-3 rounded-md border focus:outline-none focus:ring-2 w-full ${
                  errors.FullName && touched.FullName
                    ? "border-red-500 focus:ring-red-400"
                    : "border-gray-300 focus:ring-yellow-400"
                }`}
              />
              {errors.FullName && touched.FullName && (
                <p className="text-red-500 text-sm mt-1">{errors.FullName}</p>
              )}
            </div>

            <div>
              <input
                type="tel"
                name="mobile"
                placeholder="Mobile Number"
                value={values.mobile}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`p-3 rounded-md border focus:outline-none focus:ring-2 w-full ${
                  errors.mobile && touched.mobile
                    ? "border-red-500 focus:ring-red-400"
                    : "border-gray-300 focus:ring-yellow-400"
                }`}
              />
              {errors.mobile && touched.mobile && (
                <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>
              )}
            </div>

            <div>
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`p-3 rounded-md border focus:outline-none focus:ring-2 w-full ${
                  errors.username && touched.username
                    ? "border-red-500 focus:ring-red-400"
                    : "border-gray-300 focus:ring-yellow-400"
                }`}
              />
              {errors.username && touched.username && (
                <p className="text-red-500 text-sm mt-1">{errors.username}</p>
              )}
            </div>
          </>
        )}

        <div>
          <input
            type="email"
            name="email"
            placeholder="E-Mail"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`p-3 rounded-md border focus:outline-none focus:ring-2 w-full ${
              errors.email && touched.email
                ? "border-red-500 focus:ring-red-400"
                : "border-gray-300 focus:ring-yellow-400"
            }`}
          />
          {errors.email && touched.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        <div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`p-3 rounded-md border focus:outline-none focus:ring-2 w-full ${
              errors.password && touched.password
                ? "border-red-500 focus:ring-red-400"
                : "border-gray-300 focus:ring-yellow-400"
            }`}
          />
          {errors.password && touched.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password}</p>
          )}
        </div>

        {!isSignInForm && (
          <div>
            <input
              type="password"
              name="confirm_password"
              placeholder="Confirm Password"
              value={values.confirm_password}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`p-3 rounded-md border focus:outline-none focus:ring-2 w-full ${
                errors.confirm_password && touched.confirm_password
                  ? "border-red-500 focus:ring-red-400"
                  : "border-gray-300 focus:ring-yellow-400"
              }`}
            />
            {errors.confirm_password && touched.confirm_password && (
              <p className="text-red-500 text-sm mt-1">{errors.confirm_password}</p>
            )}
          </div>
        )}

        <button
          type="submit"
          className="p-3 bg-yellow-500 hover:bg-yellow-600 transition-all text-white font-semibold rounded-md shadow-md"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
      </form>

      <div className="text-center mt-4">
        <p className="text-sm text-gray-700">
          {isSignInForm ? "Don’t have an account?" : "Already a Member?"}
          <span
            className="text-yellow-600 font-semibold ml-1 cursor-pointer hover:underline"
            onClick={toggleSignInForm}
          >
            {isSignInForm ? "Sign Up" : "Sign In"}
          </span>
        </p>
      </div>

      {isSignInForm && (
        <GoogleSignInButton onClick={() => console.log("Google Sign In Clicked")} />
      )}
    </div>
  );
};

export default Login;
