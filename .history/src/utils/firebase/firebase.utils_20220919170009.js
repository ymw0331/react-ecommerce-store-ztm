import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdJ8LQr6OvHLZJ9uEreVNdwdJiH8xjuOA",
  authDomain: "react-ecommerce-db-b4f80.firebaseapp.com",
  projectId: "react-ecommerce-db-b4f80",
  storageBucket: "react-ecommerce-db-b4f80.appspot.com",
  messagingSenderId: "783925376127",
  appId: "1:783925376127:web:7702d3d26147a0084cfb4a",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) =>{
    // Check if there is existing referenced document
    const userDocRef = doc(db, 'users', )
}
