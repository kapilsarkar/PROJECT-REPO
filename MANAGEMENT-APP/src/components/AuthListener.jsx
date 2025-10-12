// src/components/AuthListener.jsx
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { auth } from "../utils/firebase";

const AuthListener = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // 🔥 Listen for changes in Firebase auth state
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // ✅ If logged in, add user to Redux
        dispatch(
          addUser({
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL || null,
          })
        );
      } else {
        // 🚪 If logged out, clear Redux user
        dispatch(removeUser());
      }
    });

    // Cleanup when component unmounts
    return () => unsubscribe();
  }, [dispatch]);

  return null; // This component doesn’t render anything
};

export default AuthListener;
