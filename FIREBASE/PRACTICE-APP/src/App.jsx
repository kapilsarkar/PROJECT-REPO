import { getDatabase, ref, set } from "firebase/database";
import { app } from "./utils/firebase";
import "./App.css";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import SignUpUser from "./component/SignUpUser";
import SignIn from "./component/SignIn";

const db = getDatabase(app);
const auth = getAuth(app);

function App() {
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
  return (
    <>
      <h2>Firebase React-App(Practice)</h2>
      <button onClick={putData}>Put Data</button>
      <button onClick={signUpUser}>Create User</button>
      <SignUpUser />
      <SignIn />
    </>
  );
}

export default App;
