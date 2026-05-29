import { auth, db } from "./firebase.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

export async function login(email, password) {
  const userCred = await signInWithEmailAndPassword(auth, email, password);

  const uid = userCred.user.uid;
  const snap = await getDoc(doc(db, "users", uid));

  if (snap.exists()) {
    return snap.data();
  } else {
    throw new Error("User not found");
  }
}
