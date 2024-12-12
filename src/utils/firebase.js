// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBj2envo2pYC0G-kQ34YbXdtfx6ird6BGg",
  authDomain: "netflixgpt-db604.firebaseapp.com",
  projectId: "netflixgpt-db604",
  storageBucket: "netflixgpt-db604.firebasestorage.app",
  messagingSenderId: "30805417293",
  appId: "1:30805417293:web:bf3578e4861bf9601d6b04",
  measurementId: "G-WL12819DKC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
