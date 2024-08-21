// Import necessary Firebase functions
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCfdnYxJWLjvhly3BqxSJXW3988LVm9rx0",
    authDomain: "affirmationapp-42aae.firebaseapp.com",
    projectId: "affirmationapp-42aae",
    storageBucket: "affirmationapp-42aae.appspot.com",
    messagingSenderId: "345472577",
    appId: "1:345472577:web:f0c84af34df9d76fd610c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

// Export services
export { db, auth, storage };
