export function createNavbar (){
    let navBar =document.createElement("div");
    navBar.innerHTML = `
    <a href="index.html">Home</a>
    <a href="quiz.html">Quiz</a>
    <a href="questions.html">Questions</a>
    `
    document.body.prepend(navBar)
}