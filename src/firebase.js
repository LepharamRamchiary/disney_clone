import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'; 
import 'firebase/compat/storage';


const firebaseConfig = {
    apiKey: "AIzaSyDx12bcynrzElfcy3ApNt50ZYXEWwKYP_A",
    authDomain: "disneyplus-clone-ce3ad.firebaseapp.com",
    projectId: "disneyplus-clone-ce3ad",
    storageBucket: "disneyplus-clone-ce3ad.appspot.com",
    messagingSenderId: "467095507452",
    appId: "1:467095507452:web:e8cffacdce11285fd9e279",
    measurementId: "G-NPDHVCCTZ1"
};


// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Initialize Firestore
const db = firebaseApp.firestore();

// Initialize Authentication
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

// Initialize Storage
const storage = firebaseApp.storage();

export { auth, provider, storage };
export default db;






// Firebase: The popup has been closed by the user before finalizing the operation. (auth/popup-closed-by-user).