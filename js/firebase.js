// Initialize Firebase
const app = initializeApp(firebaseConfig);
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCjqLcLVuJYqF-XgQjc5bqg_ui2Axxp1fM",
  authDomain: "hrms-853b5.firebaseapp.com",
  projectId: "hrms-853b5",
  storageBucket: "hrms-853b5.firebasestorage.app",
  messagingSenderId: "379372914724",
  appId: "1:379372914724:web:9608dfc493aff3eb1b70b1"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
