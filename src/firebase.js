import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDweoDI0WnGuhxYHjMB7-RnoDDU-EFJyk8",
  authDomain: "chat-848e7.firebaseapp.com",
  projectId: "chat-848e7",
  storageBucket: "chat-848e7.appspot.com",
  messagingSenderId: "222853991157",
  appId: "1:222853991157:web:09fd6ae4c0b148be6c53bc",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
