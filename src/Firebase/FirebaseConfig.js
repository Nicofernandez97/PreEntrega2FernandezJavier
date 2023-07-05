
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyDn9OkaU3JjQr1DlDyAtn9xCe7mv4BMcA0",
    authDomain: "max-baires.firebaseapp.com",
    projectId: "max-baires",
    storageBucket: "max-baires.appspot.com",
    messagingSenderId: "240871549533",
    appId: "1:240871549533:web:a21b429903764773667bb4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


