import Login from "./components/Login";

function App() {
  return (
    <>
      <div
        className="w-full h-screen flex flex-col justify-center items-center bg-indigo-500"
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

        {/* Content */}
        <div className="relative z-10 w-11/12 sm:w-3/4 md:w-1/2 lg:w-1/3 bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-white/20">
          <h2 className="text-center text-4xl font-bold text-white mb-6 tracking-wide drop-shadow-lg">
            MANAGEMENT APP
          </h2>

          <Login />
        </div>
      </div>
    </>
  );
}

export default App;
