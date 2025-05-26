// firebase/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAPNUE6X5OWeVyjjhdYCIcBoPYNhhZv0mY",
  authDomain: "pokeapi-97785.firebaseapp.com",
  projectId: "pokeapi-97785",
  storageBucket: "pokeapi-97785.appspot.com",
  messagingSenderId: "580808197897",
  appId: "1:580808197897:web:d8cced2b76f7408b9a35d8"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); // ✅ ¡Esto es necesario!

export { auth, db };