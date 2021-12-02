// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpcTlma_-kQQC60OcjOx8feVCmbEbfjls",
  authDomain: "study-buddy-6e857.firebaseapp.com",
  projectId: "study-buddy-6e857",
  storageBucket: "study-buddy-6e857.appspot.com",
  messagingSenderId: "46377915372",
  appId: "1:46377915372:web:4933add727124cb5daa6c9",
  measurementId: "G-8H7NV334DV"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };
