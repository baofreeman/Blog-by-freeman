// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-app-43651.firebaseapp.com",
  projectId: "blog-app-43651",
  storageBucket: "blog-app-43651.appspot.com",
  messagingSenderId: "6844339830",
  appId: "1:6844339830:web:81a046ef9d301035b77157",
  measurementId: "G-BX7Y5F026J",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
