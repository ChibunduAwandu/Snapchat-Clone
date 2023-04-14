//import firebase from "firebase";
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage,  ref, uploadBytes } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBBa5Cm9OYaAZc2rNvufupm3sFB5HXbDuI",
    authDomain: "snapchat-clone-yt-f794f.firebaseapp.com",
    projectId: "snapchat-clone-yt-f794f",
    storageBucket: "snapchat-clone-yt-f794f.appspot.com",
    messagingSenderId: "848216289452",
    appId: "1:848216289452:web:79b1342dc051d3057a6f09"
  };

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
const storage = getStorage();
const provider = new GoogleAuthProvider();



export {db, auth, storage, provider};
