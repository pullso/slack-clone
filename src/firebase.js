// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQI2ugGybhpspoqbajXtB-FcLsXJjws7g",
  authDomain: "slack-clone-5c9b2.firebaseapp.com",
  projectId: "slack-clone-5c9b2",
  storageBucket: "slack-clone-5c9b2.appspot.com",
  messagingSenderId: "101438993366",
  appId: "1:101438993366:web:1dab05a687b1019bb56a77",
  measurementId: "G-G20ZZ5VB72"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app)

const provider = new GoogleAuthProvider();
export {auth, db, provider}
