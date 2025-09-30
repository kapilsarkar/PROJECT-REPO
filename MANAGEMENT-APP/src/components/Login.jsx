import { useState } from "react";

const Login = () => {
  const [isSignInForm, setIsSignForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignForm(!isSignInForm);
  };
  return (
    <>
    
      <div className="bg-white/90 mx-auto backdrop-blur-md shadow-xl rounded-2xl p-6 sm:p-10 w-full max-w-md">
        <h2 className="text-center text-xl font-bold p-2">
          {isSignInForm ? "Log In" : "Sign Up"}
        </h2>
        <form>
          <div className=" p-3 shadow-lg">
            {!isSignInForm && (
              <>
                <input
                  type="text"
                  name="FullName"
                  placeholder="Full Name"
                  className="p-3 mt-2 rounded-md border focus:outline-none focus:ring-2 w-full"
                />
                <input
                  type="tel"
                  name="mobile"
                  placeholder="Mobile Number"
                  className="p-3 mt-2 rounded-md border focus:outline-none focus:ring-2 w-full"
                />
              </>
            )}

            <input
              type="text"
              name="username"
              placeholder="Username"
              className="p-3 mt-2 rounded-md border focus:outline-none focus:ring-2 w-full"
            />
            {!isSignInForm && (
              <input
                type="email"
                name="email"
                placeholder="E-Mail"
                className="p-3 mt-2 rounded-md border focus:outline-none focus:ring-2 w-full"
              />
            )}

            <input
              type="password"
              name="password"
              placeholder="Password"
              className="p-3 mt-2 rounded-md border focus:outline-none focus:ring-2 w-full"
            />
            {!isSignInForm && (
              <>
                <input
                  type="password"
                  name="confirm_password"
                  placeholder="Confirm Password"
                  className="p-3 mt-2 rounded-md border focus:outline-none focus:ring-2 w-full"
                />
              </>
            )}

            <button
              type="submit"
              className="p-3 bg-yellow-500 hover:bg-yellow-600 transition-all text-white font-semibold rounded-md shadow-md w-full mt-2"
            >
              {isSignInForm ? "Log In" : "Sign Up"}
            </button>
          </div>
        </form>
        <div className="text-center mt-4">
          <p className="text-sm text-gray-700">
            {isSignInForm
              ? "Don’t have an account?"
              : "Already have an Account"}
            <span
              className="text-yellow-600 font-semibold ml-1 cursor-pointer hover:underline"
              onClick={toggleSignInForm}
            >
              {isSignInForm ? "Sign Up" : "Log In"}
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
