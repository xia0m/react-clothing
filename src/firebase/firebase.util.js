import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDWcCbYMrCZ1KbQYlgNMvpvfqYUyAwrHyE",
  authDomain: "clothing-db-9ccdc.firebaseapp.com",
  databaseURL: "https://clothing-db-9ccdc.firebaseio.com",
  projectId: "clothing-db-9ccdc",
  storageBucket: "",
  messagingSenderId: "861356624688",
  appId: "1:861356624688:web:21ffab87b0b1a131c9d6f5",
  measurementId: "G-RXCHPBWRWJ"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ propmpt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
