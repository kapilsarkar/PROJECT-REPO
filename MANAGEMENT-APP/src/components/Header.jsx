/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in

        const { uid, email, displayName, username, mobile, password } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            mobile: mobile,
            username: username,
            password: password,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
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
