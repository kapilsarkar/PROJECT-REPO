/* eslint-disable no-unused-vars */
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDH8Ym65_xB3IgVDOFzQOkKQO5wA8n-7Sw",
  authDomain: "practice-app-5e901.firebaseapp.com",
  projectId: "practice-app-5e901",
  storageBucket: "practice-app-5e901.firebasestorage.app",
  messagingSenderId: "15077251721",
  appId: "1:15077251721:web:59e26f32cc80eec7630458",
  measurementId: "G-KK61K96JSX",
  databaseURL:"https://practice-app-5e901-default-rtdb.firebaseio.com/"
};

export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);