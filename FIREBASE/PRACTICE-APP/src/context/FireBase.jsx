/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, set, ref } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDH8Ym65_xB3IgVDOFzQOkKQO5wA8n-7Sw",
  authDomain: "practice-app-5e901.firebaseapp.com",
  projectId: "practice-app-5e901",
  storageBucket: "practice-app-5e901.firebasestorage.app",
  messagingSenderId: "15077251721",
  appId: "1:15077251721:web:59e26f32cc80eec7630458",
  measurementId: "G-KK61K96JSX",
  databaseURL: "https://practice-app-5e901-default-rtdb.firebaseio.com/",
};

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const database = getDatabase(firebaseApp);

const signUpUserWithEMailAndPassword = (email, password) => {
  return createUserWithEmailAndPassword(firebaseAuth, email, password);
};

const FireBaseContext = createContext(null);

const putData = (key, data) => set((ref(database, key), data));

export const useFireBase = () => useContext(FireBaseContext);

export const FireBaseProvider = (props) => {
  return (
    <FireBaseContext.Provider
      value={{ signUpUserWithEMailAndPassword, putData }}
    >
      {props.children}
    </FireBaseContext.Provider>
  );
};
