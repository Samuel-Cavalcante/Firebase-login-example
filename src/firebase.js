import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCl4j0CxQo14_k4fumZcQ1KWu7Q4IWN7ec",
    authDomain: "samuel-cavalcante.firebaseapp.com",
    projectId: "samuel-cavalcante",
    storageBucket: "samuel-cavalcante.appspot.com",
    messagingSenderId: "389005881630",
    appId: "1:389005881630:web:98df1373bf6cc74882990f",
    measurementId: "G-XFVZE9PFMP"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;