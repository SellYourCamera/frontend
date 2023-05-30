// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdybPiw_kgSKTgWnkGn4hYTxJel4Hb89c",
  authDomain: "cam-mart-baea1.firebaseapp.com",
  projectId: "cam-mart-baea1",
  storageBucket: "cam-mart-baea1.appspot.com",
  messagingSenderId: "792881091634",
  appId: "1:792881091634:web:ae21cb1f76db55a037d82b",
  measurementId: "G-60N3CT7E8W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);