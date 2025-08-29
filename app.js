// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRr0gmkIU7qVyTT3BrU5oim_IAdQhUKRw",
  authDomain: "mycart-bfa27.firebaseapp.com",
  projectId: "mycart-bfa27",
  storageBucket: "mycart-bfa27.firebasestorage.app",
  messagingSenderId: "934785219442",
  appId: "1:934785219442:web:2771f2efbfca31d13dbbeb",
  measurementId: "G-L4LXD8KEC7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);