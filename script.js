readlineSync = require("readline-sync");

var userName = readlineSync.question("What is your name? ");

console.log("Welcome " + userName + " to 'How well Do you know Shagun?' ");

var Score = 0;
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("Woohoo! Right Answer!");
    Score++;
    console.log("Points gained: 1");
  } else {
    console.log("Oops! wrong Answer");
    console.log("Points gained: 0");
  }
}
//Array of Objects

var questions = [
  {
    question: "Where Do I live? ",
    answer: "Surat",
  },
  {
    question: "What is my Goal? ",
    answer: "World Tour",
  },
  {
    question: "My Favourite color? ",
    answer: "Black",
  },
  {
    question: "Which is my favourite Song?",
    answer: "Older by Sasha Sloan",
  },
];

for (i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);
}

var highestScore = 2;

if (Score > highestScore) {
  console.log("Your Final Score is: " + Score);
  console.log("Woohoo! You created a new record");
} else {
  console.log("Final Score: " + Score);
}
