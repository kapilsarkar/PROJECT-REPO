/* eslint-disable no-unused-vars */
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyBN-ijxfYLaXxO-2cf7_hdWYGlWYS30lIU",
  authDomain: "userapp-f6168.firebaseapp.com",
  projectId: "userapp-f6168",
  storageBucket: "userapp-f6168.appspot.com", // ✅ FIXED
  messagingSenderId: "402090932016",
  appId: "1:402090932016:web:938fb6a6896e84488afaf5",
  measurementId: "G-4W8VY0TRZ3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);

