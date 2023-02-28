import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDEKGYEeMRDk7BMCAGca319dCwrAtuo58g",
  authDomain: "webs-30c97.firebaseapp.com",
  projectId: "webs-30c97",
  storageBucket: "webs-30c97.appspot.com",
  messagingSenderId: "340238195882",
  appId: "1:340238195882:web:8b79fde34a4d5a5f2784d3",
};

const Firebase = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const popUp = () => signInWithPopup(auth, provider);

export const popUpRedirect = () => signInWithRedirect(auth, provider);

export const dataBase = getFirestore();

export const createUserFromAuth = async (userAuth) => {
  const userDoc = doc(dataBase, "users", userAuth.uid);
  console.log(userDoc);

  const userSnap = await getDoc(userDoc);

  if (!userSnap.exists()) {
    const { displayName, email } = userAuth;
    const createdDate = new Date();

    try {
      await setDoc(userDoc, {
        displayName,
        email,
        createdDate,
      });
    } catch (error) {
      console.log("error", error.messge);
    }
  }
  return userDoc;
};
