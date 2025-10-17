/* eslint-disable no-unused-vars */
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../utils/firebase";

const auth = getAuth(app);

const SignUpUser = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const createUser = () => {
    createUserWithEmailAndPassword(auth, email, password).then((value) =>
      alert("Success")
    );
  };

  return (
    <>
      <div>
        <h2>SignUpUser</h2>
        <label>E-mail</label>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
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
        <button onClick={createUser}>Sign Up</button>
      </div>
    </>
  );
};

export default SignUpUser;
