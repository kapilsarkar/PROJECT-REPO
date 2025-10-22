import { useState } from "react";

const Body = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div className="flex items-center justify-center  bg-gradient-to-br from-green-600 via-green-600 to-indigo-900 rounded-xl">
      <div className="w-full max-w-md bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-indigo-100">
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">
          {isSignInForm ? "Log In" : "Sign Up"}
        </h2>

        <form className="py-2 px-3">
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
              type="password"
              placeholder="Enter your password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 mt-2 text-white font-semibold bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 transition-all"
          >
            {isSignInForm ? "Log In" : "Sign Up"}
          </button>
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
