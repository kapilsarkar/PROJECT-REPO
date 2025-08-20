import { useEffect, useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import { toggleTheme } from "../utils/themeSlice";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const isDarkMode = useSelector((store) => store.theme.darkMode);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const cartItems = useSelector((state) => state.cart.items);
  return (
    <header className="w-full shadow-md dark:bg-gray-900 dark:text-white text-black bg-white fixed top-0 left-0 z-50">
      <div className="max-w-7xl flex justify-between items-center px-4 py-4 mx-auto">
        <h1 className="text-3xl font-extrabold tracking-wide">
          FASHION <span className="text-3xl text-red-500">CUBE</span>
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 items-center text-lg font-medium">
          <Link to="/" className="hover:text-red-500 transition">
            Home
          </Link>
          <Link
            to="/cart"
            className="flex items-center hover:text-red-500 transition"
          >
            Cart <FaCartShopping className="ml-2" /> {cartItems.length}
          </Link>
          <button
            onClick={() => dispatch(toggleTheme())}
            className="p-2 border-2 bg-white text-black dark:bg-gray-950 dark:text-white rounded"
            aria-label="Toggle Theme"
          >
            {isDarkMode ? <MdOutlineLightMode /> : <MdDarkMode />}
          </button>
        </nav>

        {/* Hamburger Icon (Mobile) */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-2xl"
            aria-label="Toggle Menu"
          >
            {menuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <div className="md:hidden dark:bg-gray-900 dark:text-white text-black bg-white px-4 py-4 shadow-md border-t">
          <ul className="flex flex-col gap-4 text-lg font-medium">
            <li>
              <Link
                to="/"
                onClick={() => setMenuOpen(false)}
                className="hover:text-red-500"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/cart"
                onClick={() => setMenuOpen(false)}
                className="flex items-center hover:text-red-500"
              >
                Cart <FaCartShopping className="ml-2" />
              </Link>
            </li>
          </ul>
          <button
            onClick={() => dispatch(toggleTheme())}
            className="mt-4 p-2 border-2 bg-white text-black dark:bg-gray-950 dark:text-white rounded"
            aria-label="Toggle Theme"
          >
            {isDarkMode ? <MdOutlineLightMode /> : <MdDarkMode />}
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
