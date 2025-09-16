import { useState } from "react";

const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setSignInForm(!isSignInForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add sign-in or sign-up handling logic here
  };

  return (
    <div className="bg-white/90 mx-auto backdrop-blur-md shadow-xl rounded-2xl p-6 sm:p-10 w-full max-w-md">
      {/* Heading */}
      <h2 className="text-3xl font-extrabold text-center text-yellow-700 mb-6 tracking-wide">
        {isSignInForm ? "Sign In" : "Sign Up"}
      </h2>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center gap-4"
      >
        {!isSignInForm && (
          <>
            <input
              type="text"
              name="FullName"
              placeholder="Full Name"
              className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
            <input
              type="tel"
              name="mobile"
              placeholder="Mobile Number"
              className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="E-Mail"
              className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
          </>
        )}

        <input
          type="text"
          placeholder="Username"
          name="username"
          className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          required
        />
        <input
          type="password"
          autoComplete="off"
            name="password"
          placeholder="Password"
          className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          required
        />
        {!isSignInForm && (
          <input
            type="confirm_password"
            autoComplete="off"
            name="password"
            placeholder="ConFirm Password"
            className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          />
        )}

        <button
          type="submit"
          className="p-3 bg-yellow-500 hover:bg-yellow-600 transition-all text-white font-semibold rounded-md shadow-md"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
      </form>

      {/* Toggle Link */}
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
    </div>
  );
};

export default Login;
