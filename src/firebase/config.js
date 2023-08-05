import firebase from "firebase";
import "firebase/app";
import "firebase/firestore"
import "firebase/auth"



 
const firebaseConfig = {
  apiKey: "AIzaSyB6eE8oExLtwrLGRM9-BnWxDmZu_NUQfC8",
  authDomain: "adsadiploma-bbce3.firebaseapp.com",
  projectId: "adsadiploma-bbce3",
  storageBucket: "adsadiploma-bbce3.appspot.com",
  messagingSenderId: "276609032020",
  appId: "1:276609032020:web:e530ffa0324fbef674b2c1",
  measurementId: "G-X601XRCQ1N"
  };
  


export default firebase.initializeApp (firebaseConfig)
