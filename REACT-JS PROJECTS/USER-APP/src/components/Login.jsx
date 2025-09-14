const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-200 to-yellow-500">
      <div className="bg-white/90 backdrop-blur-md shadow-xl rounded-2xl p-8 sm:p-10 w-11/12 sm:w-2/3 md:w-1/3 lg:w-1/4">
        <h2 className="text-2xl font-bold text-center text-yellow-700 mb-6">
          Welcome Back
        </h2>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Username"
            className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <button
            type="submit"
            className="p-3 bg-yellow-500 hover:bg-yellow-600 transition-all text-white font-semibold rounded-md shadow-md"
          >
            Sign In
          </button>
        </form>

        <div className="text-center mt-4">
          <p className="text-sm text-gray-700">
            Don’t have an account?
            <span className="text-yellow-600 font-semibold ml-1 cursor-pointer hover:underline">
              Sign Up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
