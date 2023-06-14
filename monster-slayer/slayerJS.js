let playerName = prompt("Enter your player name");
let character = document.getElementById("character");
character.textContent = `${playerName}'s Life:`;

let monsterType = prompt("Enter the type of monster you are fighting");
let monster = document.getElementById("monster");
monster.textContent = `${monsterType}'s Life:`;

const colBtn = document.getElementById("btn");

const newGame = document.getElementById("startGame");
newGame.addEventListener("click", startNewGame);

function startNewGame() {
  colBtn.style.display = "block";
  newGame.style.display = "none";
}
