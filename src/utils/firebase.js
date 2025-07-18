// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDKE5LrU2Z0h0uhvfzuzIvctc6sYMoj4cY",
    authDomain: "vaibhav-netflix.firebaseapp.com",
    projectId: "vaibhav-netflix",
    storageBucket: "vaibhav-netflix.firebasestorage.app",
    messagingSenderId: "649573915765",
    appId: "1:649573915765:web:1b91c8cc6191899e4e6c3c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
// auth.languageCode = 'it';
// To apply the default browser preference instead of explicitly setting it.
auth.useDeviceLanguage();