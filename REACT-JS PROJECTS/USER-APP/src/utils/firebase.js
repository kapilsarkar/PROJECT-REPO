// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBN-ijxfYLaXxO-2cf7_hdWYGlWYS30lIU",
  authDomain: "userapp-f6168.firebaseapp.com",
  projectId: "userapp-f6168",
  storageBucket: "userapp-f6168.firebasestorage.app",
  messagingSenderId: "402090932016",
  appId: "1:402090932016:web:938fb6a6896e84488afaf5",
  measurementId: "G-4W8VY0TRZ3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);