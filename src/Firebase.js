// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD6YV1oIVYZ1XEmBr6T6pKwHr1kNp6_T7Y",
    authDomain: "flatheads-26574.firebaseapp.com",
    projectId: "flatheads-26574",
    storageBucket: "flatheads-26574.appspot.com",
    messagingSenderId: "353861015508",
    appId: "1:353861015508:web:034dabbabc501228e4a841"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)
