// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbwxeR5kKQMje35xWd0tzFqoUDsn8O0aU",
  authDomain: "react-firebase-app-9d7e2.firebaseapp.com",
  projectId: "react-firebase-app-9d7e2",
  storageBucket: "react-firebase-app-9d7e2.firebasestorage.app",
  messagingSenderId: "692581606913",
  appId: "1:692581606913:web:70e44232138f1ad7778200"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
