import { createNavbar } from "./navbar.js";
createNavbar();

let loginBtn = document.getElementById("loginBtn")
let email = document.getElementById("enter-email")
let password = document.getElementById("enter-password")
loginBtn.addEventListener("click", () => {
    if(email == "empher@gmail.com" && password == "empher@123"){
    alert ("Login Success, you are redirecting to quiz page")
    window.location.href(quiz.html)
}else{
        alert("Enter login credentials")
    }
})


