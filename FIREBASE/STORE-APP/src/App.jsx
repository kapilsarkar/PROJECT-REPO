import Body from "./components/Body";

function App() {
  return (
    <div className="w-full bg-gradient-to-br from-lime-500 via-yellow-500 to-indigo-900 flex flex-col items-center">
      {/* Header */}
      <header className="w-full bg-white/10 backdrop-blur-md shadow-lg py-5 border-b border-white/20">
        <h1 className="text-center text-4xl font-extrabold tracking-wide text-white drop-shadow-lg">
          STORE<span className="text-violet-600">-APP</span>
        </h1>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center w-full p-6">
        <Body />
      </main>

      {/* Footer (Optional) */}
      <footer className="w-full text-center text-gray-300 py-3 text-sm border-t border-white/20">
        © {new Date().getFullYear()} Store-App. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
