import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCRmD35HRTAkV8Du4bCyMYePSEl0KLcjls",
  authDomain: "foodapp-6c700.firebaseapp.com",
  projectId: "foodapp-6c700",
  storageBucket: "foodapp-6c700.appspot.com",
  messagingSenderId: "35625101857",
  appId: "1:35625101857:web:6db9b451d526fdc59c9160",
  measurementId: "G-JYYG2Y55CL",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };