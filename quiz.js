import { createNavbar } from "./navbar.js";
createNavbar();

let url = "http://localhost:3000/question";

fetch(url, {
    method: "POST",
    body: `
    <p>question.title</p>
    <p>question.optionA</p>
    <p>question.optionB</p>
    <p>question.optionC</p>
    <p>question.optionD</p>
    <p>question.correctOption</p>`       
})
let questions = JSON.parse(localStorage.getItem("question")) || []
questions.push(quiz)
localStorage.setItem("questions", JSON.stringify(questions))
alert("Question Added!")