import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAQOtUGiF9VHsfkXW66GMD_rFGeAGSyS_E",
  authDomain: "devto-1816d.firebaseapp.com",
  projectId: "devto-1816d",
  storageBucket: "devto-1816d.appspot.com",
  messagingSenderId: "133201442579",
  appId: "1:133201442579:web:ecc58bbc6384ff675c0ce6",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export const firestore = firebase.firestore();
export const storage = firebase.storage();
