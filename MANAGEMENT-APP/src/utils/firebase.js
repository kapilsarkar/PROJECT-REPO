/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCaT3T4--mKkerntzpgqWQxaNtwUhbJ3YI",
  authDomain: "management-app-4e795.firebaseapp.com",
  projectId: "management-app-4e795",
  storageBucket: "management-app-4e795.firebasestorage.app",
  messagingSenderId: "933642820525",
  appId: "1:933642820525:web:c7369f81abf7ef4c3a5f24",
  measurementId: "G-WR3VY6H68X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);