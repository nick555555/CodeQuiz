# CodeQuiz

Included are: index.html, script.js, questions.js
    -questions.js only includes an array of the quiz questions with all other relevant Javascript being in the script.js file
    -the index.html file utilizes Bootstrap framework

A timed code quiz with multiple choice answers. User score is based on time remaining with incorrect answers deducting 15 from the time remaining. User can then input their initials to display them and their final score on a scoreboard. Initials and score are stored in local storage. From the highscore page the user can clear local storage and remove pre existing scores. The user can also restart the quiz from this page. The segments of startingPage, questionBox, done and highscore are hidden or displayed depending on the stage of the quiz. The highscore page can be accessed at any time by clicking on the Highscores link.