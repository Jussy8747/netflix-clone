// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCRwqdD2BPRy28CLNL_jk_0H-dUIbuNvc",
  authDomain: "netflix-clone-73e4e.firebaseapp.com",
  projectId: "netflix-clone-73e4e",
  storageBucket: "netflix-clone-73e4e.appspot.com",
  messagingSenderId: "1091896834939",
  appId: "1:1091896834939:web:52df27b67821a3d5b69bde",
  measurementId: "G-8P0704FQDL"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore()
