"use strict";
// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "🥳Correct Number!";
// console.log(document.querySelector(".message").textContent);
// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 10;
// console.log(document.querySelector(".guess").value);
// document.querySelector(".guess").value = 23;

let SecretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  //   When there is No Input
  if (!guess) {
    document.querySelector(".message").textContent = "😓No Number!";
  }
  //   When the Guess is Correct
  else if (guess === SecretNumber) {
    document.querySelector(".number").textContent = SecretNumber;
    document.querySelector(".message").textContent = "🥳Correct Number!";
    score++;
    document.querySelector(".score").textContent = score;
    document.querySelector("body").style.backgroundColor = "#60b347";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  }
  //   When the Guess is High
  else if (guess > SecretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        "🥺Number is too High.....!";
      score--;
      document.querySelector(".score").textContent = score;
      document.querySelector("body").style.backgroundColor = "blue";
    } else {
      document.querySelector(".message").textContent = "🤦‍♀️You Lost The Game!";
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "red";
    }
  }
  //   When the Guess is Low
  else if (guess < SecretNumber) {
    if (score > 0) {
      document.querySelector(".message").textContent =
        "😓Number is too Low.....!";
      score--;
      document.querySelector(".score").textContent = score;
      document.querySelector("body").style.backgroundColor = "blue";
    } else {
      document.querySelector(".message").textContent = "🤦‍♀️You Lost The Game!";
      score = 0;
      document.querySelector("body").style.backgroundColor = "red";
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  SecretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector(".message").textContent = "Start Guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
});
