import { useState } from "react";
import { useFireBase } from "../context/FireBase";

const NewSignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const firebase = useFireBase();
  console.log("FireBase", firebase);

  return (
    <>
      <div>
        <h2>New Sign Up</h2>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Your EMail"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Your Password"
        />
        <button
          onClick={() => {
            firebase.signUpUserWithEMailAndPassword(email, password);
            firebase.putData("users/" + "RohitSharma", { email, password });
          }}
        >
          Sign Up
        </button>
      </div>
    </>
  );
};

export default NewSignUp;
