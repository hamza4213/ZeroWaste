// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRmD35HRTAkV8Du4bCyMYePSEl0KLcjls",
  authDomain: "foodapp-6c700.firebaseapp.com",
  projectId: "foodapp-6c700",
  storageBucket: "foodapp-6c700.appspot.com",
  messagingSenderId: "35625101857",
  appId: "1:35625101857:web:6db9b451d526fdc59c9160",
  measurementId: "G-JYYG2Y55CL"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig)
} else {
    app = firebase.app()
}

const auth = firebase.auth()
export {auth}