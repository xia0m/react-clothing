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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
