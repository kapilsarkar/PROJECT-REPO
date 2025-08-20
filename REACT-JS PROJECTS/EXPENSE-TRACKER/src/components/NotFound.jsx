import { Link } from "react-router-dom";
import { IoIosHome } from "react-icons/io";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">Oops! Page not found.</p>
      <Link
        to="/"
        className="text-blue-500 hover:underline flex items-center gap-1"
      >
        <IoIosHome className="text-xl" />
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
