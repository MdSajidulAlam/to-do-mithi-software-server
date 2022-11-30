// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCqu26QoAdUnmSK5lZvsQtuwA2ezSWq0VI",
    authDomain: "to-do-app-9cac9.firebaseapp.com",
    projectId: "to-do-app-9cac9",
    storageBucket: "to-do-app-9cac9.appspot.com",
    messagingSenderId: "385667741989",
    appId: "1:385667741989:web:68538cac0f51d2cb1c02cc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth