// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9nU48PIu9L0mEDbjiz9TLDebFcCznuvU",
  authDomain: "today-ac45e.firebaseapp.com",
  projectId: "today-ac45e",
  storageBucket: "today-ac45e.appspot.com",
  messagingSenderId: "713201974820",
  appId: "1:713201974820:web:e7a684ee092fa0fcec22b1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(app);