// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtcCVUqHOM36FiRqI2CbodUdxAzGDeOL4",
  authDomain: "ema-john-simple-d3a35.firebaseapp.com",
  projectId: "ema-john-simple-d3a35",
  storageBucket: "ema-john-simple-d3a35.appspot.com",
  messagingSenderId: "722851397335",
  appId: "1:722851397335:web:8c7981a7b00b8d50447a92"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;