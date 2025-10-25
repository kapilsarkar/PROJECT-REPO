import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { auth } from "../utils/firebase";

const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        // If no user, redirect to login
        navigate("/login");
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  const handleLogOut = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <>
      <div className=" w-full rounded-2xl h-[100vh] flex items-center justify-center  bg-gradient-to-br from-green-600 via-green-600 to-indigo-900">
        <div className=" w-full bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-indigo-100 text-center">
          <h2 className="text-3xl font-bold text-indigo-700 mb-4">Welcome!</h2>
          {user ? (
            <>
              <p className="text-lg text-gray-800 mb-2">
                <strong>Name : </strong>
                {user.displayName || "No Name Set"}
              </p>
              <p className="text-lg text-gray-800 mb-4">
                <strong>Email : </strong>
                   {user.email}
              </p>
            </>
          ) : (
            <p className="text-gray-600">Loading user details ...</p>
          )}
          <button
            onClick={handleLogOut}
            className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition-all"
          >
            Log Out
          </button>
        </div>
      </div>
    </>
  );
};

export default Profile;
