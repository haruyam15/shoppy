/////////////////////////////////// firebase ///////////////////////////////////////////
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEuO49CPNsZA-ug8K3dIJfnF0SAnZk5ho",
  authDomain: "shoppy-e2250.firebaseapp.com",
  databaseURL: "https://shoppy-e2250-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "shoppy-e2250",
  storageBucket: "shoppy-e2250.appspot.com",
  messagingSenderId: "439335517980",
  appId: "1:439335517980:web:e5dcef944720a024ee84d9",
  measurementId: "G-MRMWLG42DQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
export const db = getDatabase(app);
/////////////////////////////////// firebase ///////////////////////////////////////////