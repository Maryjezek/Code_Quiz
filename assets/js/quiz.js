var quizContainer = document.getElementById("questions");
var startButton = document.getElementById("start");
var submitButton = document.getElementById("submit");
var submitScores = document.getElementById("submitScores");
var startPage = document.getElementById("start-page");
var scoresPage = document.getElementById("scores-page");
var scores = document.getElementById("score");
scoresPage.style.display = "none";
var timeLeftEl = document.getElementById("count");
var timeleft = 100;
var startTime =100;


var i = 0;

var myQuestions = [
  {
    question: "Is JavaScript related to Java?",
    answers: {
      a: "Yes",
      b: "No",
      c: "Maybe a little",
    },
    correctAnswer: "b",
  },
  {
    question: "What is pseudo code?",
    answers: {
      a: "A new programming language",
      b: "An outline of the program with steps in simple terms",
      c: "A type of method",
    },
    correctAnswer: "b",
  },
  {
    question: "Inside which HTML element do we put the JavaScript?",
    answers: {
      a: "<scripting>",
      b: "<script>",
      c: "<js>",
    },
    correctAnswer: "b",
  },
  {
    question: "Where is the correct place to insert a JavaScript?",
    answers: {
      a: "the <head> section",
      b: "The <body> section",
      c: "both the <head> section and the <body> section are correct",
    },
    correctAnswer: "b",
  },
  {
    question:
      "What is the correct syntax for referring to an external script called 'xxx.js'?",
    answers: {
      a: "<script href ='xxx.js'>",
      b: "<script src ='xxx.js'>",
      c: "<script name ='xxx.js'>",
    },
    correctAnswer: "b",
  },
];
function trying(event, i) {
  //var element = event.target;
  //console.log(element)
  quizContainer.textContent = "";
  startPage.style.display = "none";
  quizContainer.style.display = "block";
  scoresPage.style.display = "none";

  //if (element.matches(".page")) {
  //var state = element.getAttribute("data-state");

  //if (state === "show") {
  // for (var i = 0; i < myQuestions.length; i++) {
  // element.dataset.state = "hidden";
  var h3 = document.createElement("h3");
  h3.textContent = myQuestions[i].question;

  var answerA = document.createElement("button");
  answerA.textContent = "A. " + myQuestions[i].answers.a;
  answerA.setAttribute("value", "a");
  answerA.classList.add("answerA");

  var answerB = document.createElement("button");
  answerB.textContent = "B. " + myQuestions[i].answers.b;
  answerB.setAttribute("value", "b");
  answerB.classList.add("answerB");

  var answerC = document.createElement("button");
  answerC.textContent = "C. " + myQuestions[i].answers.c;
  answerC.setAttribute("value", "c");
  answerC.classList.add("answerC");

  quizContainer.appendChild(h3);
  quizContainer.appendChild(answerA);
  quizContainer.appendChild(answerB);
  quizContainer.appendChild(answerC);

  //quizContainer.addEventListener("click",".answers", function(event){
  //checkAnswers(event)
  //})
  document.querySelector(".answerA").onclick = function (event) {
    checkAnswers(event, i);
  };
  document.querySelector(".answerB").onclick = function (event) {
    checkAnswers(event, i);
  };
  document.querySelector(".answerC").onclick = function (event) {
    checkAnswers(event, i);
  };
}

function iterateArr(i, event) {
  if (i < 5) {
    trying(event, i);
  } else scoresPage.style.display = "block";
  scores.textContent = score;
  return;
}

var score = 0;

function checkAnswers(event, i) {
  console.log("clicked");
  console.log(event.target.value);
  if (event.target.value == "b") {
    score += 1;
    console.log(score);
    i++;
    console.log(i);
    iterateArr(i, event);
  } else {
    timeleft -= 15;
    startTimer();
    console.log(timeleft);
    if (timeleft === 0) {
      scoresPage.style.display = "block";
      return;
    }

    i++;
    iterateArr(i, event);
  }
}



function startTimer() {
  gameTimer = setInterval(tick, 1000);
  timeLeftEl.textContent = startTime;
};

function tick() {
  if (timeleft <= 0) {
    clearInterval(gameTimer);
    timeLeftEl.innerHTML = "Time's Up!";
  } else {
    timeLeftEl.innerHTML = timeleft;
  }
  timeleft -= 1;
}

startButton.onclick = function (event) {
  i = 0;
  trying(event, i);
  console.log("start");
  startTimer();
  return i;
};

//local Storage Code
var initialsInput = document.querySelector("#initials");

submitScores.addEventListener("click", function (event) {
  event.preventDefault();

  // create user object from submission
  var user = {
    initials: initialsInput.value.trim(),
    score: score,
  };

  // set new submission to local storage
  localStorage.setItem("user", JSON.stringify(user));
  loadUser();
});

