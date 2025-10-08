import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaT3T4--mKkerntzpgqWQxaNtwUhbJ3YI",
  authDomain: "management-app-4e795.firebaseapp.com",
  projectId: "management-app-4e795",
  storageBucket: "management-app-4e795.firebasestorage.app",
  messagingSenderId: "933642820525",
  appId: "1:933642820525:web:c7369f81abf7ef4c3a5f24",
  measurementId: "G-WR3VY6H68X",
};

// ✅ Initialize Firebase app
const app = initializeApp(firebaseConfig);

// ✅ Optional: initialize analytics only if running in browser
let analytics;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

// ✅ Correct: always get auth using the same app instance
export const auth = getAuth(app);
export { app, analytics };
