// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: "real-estate-a7d83.firebaseapp.com",
  projectId: "real-estate-a7d83",
  storageBucket: "real-estate-a7d83.firebasestorage.app",
  messagingSenderId: "974566334218",
  appId: "1:974566334218:web:5584c204bb03d15c5824f3",
  measurementId: "G-C72LTFS5PB",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
