

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgA9uyRbmBSpiP2iqJGUxk96T6BSVaRuI",
  authDomain: "simple-firebase-38de3.firebaseapp.com",
  projectId: "simple-firebase-38de3",
  storageBucket: "simple-firebase-38de3.firebasestorage.app",
  messagingSenderId: "682451156654",
  appId: "1:682451156654:web:0a520820761338910b773f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;