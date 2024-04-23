
/////////////////////////////////// firebase ///////////////////////////////////////////
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase , ref, child, get } from "firebase/database";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";

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
const db = getDatabase(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();
/////////////////////////////////// firebase ///////////////////////////////////////////

export default class Firebase {
  // constructor()
   
  async readProduct(id){
      const dbRef = ref(db);
      const url = id ? `/productList/${id}` : '/productList'
      return get(child(dbRef, url))
          .then(snapshot => {
            if (snapshot.exists()) {
              return(snapshot.val());
            } else {
              console.log("No data available");
            }
          })
          .catch(error => {
            console.error(error);
        });     
  }

  async login(){

    signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      // const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      console.log(errorCode)
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
  }

  async logout(){
    signOut(auth).then(() => {
      // Sign-out successful.
      console.log("logout")
    }).catch((error) => {
      // An error happened.
    });
  }

  async isLogin(){
    
  }



}