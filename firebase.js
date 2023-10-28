import { initializeApp } from 'firebase/app';
import { getAnalytics, isSupported } from "firebase/analytics";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBJcKExmHb2eogZMjgBMCwjqM_XVjA_UBg",
  authDomain: "redbull-5dc2d.firebaseapp.com",
  projectId: "redbull-5dc2d",
  storageBucket: "redbull-5dc2d.appspot.com",
  messagingSenderId: "526347690340",
  appId: "1:526347690340:web:44f232cddde086bf51da71",
  measurementId: "G-63SS0SHW3S"
};

// Initialize Firebase
// let app;
// if (firebase.apps.length === 0) {
//     app = firebase.initializeApp(firebaseConfig);
// } else {
//     app = firebase.app()
// }

const app = initializeApp(firebaseConfig);
const analytics = isSupported().then(yes => yes ? getAnalytics(app) : null);
const auth = getAuth(app);

export {app, auth};