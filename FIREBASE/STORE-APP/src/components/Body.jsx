import { useState } from "react";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const provider = new GoogleAuthProvider();

const Body = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  const handleSubmit = async () => {
    try {
      if (isSignInForm) {
        // 🟢 Login logic
        await signInWithEmailAndPassword(auth, email, password);
        toast.success("Login Successful");
        // 🟢 Redirect to Profile page after login
        navigate("/profile");
      } else {
        // 🟢 Sign Up logic
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        await updateProfile(userCredential.user, { displayName: name });
        toast.success("Sign Up Successful");
        setIsSignInForm(true);
      }

      // 🧹 Clear form fields after success
      setEmail("");
      setPassword("");
      setName("");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, provider);
      toast.success("Signed in with Google");
      // 🟢 Redirect to Profile page after login
      navigate("/profile");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center  bg-gradient-to-br from-green-600 via-green-600 to-indigo-900 rounded-xl">
      <div className="w-full max-w-md bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-indigo-100">
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">
          {isSignInForm ? "Log In" : "Sign Up"}
        </h2>

        <form onSubmit={(e) => e.preventDefault()} className="py-2 px-3">
          {!isSignInForm && (
            <div className="py-2">
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-700 mb-1"
              >
                Name
              </label>
              <input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Enter Your Name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
              />
            </div>
          )}

          <div className=" py-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-700 mb-1"
            >
              Email Address
            </label>
            <input
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder="Enter your password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
            />
          </div>

          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full py-3 mt-2 text-white font-semibold bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 transition-all"
          >
            {isSignInForm ? "Log In" : "Sign Up"}
          </button>
          {/* Google Sign-In (Login only) */}
          {isSignInForm && (
            <button
              onClick={handleGoogleSignIn}
              className="flex items-center justify-center w-full py-3 mt-4 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-md hover:bg-gray-100 transition-all duration-200 ease-in-out"
            >
              <img
                src="https://www.svgrepo.com/show/355037/google.svg"
                alt="Google logo"
                className="w-5 h-5 mr-3"
              />
              <span className="font-medium">Sign in with Google</span>
            </button>
          )}
        </form>

        <p className="text-center text-sm text-gray-500 mt-5">
          {isSignInForm ? "Don't have an account" : "Already have an Account"}
          <span
            href="/signup"
            onClick={toggleSignInForm}
            className="text-indigo-600 hover:underline font-medium cursor-pointer"
          >
            {isSignInForm ? "Sign Up" : "Log In"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Body;
