/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // ✅ Correct import

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKhMRPvlgx-xUKUTWTSm5m4ZMos7DxFNY",
  authDomain: "store-app-37bec.firebaseapp.com",
  projectId: "store-app-37bec",
  storageBucket: "store-app-37bec.firebasestorage.app",
  messagingSenderId: "986281539407",
  appId: "1:986281539407:web:eb179250dd32adc9ccf73a",
  measurementId: "G-5M6BZMWNED",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app); // ✅ pass `app` instance
export default app;