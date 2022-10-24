import { getAuth} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCnCbbCPKqp1_fxSpxTxi2LEHFcTGStl-Q",
  authDomain: "time-shopping-store.firebaseapp.com",
  projectId: "time-shopping-store",
  storageBucket: "time-shopping-store.appspot.com",
  messagingSenderId: "243484520134",
  appId: "1:243484520134:web:91c0c403ffa1d69fe1b1c7",
  measurementId: "G-BHC2BFYBVD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage(app);