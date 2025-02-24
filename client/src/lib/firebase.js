// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
        apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
        authDomain: "mern-blog-68708.firebaseapp.com",
        projectId: "mern-blog-68708",
        storageBucket: "mern-blog-68708.appspot.com",
        messagingSenderId: "614310820070",
        appId: "1:614310820070:web:50c7e99e8d50eb1fec6327"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);