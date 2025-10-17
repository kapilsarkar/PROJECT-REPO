import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../utils/firebase";

const auth = getAuth(app);

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const SignInUser = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((value) => console.log("Sign In Success", value))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div>
        <h2>Sign In</h2>
        <label>Enter Your E-Mail</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Enter Your E-Mail Here"
        />

        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder="Enter Your Password Here"
        />
        <button onClick={SignInUser}>Sign In</button>
      </div>
    </>
  );
};
export default SignIn;
