import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div className="bg-green-200 min-h-screen">
        <div className="mt-2 px-3 py-2">
          
          <nav className=" flex justify-center items-center mt-2 px-2 py-3">
            <Link
              to="counter"
              className=" mx-2 px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
            >
              Counter App
            </Link>
            <Link
              to="display"
              className=" mx-2 px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
            >
              Image Display
            </Link>
          </nav>
        </div>
        <Outlet/>
      </div>
    </>
  );
}

export default App;
