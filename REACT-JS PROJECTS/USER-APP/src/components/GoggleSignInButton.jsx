import { FcGoogle } from "react-icons/fc";

const GoogleSignInButton = ({ onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex items-center justify-center gap-3 w-full p-3 mt-4 border border-gray-300 rounded-md shadow-sm hover:shadow-md transition-all bg-white hover:bg-gray-50"
    >
      <FcGoogle size={22} />
      <span className="text-gray-700 font-medium">Sign in with Google</span>
    </button>
  );
};

export default GoogleSignInButton;
