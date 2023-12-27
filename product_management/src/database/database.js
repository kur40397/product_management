import { getDatabase } from "firebase/database"
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAq9vJYtVsuY9vT2vLK8TczMc8CblldMi4",
    authDomain: "product-management-a522b.firebaseapp.com",
    projectId: "product-management-a522b",
    storageBucket: "product-management-a522b.appspot.com",
    messagingSenderId: "731146022665",
    appId: "1:731146022665:web:09684c18bf6c6c642d6dd8",
    measurementId: "G-K7C0ERSZF1",
    databaseURL: "https://product-management-a522b-default-rtdb.firebaseio.com/"
};

// Initialize Firebase k
const app = initializeApp(firebaseConfig);

export const database = getDatabase(app)
// app: wa7d instance dial firebase li biha tkad
// taccidi les services li f firebase