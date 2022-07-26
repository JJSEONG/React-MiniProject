import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUwVY5RvSX60kuwLvOnfjXNZbAN8OC4nY",
  authDomain: "selecthing-7356d.firebaseapp.com",
  projectId: "selecthing-7356d",
  storageBucket: "selecthing-7356d.appspot.com",
  messagingSenderId: "115395007151",
  appId: "1:115395007151:web:92158d44e50e34b5d57a5a",
  measurementId: "G-V4C21KGC1X"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;