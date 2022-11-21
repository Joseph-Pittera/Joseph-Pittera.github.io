const dealerDiv = document.createElement("div");
dealerDiv.classList.add("board");
dealerDiv.id = "dealer";
const app = document.querySelector("#app");
app.appendChild(dealerDiv);
const playerDiv = document.querySelector("#player");
const lancer = document.querySelector("#button");
lancer.addEventListener("click", play);
const nbDice = document.querySelector("#nbDice");

function randomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function createDice(player, n) {
  count = 0;
  for (let i = 0; i < n; i++) {
    const diceDiv = document.createElement("div");
    diceDiv.classList.add("dice");
    player.appendChild(diceDiv);
    let diceNumber = randomNumber(1, 6);
    diceDiv.style.backgroundPositionX =
      (20 * (diceNumber - 1)).toString() + "%";
    count += diceNumber;
  }
}

function addResults(player, count) {
  const resultDiv = document.createElement("div");
  resultDiv.classList.add("results");
  player.appendChild(resultDiv);
  resultDiv.innerHTML =
    "La somme de vos dés est <span class='bold'>" +
    count.toString() +
    "</span>";
}
function winnerIs(player, msg) {
  const winnerDiv = document.createElement("div");
  winnerDiv.classList.add("winner");
  winnerDiv.textContent = msg;
  player.appendChild(winnerDiv);
}

let count = 0;

function play() {
  playerDiv.innerHTML = "";
  dealerDiv.innerHTML = "";
  let numberOfDice = nbDice.value;
  createDice(playerDiv, numberOfDice);
  addResults(playerDiv, count);
  createDice(dealerDiv, numberOfDice);
  addResults(dealerDiv, count);
  const scores = document.querySelectorAll("span");
  // debugger;
  if (parseInt(scores[0].textContent) > parseInt(scores[1].textContent)) {
    winnerIs(playerDiv, "Vous avez GAGNE !");
  } else if (
    parseInt(scores[0].textContent) < parseInt(scores[1].textContent)
  ) {
    winnerIs(dealerDiv, "Vous avez GAGNE !");
  } else {
    winnerIs(playerDiv, "EGALITE");
    winnerIs(dealerDiv, "EGALITE");
  }
}
