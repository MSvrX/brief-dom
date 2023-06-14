"use strict";

let playerOne = document.getElementById("scorePlayerOne");
console.log(playerOne);
let playerTwo = document.getElementById("scorePlayerTwo");
console.log(playerTwo);
const btnPlayerOne = document.getElementById("btnP1");
console.log(btnPlayerOne);
const btnPlayerTwo = document.getElementById("btnP2");

btnPlayerOne.addEventListener("click", playerOneScored);

function playerOneScored() {
  let maximumPoints = Number(document.getElementById("maximumPoints").value);

  if (Number(playerOne.textContent) >= maximumPoints) {
    playerOne.style.color = "green";
    playerTwo.style.color = "red";
    btnPlayerOne.style.display = "none";
    btnPlayerTwo.style.display = "none";
  } else {
    let plusOnePoint = Number(playerOne.textContent) + 1;
    console.log(plusOnePoint);
    playerOne.textContent = plusOnePoint;
  }
}

btnPlayerTwo.addEventListener("click", playerTwoScored);

function playerTwoScored() {
  let maximumPoints = Number(document.getElementById("maximumPoints").value);

  if (Number(playerTwo.textContent) >= maximumPoints) {
    playerTwo.style.color = "green";
    playerOne.style.color = "red";
    btnPlayerOne.style.display = "none";
    btnPlayerTwo.style.display = "none";
  } else {
    let plusOnePoint = Number(playerTwo.textContent) + 1;
    console.log(plusOnePoint);
    playerTwo.textContent = plusOnePoint;
  }
}

const btnReset = document.getElementById("btnReset");

btnReset.addEventListener("click", newGameStart);

function newGameStart() {
  let maximumPoints = document.getElementById("maximumPoints");
  maximumPoints.value = 0;
  playerOne.textContent = 0;
  playerTwo.textContent = 0;
  playerTwo.style.color = "black";
  playerOne.style.color = "black";
  btnPlayerOne.style.display = "inline-block";
  btnPlayerTwo.style.display = "inline-block";
}
