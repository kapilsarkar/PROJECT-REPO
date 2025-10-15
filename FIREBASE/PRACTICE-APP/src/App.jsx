import { getDatabase, ref, set } from "firebase/database";
import { app } from "./utils/firebase";
import "./App.css";

const db = getDatabase(app);

function App() {
  const putData = ()=>{
    set(ref(db,"/users/kapil"),{
      id:1,
      name:"Kapil Sarkar",
      age:"34",
    })
  }
  return (
    <>
      <h2>Firebase React-App(Practice)</h2>
      <button onClick={putData}>Put Data</button>
    </>
  );
}

export default App;
