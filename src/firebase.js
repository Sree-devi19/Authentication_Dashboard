// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCkuoyvxJLqzIcAgRLHqJzCUPntI1PjBbQ",
  authDomain: "auth-dashboard-87e6f.firebaseapp.com",
  projectId: "auth-dashboard-87e6f",
  storageBucket: "auth-dashboard-87e6f.firebasestorage.app",
  messagingSenderId: "761829367710",
  appId: "1:761829367710:web:66509c9d72c6b96b67408f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);