import { getDatabase, ref, set } from "firebase/database";
import { app } from "./utils/firebase";
import "./App.css";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import SignUpUser from "./component/SignUpUser";
import SignIn from "./component/SignIn";
import NewSignUp from "./component/NewSignUp";
import { useEffect, useState } from "react";

const db = getDatabase(app);
const auth = getAuth(app);

function App() {
  const [user, setUser] = useState(null);

  const signUpUser = () => {
    createUserWithEmailAndPassword(auth, "kapil@gmail.com", "123456").then(
      (value) => console.log(value)
    );
  };
  const putData = () => {
    set(ref(db, "/users/kapil"), {
      id: 1,
      name: "Kapil Sarkar",
      age: "34",
    });
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        //Yes You are logged in
        console.log("Hello", user);
        setUser(user);
      } else {
        //User is Logged Out
        console.log("You are Logged Out");
        setUser(null);
      }
    });
  }, []);
  if (user === null) {
    return (
      <>
        <h2>Firebase React-App(Practice)</h2>
        <button onClick={putData}>Put Data</button>
        <button onClick={signUpUser}>Create User</button>
        <SignUpUser />
        <SignIn />
        <NewSignUp />
      </>
    );
  }

  return (
    <>
      <h2>Firebase React-App(Practice)</h2>
      <h2>Hello {user.email}</h2>
      <button onClick={() => signOut(auth)}>Log Out</button>
    </>
  );
}

export default App;
