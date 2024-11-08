import { auth, createUserWithEmailAndPassword } from "./firebase.js";

let signup = (event) => {
    event.preventDefault();
    let email = document.getElementById("email")
    let password = document.getElementById("password")
    createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            let user = userCredential;
            console.log("user", user);
        })
        .catch((error) => {
            console.log("error", error);

        });
}

let signupBtn = document.getElementById("signupBtn");
signupBtn.addEventListener("click", signup)