// utils/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCaT3T4--mKkerntzpgqWQxaNtwUhbJ3YI",
  authDomain: "management-app-4e795.firebaseapp.com",
  projectId: "management-app-4e795",
  storageBucket: "management-app-4e795.firebasestorage.app",
  messagingSenderId: "933642820525",
  appId: "1:933642820525:web:c7369f81abf7ef4c3a5f24",
  measurementId: "G-WR3VY6H68X",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
