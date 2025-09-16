import Login from "./Login";

const Body = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-yellow-100 to-yellow-400">
      {/* Header Section */}
      <header className="mb-10 text-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-yellow-800 drop-shadow-md tracking-wide">
          USER MANAGEMENT APP
        </h1>
        <p className="text-gray-700 mt-2 text-sm sm:text-base">
          Manage users with ease – Sign in or create an account below.
        </p>
      </header>

      {/* Login Form */}
      <main className="w-full flex justify-center">
        <div className="w-full ">
          <Login />
        </div>
      </main>

      {/* Footer Section */}
      <footer className="mt-10 text-center text-gray-600 text-xs">
        © {new Date().getFullYear()} Kapil Sarkar • Built with React + TailwindCSS
      </footer>
    </div>
  );
};

export default Body;

