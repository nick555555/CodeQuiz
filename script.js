var questionDisplay = document.querySelector(".questionTime");
var questionsList = document.querySelector(".questionsList");
var questionBox = document.querySelector(".questionBox");
var startButton = document.querySelector(".startButton");
var startingPage = document.querySelector(".startingPage");
var donePage = document.querySelector(".done");
var highscorePage = document.querySelector(".highscore");
var highscoreLink = document.querySelector(".highscoresLink");
var timerCounter = document.querySelector(".timer");
var submitInitials = document.querySelector(".submitInitials");
var rightWrongBox = document.querySelector(".rightWrong");
var finalScore = document.querySelector(".finalScore");
var homeButton = document.querySelector(".homeButton");
var initialInput = document.querySelector(".initialInput");
var highscoresList = document.querySelector(".highscoresList");
var clearHighscoresButton = document.querySelector(".clearHighscores");

donePage.style.display = "none";
highscorePage.style.display = "none";


var secondsLeft;
var timeInterval;

function startQuiz() {
    secondsLeft = 75;
    timeInterval = setInterval(function() {
      timerCounter.textContent = "Time: " + secondsLeft;
      secondsLeft--;
    }, 1000);
    startingPage.style.display = "none";
    questionBox.style.display = "inline";
  }
// if (secondsLeft===0) {
//     clearInterval(timeInterval);
// }

var currentQuestion = 0;

function questionSwitch(){
    questionsList.textContent='';
    questionDisplay.textContent='';
  if (currentQuestion >= questions.length) {
    questionBox.style.display = "none";
    donePage.style.display = "inline";
    finalScore.textContent = "Final Score: " + secondsLeft;
    clearInterval(timeInterval);
    return;
  }
  var questionTitle = questions[currentQuestion].title;
  var temp = document.createElement('h2');
  temp.textContent = questionTitle;
  questionDisplay.appendChild(temp);
  for (let j = 0; j < questions[currentQuestion].choices.length; j++) {
    var questionOptions = questions[currentQuestion].choices[j];
    var tempNew = document.createElement('button');
    tempNew.textContent = questionOptions;
    questionsList.appendChild(tempNew);
    tempNew.onclick = compareAnswer;
  }
}

function compareAnswer() {
//   console.log("it worked" + this.textContent + questions[currentQuestion].answer);
  if (this.textContent===questions[currentQuestion].answer) {
      console.log("correct");
      rightWrongBox.textContent = "Correct";
  } else {
      console.log("incorrect");
      rightWrongBox.textContent = "Incorrect";
      secondsLeft = secondsLeft - 15;
  }
  currentQuestion++; 
  questionSwitch();
}

function highScoreListDisplay() {
    highscoresList.textContent = '';
    var i;
    for (i = 0; i < localStorage.length; i++)   {
        var highscoreListElement = document.createElement('li');
        highscoreListElement.textContent = localStorage.key(i) + "-" + localStorage.getItem(localStorage.key(i));
        highscoresList.appendChild(highscoreListElement);
    }    
}


startButton.addEventListener("click", questionSwitch);
highscoreLink.addEventListener("click", function(){
    highscorePage.style.display = "inline";
    startingPage.style.display = "none";
    donePage.style.display = "none";
    questionBox.style.display = "none";
    highScoreListDisplay();
})
submitInitials.addEventListener("click", function() {
    highscorePage.style.display = "inline";
    startingPage.style.display = "none";
    donePage.style.display = "none";
    questionBox.style.display = "none";
    localStorage.setItem(initialInput.value, secondsLeft);
    highScoreListDisplay();
})
homeButton.addEventListener("click", function() {
    highscorePage.style.display = "none";
    startingPage.style.display = "inline";
    donePage.style.display = "none";
    questionBox.style.display = "none";
    currentQuestion = 0;
    timerCounter.textContent = "Time: 0";
})
clearHighscoresButton.addEventListener("click", function() {
    localStorage.clear();
    highscoresList.textContent = '';
})