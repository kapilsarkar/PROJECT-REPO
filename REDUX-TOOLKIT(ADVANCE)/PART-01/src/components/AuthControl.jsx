import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../slices/authSlice";

const AuthControl = () => {
  const dispatch = useDispatch();
  const { isLoggedIn, user } = useSelector((state) => state.auth);

  const handleLogin = () => {
    const userData = { name: "Kapil Sarkar", email: "kapil@gmail.com" };
    dispatch(login(userData));
  };
  return (
    <>
      <h2>Authentication Control</h2>
      <div>
        {isLoggedIn ? (
          <>
            <h2>Welcome:{user.name} </h2>
            <p>EMail:{user.email}</p>
            <button
              className="py-3 px-2 bg-green-700 text-white rounded-xl"
              onClick={() => dispatch(logout())}
            >
              LogOut
            </button>
          </>
        ) : (
          <button
            onClick={handleLogin}
            className="py-3 px-2 bg-blue-700 text-white rounded-xl"
          >
            LogIn
          </button>
        )}
      </div>
    </>
  );
};

export default AuthControl;
