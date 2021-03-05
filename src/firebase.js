import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyDFuXtua5oQ10YHTySgJD6KmE3kB8L8eg4",
    authDomain: "slack-clone-app-f007e.firebaseapp.com",
    projectId: "slack-clone-app-f007e",
    storageBucket: "slack-clone-app-f007e.appspot.com",
    messagingSenderId: "467913579620",
    appId: "1:467913579620:web:05984997a34b28034f1371"
  };
  
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export { auth, provider, db};