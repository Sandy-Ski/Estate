// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-afde6.firebaseapp.com",
  projectId: "mern-estate-afde6",
  storageBucket: "mern-estate-afde6.appspot.com",
  messagingSenderId: "740188547525",
  appId: "1:740188547525:web:f6252115103822acab83ac"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);