// Create the 2 div const that will contain the player's and dealer's dices
const playerDiv = document.createElement("div");
playerDiv.classList.add("board");
playerDiv.id = "player";
playerDiv.innerHTML = "<h2>PLAYER</h2>";
const dealerDiv = document.createElement("div");
dealerDiv.classList.add("board");
dealerDiv.id = "dealer";
dealerDiv.innerHTML = "<h2>DEALER</h2>";

// initialize the const to point to HTML elements
const app = document.querySelector("#app");
const lancer = document.querySelector("#button");
const nbDice = document.querySelector("#nbDice");

// add the player's and dealer's div to the DOM
app.appendChild(playerDiv);
app.appendChild(dealerDiv);

// add the click event on the "Lancer" button
lancer.addEventListener("click", play);

/**
 * take 2 numbers and return a random number between min and max
 * @param {Number} min
 * @param {Number} max
 * @returns {Number}
 */
function randomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

/**
 * create a div with an image of Dice in the HTML element player
 * switch position on X-axis depending on the face "n" of the dice
 * and return the sum of the dices
 * @param {HTMLElement} player
 * @param {Number} n
 * @returns {Number}
 */
function createDice(player, n) {
  let count = 0;
  for (let i = 0; i < n; i++) {
    const diceDiv = document.createElement("div");
    diceDiv.classList.add("dice");
    player.appendChild(diceDiv);
    let diceNumber = randomNumber(1, 6);
    // display the right face of the dice by changing the background position X
    diceDiv.style.backgroundPositionX =
      (20 * (diceNumber - 1)).toString() + "%";
    count += diceNumber;
  }
  return count;
}

/**
 * display the results in a new div below the div with Dice
 * taking into account the sum of the dices
 * @param {HTMLElement} player
 * @param {Number} count
 */
function addResults(player, count) {
  const resultDiv = document.createElement("div");
  resultDiv.classList.add("results");
  player.appendChild(resultDiv);
  resultDiv.innerHTML =
    "La somme de vos dés est <span class='bold'>" +
    count.toString() +
    "</span>";
}

/**
 * display the winner message in the right div, player or dealer
 * @param {HTMLElement} player
 * @param {String} msg
 */
function winnerIs(player, msg) {
  const winnerDiv = document.createElement("div");
  winnerDiv.classList.add("winner");
  winnerDiv.textContent = msg;
  player.appendChild(winnerDiv);
}

/**
 * main function to play the game
 *
 */
function play() {
  // initialize the div player and dealer
  playerDiv.innerHTML = "<h2>PLAYER</h2>";
  dealerDiv.innerHTML = "<h2>DEALER</h2>";

  // initialize variables
  let numberOfDice = nbDice.value;
  let scorePlayer = 0;
  let scoreDealer = 0;

  scorePlayer = createDice(playerDiv, numberOfDice);
  setTimeout(() => {
    addResults(playerDiv, scorePlayer);
  }, 2000);

  setTimeout(() => {
    scoreDealer = createDice(dealerDiv, numberOfDice);
  }, 1000);
  setTimeout(() => {
    addResults(dealerDiv, scoreDealer);
  }, 2000);

  setTimeout(() => {
    const scores = document.querySelectorAll("span");
    if (parseInt(scores[0].textContent) > parseInt(scores[1].textContent)) {
      winnerIs(playerDiv, "Vous avez GAGNE !");
    } else if (
      parseInt(scores[0].textContent) < parseInt(scores[1].textContent)
    ) {
      winnerIs(dealerDiv, "Le Dealer a GAGNE !");
    } else {
      winnerIs(playerDiv, "EGALITE");
      winnerIs(dealerDiv, "EGALITE");
    }
  }, 2500);
}
