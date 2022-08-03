// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRpOQ1YOB97qF5yQ23Ngam7UTuZ0_OOB0",
  authDomain: "fir-auth-d302a.firebaseapp.com",
  projectId: "fir-auth-d302a",
  storageBucket: "fir-auth-d302a.appspot.com",
  messagingSenderId: "89123044478",
  appId: "1:89123044478:web:80673dca1c75f9b5dc6c2f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app