// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getMessaging } from "firebase/messaging";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyDCxHkh1LegHe-KJQabJvcnwMjLM7B1yM8",
    authDomain: "ebilet-mobile-12eef.firebaseapp.com",
    projectId: "ebilet-mobile-12eef",
    storageBucket: "ebilet-mobile-12eef.firebasestorage.app",
    messagingSenderId: "369321817955",
    appId: "1:369321817955:web:014149e26db4f920d54556",
    measurementId: "G-4CF3EEC8QJ"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const messaging = getMessaging(app);
const analytics = getAnalytics(app);

export { auth, db, messaging };
