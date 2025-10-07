import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOZ57dtsS1f1XAYC1lSE0Bsb0RdphGiCg",
  authDomain: "nutrivision-11e29.firebaseapp.com",
  projectId: "nutrivision-11e29",
  storageBucket: "nutrivision-11e29.firebasestorage.app",
  messagingSenderId: "1002919080951",
  appId: "1:1002919080951:web:4d17d8f43a86bc947674f2",
  measurementId: "G-WN6HM4GSSC"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);