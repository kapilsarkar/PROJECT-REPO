import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Browse = () => {
  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.error("Logout failed:", error.message);
    }
  };

  const user = auth.currentUser;
  const displayName = user?.displayName || "User";
  const email = user?.email || "Not Provided";

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-indigo-700 via-blue-800 to-indigo-900 flex flex-col items-center justify-center text-white px-4">
      {/* Welcome Section */}
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl shadow-2xl p-8 md:p-12 w-full max-w-md text-center">
        <h1 className="text-4xl font-bold mb-4">
          Welcome, <span className="text-yellow-400">{displayName}</span> 👋
        </h1>
        <p className="text-white/80 text-base mb-6">
          You’ve successfully logged into your dashboard.
          <br />
          Explore your management features from here!
        </p>

        <button
          onClick={handleLogOut}
          className="bg-yellow-500 text-blue-900 font-semibold px-8 py-3 rounded-xl shadow-lg hover:bg-yellow-400 hover:shadow-yellow-400/30 transform hover:-translate-y-1 transition-all duration-300"
        >
          Log Out
        </button>
      </div>

      {/* Profile Info */}
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl shadow-lg p-8 mt-8 w-full max-w-md text-center">
        <h2 className="text-2xl font-semibold mb-4 text-yellow-400">
          Your Profile Info
        </h2>
        <div className="space-y-3 text-white/90 text-base">
          <p>
            <span className="font-semibold text-white">📧 Email Address:</span>{" "}
            {email}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Browse;
