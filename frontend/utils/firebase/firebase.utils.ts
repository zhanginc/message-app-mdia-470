// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8y_O8HgA-AvDg0Ql6-BBvrdPqt6Tekzs",
  authDomain: "media-470-project.firebaseapp.com",
  projectId: "media-470-project",
  storageBucket: "media-470-project.firebasestorage.app",
  messagingSenderId: "716941064622",
  appId: "1:716941064622:web:a7a6c8949c838e8204b03f",
  measurementId: "G-40BGXX3MV5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getDatabase(app);
const analytics = getAnalytics(app);