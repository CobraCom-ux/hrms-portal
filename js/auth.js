import { auth, db } from "./firebase.js";

import {
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

import {
  doc,
  getDoc
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

export async function loginUser() {

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {

    // 1. Firebase Auth Login
    const userCred = await signInWithEmailAndPassword(auth, email, password);

    const uid = userCred.user.uid;

    // 2. Firestore se user data lao
    const userSnap = await getDoc(doc(db, "users", uid));

    if (!userSnap.exists()) {
      alert("User not found in database");
      return;
    }

    const userData = userSnap.data();

    // 3. Role check
    if (userData.role === "super_admin") {
      window.location.href = "admin.html";
    }
    else if (userData.role === "hr") {
      window.location.href = "hr.html";
    }
    else {
      window.location.href = "dashboard.html";
    }

  } catch (error) {
    alert(error.message);
  }
}
