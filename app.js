const quizDB = [
    {
        question: "Q.1: What is the Full form of JS ?",
        a: "JavaScript",
        b: "joseph sign",
        c: "james said",
        d: "java language",
        ans: "ans1",
    }, {
        question: "Q.2: What is the Full form of HTML ?",
        a: "Hyper Tool Markup Load",
        b: "Hyper Text Markup Language",
        c: "Huge Text markup Language",
        d: "Huge Test Making Language",
        ans: "ans2",
    }, {
        question: "Q.3: What is the Full form of CSS ?",
        a: "Casual Style Sheet",
        b: "Casual Style Shoot",
        c: "Cascading Style Sheet",
        d: "Casual Steal Sheet",
        ans: "ans3",
    }, {
        question: "Q.4: What is the Full form of RDB ?",
        a: "Relational Door",
        b: "Ready Database",
        c: "Relational Data",
        d: "Relational Database",
        ans: "ans4",
    }, {
        question: "Q.5: What is the answer of 4*4 ?",
        a: "16",
        b: "17",
        c: "18",
        d: "19",
        ans: "ans1",
    },
]
const question = document.querySelector(".question");
const op1 = document.getElementById("option1")
const op2 = document.getElementById("option2")
const op3 = document.getElementById("option3")
const op4 = document.getElementById("option4")
const submit = document.querySelector(".submit")
const answers = document.querySelectorAll(".answer")
const qa = document.querySelector(".qa-container")
const innerdiv = document.querySelector(".inner-div")
const right = document.querySelector(".right")
const wrong = document.querySelector(".wrong")
const start = document.querySelector(".start-btn");
const intro = document.querySelector(".intro")
const player = document.querySelector(".player")
const form = document.querySelector("form")

let questionCount = 0;
let score = 0;
let totalQuestion = 5;
let goodRanking = 0;
let badRanking = 0;
let player_name;
const loadQuestions = () => {
    const questionList = quizDB[questionCount]
    question.innerHTML = questionList.question;

    op1.innerHTML = questionList.a;
    op2.innerHTML = questionList.b;
    op3.innerHTML = questionList.c;
    op4.innerHTML = questionList.d;
}
loadQuestions();
const getCheckedAnswer = () => {
    let answer;
    answers.forEach((currAnsElement) => {
        if (currAnsElement.checked) {
            answer = currAnsElement.id
        }
    })
    return answer

}
const deselectAll = () => {
    answers.forEach(currAnsElement => {
        currAnsElement.checked = false
    })
}

// player.addEventListener("keyup",(e)=>{
// console.log();
// })

form.addEventListener("submit",(e)=>{
    e.preventDefault()
   player_name = e.target.name.value;
   console.log(player_name);
    form.reset()
})
start.addEventListener("click",()=>{
    intro.style.display = "none"
    qa.style.display = "block"
})
submit.addEventListener("click", () => {
    const checkedAnswer = getCheckedAnswer();
    console.log(checkedAnswer);
    // match user answer to QuizDB answer
    if (checkedAnswer === quizDB[questionCount].ans) {
        score++
        goodRanking++

        console.log(score);
        console.log("good ranking"+ goodRanking);
        right.style.width = `${(goodRanking/totalQuestion)*100}%`
        right.innerHTML = `${(goodRanking/totalQuestion)*100}% <i class="far fa-check"></i> `
    }else {
        badRanking++
        wrong.style.width = `${(badRanking/totalQuestion)*100}%`
        wrong.innerHTML = `${(badRanking/totalQuestion)*100}% <img src="./images/close.png" alt="cross">`
    }
    // total.style.width = `${(questionCount+1/totalQuestion)*100}%`
    // total.innerHTML = `${questionCount+1}/${totalQuestion}` 




    // load next question by cliking submit button
    deselectAll();
    questionCount++
    if (questionCount < quizDB.length) {
        loadQuestions()
    } else {
        qa.innerHTML = `

       <strong>Your Result</strong> <hr />
        <h3> ${player_name}, You scored ${score} out of ${quizDB.length}</h3>
        
        <i class="fas fa-trophy-alt"></i>
        <button class="btn btn-last" onclick = "location.reload()">Play Again</button>
        
        `
    }
    



})