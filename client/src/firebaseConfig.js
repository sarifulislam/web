import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBH2z0o5SL01bD37FhrNqjip8K11eRPDGE",
  authDomain: "chatwhole-dev.firebaseapp.com",
  projectId: "chatwhole-dev",
  storageBucket: "chatwhole-dev.firebasestorage.app",
  messagingSenderId: "954472768661",
  appId: "1:954472768661:web:f575c0610b33aaebd3e79c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app }; // Export the initialized Firebase app
export default firebaseConfig; // Keep exporting the configuration

// Export Firestore instance
export const db = getFirestore(app);
