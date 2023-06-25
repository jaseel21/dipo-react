import firebase from "firebase";
import "firebase/app";
import "firebase/firestore"



 
const firebaseConfig = {
    apiKey: "AIzaSyCmix59K3TdcpxfcXs-NjtqmaJYOUnvit0",
    authDomain: "fire-de064.firebaseapp.com",
    projectId: "fire-de064",
    storageBucket: "fire-de064.appspot.com",
    messagingSenderId: "1041886803367",
    appId: "1:1041886803367:web:8dfa27aafb7f69f9cf3282",
    measurementId: "G-XXSW9X4L88"
  };
  


export default firebase.initializeApp (firebaseConfig)
