const form = document.getElementsByClassName("form")[0];
const playBtn = document.getElementsByClassName("play")[0];
const card = document.getElementsByClassName("card")[0];
const label = document.getElementsByClassName("label")[0];
const testBtn = document.getElementsByClassName("test-btn")[0];
const resultLbl = document.getElementsByClassName("result")[0];
const messageLbl = document.getElementsByClassName("message")[0];
const input = document.getElementById("number");
const yesBtn = document.getElementsByClassName("yes-btn")[0];
const noBtn = document.getElementsByClassName("no-btn")[0];
const btnCard = document.getElementsByClassName("btn-card")[0];
const game = {
  min: 1,
  max: 2,
  searchedNumber: 0,
  attempts: 1,
  scores: [],
};

function randomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function displayNone(e) {
  e.style.display = "none";
}

playBtn.addEventListener("click", playGame);
testBtn.addEventListener("click", play);
yesBtn.addEventListener("click", continueGame);
noBtn.addEventListener("click", stopGame);

function playGame() {
  // debugger;
  resultLbl.textContent = "";
  displayGame();
}

function displayGame() {
  displayNone(playBtn);
  displayNone(btnCard);
  card.style.display = "flex";
  testBtn.style.display = "block";
  // define the random number
  game.searchedNumber = randomNumber(game.min, game.max);
  messageLbl.textContent = "";
}

function continueGame() {
  displayGame();
  testBtn.style.display = "block";
  displayNone(btnCard);
  displayNone(resultLbl);
  game.attempts = 1;
}
function stopGame() {
  displayNone(card);
  displayNone(btnCard);
  resultLbl.style.display = "block";
  resultLbl.innerHTML = "Voici vos resultats : <br>" + game.scores.join("<br>");
  playBtn.style.display = "block";
  messageLbl.textContent = "";
  game.scores = [];
}

function play() {
  messageLbl.textContent = "";
  // get the guessed user number
  let enteredNumber = parseInt(input.value);
  // as long as enteredNumber is not right, a new input is asked
  while (enteredNumber !== game.searchedNumber) {
    // verify that the user put something in the input
    if (!enteredNumber) {
      alert("Vous n'avez pas rentré de nombre");
      return;
    }
    // indication whether the solution is higher or lower
    if (enteredNumber < game.searchedNumber) {
      messageLbl.textContent = "C'est plus";
      game.attempts += 1;
      return;
    } else {
      messageLbl.textContent = "C'est moins";
      game.attempts += 1;
      return;
    }
  }
  // the loop ended, we display the victory message
  game.scores.push(
    `Partie ${game.scores.length + 1} : ${game.attempts} essais`
  );
  messageLbl.innerHTML = `Bravo ! ${game.searchedNumber} était le bon numéro.<br>
Nombre d'essais : ${game.attempts}`;
  displayNone(testBtn);
  btnCard.style.display = "flex";
}
