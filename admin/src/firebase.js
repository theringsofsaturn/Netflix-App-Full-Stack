import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA-rt8NuMp2lUFxPz4Hsyo1AZlCykq0Esw",
  authDomain: "movie-website-af258.firebaseapp.com",
  projectId: "movie-website-af258",
  storageBucket: "movie-website-af258.appspot.com",
  messagingSenderId: "365342188701",
  appId: "1:365342188701:web:ce2083dbb7302d48296074",
  measurementId: "G-DYKR17XC7X",
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
