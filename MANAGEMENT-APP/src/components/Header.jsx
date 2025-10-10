import { useEffect } from "react";
import {  onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";

const Header = () => {
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user;
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  }, []);
  return (
    <>
      <header className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 shadow-lg">
        <div className="max-w-7xl mx-auto flex text-center justify-between items-center px-6 py-4">
          <h1 className="text-2xl md:text-3xl font-bold text-white tracking-wide text-center">
            Management<span className="text-yellow-300">App</span>
          </h1>
        </div>
      </header>
    </>
  );
};

export default Header;
