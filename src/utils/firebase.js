// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWFqJRhNznuGHzJFgCY_70qWjsJ2okT3o",
  authDomain: "sagarnetflixgpt.firebaseapp.com",
  projectId: "sagarnetflixgpt",
  storageBucket: "sagarnetflixgpt.firebasestorage.app",
  messagingSenderId: "900666234967",
  appId: "1:900666234967:web:c5eb6da575d6a27056ab12"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();