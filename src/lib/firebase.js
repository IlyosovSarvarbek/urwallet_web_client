import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "thisisurwallet.firebaseapp.com",
  projectId: "thisisurwallet",
  storageBucket: "thisisurwallet.firebasestorage.app",
  messagingSenderId: "257825756205",
  appId: "1:257825756205:web:f14fa237711e290e4314a4"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth()