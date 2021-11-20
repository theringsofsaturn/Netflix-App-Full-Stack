import firebase from 'firebase';
import { initializeApp } from 'firebase/app';

// My web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-rt8NuMp2lUFxPz4Hsyo1AZlCykq0Esw",
  authDomain: "movie-website-af258.firebaseapp.com",
  projectId: "movie-website-af258",
  storageBucket: "movie-website-af258.appspot.com",
  messagingSenderId: "365342188701",
  appId: "1:365342188701:web:ce2083dbb7302d48296074",
  measurementId: "G-DYKR17XC7X"
    // apiKey: process.env.API_KEY,
    // authDomain: process.env.AUTH_DOMAIN,
    // projectId: process.env.PROJECT_ID,
    // storageBucket: process.env.STORAGE_BUCKET,
    // messagingSenderId: process.env.MESSAGING_SENDER_ID,
    // appId: process.env.APP_ID,
    // measurementId: process.env.MEASUREMENT_ID,
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const storage = firebase.storage();
  export default storage;
  