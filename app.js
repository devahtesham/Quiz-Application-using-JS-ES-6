const quizDB = [
  {
    question: "Q.1: What is the extension of JavaScript file ?",
    a: ".js",
    b: ".txt",
    c: ".json",
    d: ".xlx",
    ans: "ans1",
  },
  {
    question: "Q.2: How many types of headings are there in HTML ?",
    a: "5",
    b: "6",
    c: "7",
    d: "1",
    ans: "ans2",
  },
  {
    question: "Q.3: What is the Full form of CSS ?",
    a: "Casual Style Sheet",
    b: "Casual Style Shoot",
    c: "Cascading Style Sheet",
    d: "Casual Steal Sheet",
    ans: "ans3",
  },
  {
    question: "Q.4: flexbox is a property used in  ?",
    a: "python",
    b: "C",
    c: "java",
    d: "CSS",
    ans: "ans4",
  },
  {
    question: "Q.5: In CSS, floats are used for ?",
    a: "alignments",
    b: "colours",
    c: "background colours",
    d: "none of these",
    ans: "ans1",
  },
];
const question = document.querySelector(".question");
const op1 = document.getElementById("option1");
const op2 = document.getElementById("option2");
const op3 = document.getElementById("option3");
const op4 = document.getElementById("option4");
const submit = document.querySelector(".submit");
const answers = document.querySelectorAll(".answer");
const qa = document.querySelector(".qa-container");
const innerdiv = document.querySelector(".inner-div");
const right = document.querySelector(".right");
const wrong = document.querySelector(".wrong");
const start = document.querySelector(".start-btn");
const intro = document.querySelector(".intro");
const player = document.querySelector(".player");
const form = document.querySelector("form");

let questionCount = 0;
let score = 0;
let totalQuestion = 5;
let goodRanking = 0;
let badRanking = 0;
let player_name;
const loadQuestions = () => {
  const questionList = quizDB[questionCount];
  question.innerHTML = questionList.question;

  op1.innerHTML = questionList.a;
  op2.innerHTML = questionList.b;
  op3.innerHTML = questionList.c;
  op4.innerHTML = questionList.d;
};
loadQuestions();
const getCheckedAnswer = () => {
  let answer;
  answers.forEach((currAnsElement) => {
    if (currAnsElement.checked) {
      answer = currAnsElement.id;
    }
  });
  return answer;
};
const deselectAll = () => {
  answers.forEach((currAnsElement) => {
    currAnsElement.checked = false;
  });
};

// player.addEventListener("keyup",(e)=>{
// console.log();
// })

form.addEventListener("submit", (e) => {
  e.preventDefault();
  player_name = e.target.name.value;
  if (!player_name) {
    // or we can do like this if(player_name.trim().lenght===0)
    alert("Please Enter Your Name to start this quiz");
    player.classList.toggle("invalid");
  } else {
    console.log("lets start!");
    console.log(player_name);
    form.reset();
    intro.style.display = "none";
    qa.style.display = "block";
  }
});
submit.addEventListener("click", () => {
  const checkedAnswer = getCheckedAnswer();
  if (!checkedAnswer) {
    alert("Please check atleast one option !");
  } else {
    console.log(checkedAnswer);
    if (checkedAnswer === quizDB[questionCount].ans) {
      score++;
      goodRanking++;

      console.log(score);
      console.log("good ranking" + goodRanking);
      right.style.width = `${(goodRanking / totalQuestion) * 100}%`;
      right.innerHTML = `${
        (goodRanking / totalQuestion) * 100
      }% <i class="far fa-check"></i> `;
    } else {
      badRanking++;
      wrong.style.width = `${(badRanking / totalQuestion) * 100}%`;
      wrong.innerHTML = `${
        (badRanking / totalQuestion) * 100
      }% <img src="./images/close.png" alt="cross">`;
    }
    deselectAll();
    questionCount++;
    if (questionCount < quizDB.length) {
      loadQuestions();
    } else {
      qa.innerHTML = `

       <strong>Your Result</strong> <hr />
        <h3> ${player_name}, You scored ${score} out of ${quizDB.length}</h3>
        
        <i class="fas fa-trophy-alt"></i>
        <button class="btn btn-last" onclick = "location.reload()">Play Again</button>
        
        `;
      localStorage.setItem(
        player_name,
        `Score :- ${score} & percentage :- ${
          (goodRanking / totalQuestion) * 100
        }%`
      );
    }
  }
  // match user answer to QuizDB answer

  // total.style.width = `${(questionCount+1/totalQuestion)*100}%`
  // total.innerHTML = `${questionCount+1}/${totalQuestion}`

  // load next question by cliking submit button
});
// -------------------------- store results in localStorage
