// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7smmSGBMtWhcmdeNvxj5lqvr5Bsa2zuY",
  authDomain: "shoes-hub-d14aa.firebaseapp.com",
  projectId: "shoes-hub-d14aa",
  storageBucket: "shoes-hub-d14aa.firebasestorage.app",
  messagingSenderId: "1002109203798",
  appId: "1:1002109203798:web:0b3ccbb9ce1233b16452f7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth}