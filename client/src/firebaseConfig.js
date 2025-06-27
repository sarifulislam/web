// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCd6M_wp_ZbTLGg2zoWvwpC_D5x8cSH1p0",
  authDomain: "chatwhole-66603.firebaseapp.com",
  projectId: "chatwhole-66603",
  storageBucket: "chatwhole-66603.firebasestorage.app",
  messagingSenderId: "546035491709",
  appId: "1:546035491709:web:8a436beb7e792a06406214",
  measurementId: "G-4R3HDH1MMB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log('Firebase Analytics initialized');


export { app }; // Export the initialized Firebase app
export default firebaseConfig; // Keep exporting the configuration
