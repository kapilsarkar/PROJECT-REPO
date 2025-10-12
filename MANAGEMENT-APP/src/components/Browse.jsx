import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux"; // ✅ To get user info from Redux (optional)

const Browse = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user); // Optional — if you store user data in Redux

  const handleLogOut = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.error("Logout failed:", error.message);
    }
  };

  return (
    <div className="w-full">
      <div className="w-full h-screen flex justify-center items-center bg-gradient-to-br from-blue-700 via-indigo-800 to-blue-900 text-white px-4">
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl p-10   text-center">
        <h1 className="text-3xl font-bold mb-4 tracking-wide">
          Welcome,{" "}
          <span className="text-yellow-400">
            {user?.displayName || "User"}
          </span>
          👋
        </h1>
        <p className="text-white/80 mb-8 text-sm md:text-base">
          You’ve successfully logged into your dashboard.  
          Explore your management features from here!
        </p>

        <button
          onClick={handleLogOut}
          className="bg-yellow-500 text-blue-900 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-400 hover:shadow-yellow-500/30 transform hover:-translate-y-1 transition-all duration-300"
        >
          Log Out
        </button>
      </div>
    </div>

    </div>
    
  );
};

export default Browse;
