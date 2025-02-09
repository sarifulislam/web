import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBF4yXV59S26Siy3UKJdJQbBIOA2EWdFz4",
  authDomain: "chatwhole-cfc5d.firebaseapp.com",
  projectId: "chatwhole-cfc5d",
  storageBucket: "chatwhole-cfc5d.firebasestorage.app",
  messagingSenderId: "20143536684",
  appId: "1:20143536684:web:9f96a68bf0b0f188a76f89",
  measurementId: "G-33FN6K3LNC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log('Firebase Analytics initialized');


export { app }; // Export the initialized Firebase app
export default firebaseConfig; // Keep exporting the configuration
