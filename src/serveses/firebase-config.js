import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDVciFrFAGdxOZ-gmPwDQJOEpCBMqQwW7E",
  authDomain: "spdu-55c36.firebaseapp.com",
  projectId: "spdu-55c36",
  storageBucket: "spdu-55c36.appspot.com",
  messagingSenderId: "427509378659",
  appId: "1:427509378659:web:41950f34f611ff346e9256",
  measurementId: "G-KX8YWNWNHC"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)