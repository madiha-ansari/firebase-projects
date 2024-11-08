import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.1/firebase/auth";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-analytics.js";
const firebaseConfig = {
    apiKey: "AIzaSyAYOjoLpv6q_PB1LhS3cahA8O0mq2uEX-0",
    authDomain: "my-project-of-authentication.firebaseapp.com",
    projectId: "my-project-of-authentication",
    storageBucket: "my-project-of-authentication.firebasestorage.app",
    messagingSenderId: "414250976344",
    appId: "1:414250976344:web:47a9bed46c07993077f62d",
    measurementId: "G-49Q6ZF8D7B"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export { auth, createUserWithEmailAndPassword }