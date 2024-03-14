// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "process.env.FIREBASE",
  authDomain: "blog-49565.firebaseapp.com",
  projectId: "blog-49565",
  storageBucket: "blog-49565.appspot.com",
  messagingSenderId: "400068879287",
  appId: "1:400068879287:web:dd9d2cc213e71e8bb6fe32"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);