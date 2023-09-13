import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBtroSdsgeFpzQCyK7IGQ4CtzrtSgmbhaU",
    authDomain: "bhai-plzz.firebaseapp.com",
    projectId: "bhai-plzz",
    storageBucket: "bhai-plzz.appspot.com",
    messagingSenderId: "367528138021",
    appId: "1:367528138021:web:0f9e430aad7f273ed976cc",
    measurementId: "G-1MBFFV37C0"
  };
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
