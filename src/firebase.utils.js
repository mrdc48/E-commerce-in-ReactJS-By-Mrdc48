import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { doc, setDoc, getDoc, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDEKGYEeMRDk7BMCAGca319dCwrAtuo58g",
  authDomain: "webs-30c97.firebaseapp.com",
  projectId: "webs-30c97",
  storageBucket: "webs-30c97.appspot.com",
  messagingSenderId: "340238195882",
  appId: "1:340238195882:web:e0c575da0ca7e2bd2784d3",
};

const firebaseapp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUser = async (userAuth, addionalInfo = {}) => {
  const userRef = doc(db, "users", userAuth.uid);
  const snap = await getDoc(userRef);

  if (!snap.exists()) {
    const { displayName, email } = userAuth;
    const createdDate = new Date();

    try {
      await setDoc(userRef, {
        displayName,
        email,
        createdDate,
        ...addionalInfo,
      });
    } catch (error) {
      console.log("error", error.message);
    }
  }
  return userRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return createUserWithEmailAndPassword(auth, email, password);
};

export const signIncreateAuthUserWithEmailAndPassword = async (
  email,
  password
) => {
  if (!email || !password) return;
  return signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangeListener = (callback) => {
  onAuthStateChanged(auth, callback);
};
