import Header from "./components/Header";
import Login from "./components/Login";

function App() {
  return (
    <>
      {/* Background */}
      <div className="relative w-full h-screen bg-gradient-to-br from-indigo-600 via-blue-700 to-indigo-900 flex flex-col items-center overflow-hidden">
        {/* Decorative Blobs */}
        <div className="absolute top-0 left-0 w-80 h-80 bg-yellow-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-0 w-96 h-96 bg-blue-400/30 rounded-full blur-3xl animate-pulse delay-300"></div>

        {/* Header */}
        <div className="absolute top-0 w-full z-20">
          <Header />
        </div>

        {/* Main Content */}
        <div className="flex flex-1 justify-center items-center z-10 w-full px-4">
          <div className="w-full sm:w-4/5 md:w-1/2 lg:w-1/3 bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl shadow-2xl transition-all hover:shadow-yellow-500/20">
           
            <Login />
          </div>
        </div>

        {/* Footer */}
        <footer className="z-10 text-white/70 text-sm py-3">
          © {new Date().getFullYear()} ManagementApp. All Rights Reserved.
        </footer>
      </div>
    </>
  );
}

export default App;
