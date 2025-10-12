import { Outlet } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <div className=" w-full relative min-h-screen flex flex-col bg-gradient-to-br from-indigo-600 via-blue-700 to-indigo-900 overflow-hidden">
      
      {/* Decorative Background Blobs */}
      <div className="absolute -top-10 -left-10 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 -right-10 w-[28rem] h-[28rem] bg-blue-400/30 rounded-full blur-3xl animate-pulse delay-300"></div>

      {/* Header */}
      <header className="sticky top-0 z-30 w-full bg-white/5 backdrop-blur-lg border-b border-white/10 shadow-md">
        <Header />
      </header>

      {/* Main Content */}
      <main className="w-full flex-grow flex items-center justify-center px-4 py-10 z-10">
        <div className="w-full  bg-white/15 backdrop-blur-2xl border border-white/20 p-8 rounded-3xl shadow-2xl hover:shadow-yellow-500/30 transition-all duration-300">
          <Outlet />
        </div>
      </main>

      {/* Footer */}
      <footer className="z-10 text-white/70 text-sm py-4 text-center bg-white/5 backdrop-blur-md border-t border-white/10">
        © {new Date().getFullYear()} <span className="font-semibold text-yellow-400">ManagementApp</span>. All Rights Reserved.
      </footer>
    </div>
  );
}

export default App;
