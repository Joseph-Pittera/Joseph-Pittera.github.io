// initialize the const to point to HTML elements
const form = document.querySelector(".form");
const playBtn = document.querySelector(".play");
playBtn.focus();
const card = document.querySelector(".card");
const label = document.querySelector(".label");
const testBtn = document.querySelector(".test-btn");
const resultLbl = document.querySelector(".result");
const messageLbl = document.querySelector(".message");
const input = document.getElementById("number");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const btnCard = document.querySelector(".btn-card");

//initialize the "game" object
const game = {
  min: 1,
  max: 10,
  searchedNumber: 0,
  attempts: 1,
  scores: [],
};

// add eventListener click on buttons
playBtn.addEventListener("click", displayGame);
testBtn.addEventListener("click", play);
yesBtn.addEventListener("click", continueGame);
noBtn.addEventListener("click", stopGame);

//manage form, prevent submit form on "Enter"
form.addEventListener("submit", handleForm);
function handleForm(e) {
  e.preventDefault();
}

// manage press "Enter" during the game
// manage "Enter" on input number
input.addEventListener("keydown", function (e) {
  if (
    (e.code === "Enter" || e.code === "NumpadEnter") &&
    card.style.display === "flex" &&
    testBtn.style.display !== "none"
  ) {
    debugger;
    play();
    // testBtn.focus();
  }
});
//manage "Enter" on "Yes" button
input.addEventListener("keydown", function (e) {
  if (
    (e.code === "Enter" || e.code === "NumpadEnter") &&
    btnCard.style.display === "flex" &&
    testBtn.style.display === "none"
  ) {
    //checks whether the pressed key is "Enter"
    /*     debugger;
    testBtn.focus(); */
    continueGame();
  }
});
//manage "Esc" on "No" button
input.addEventListener("keydown", function (e) {
  if (
    e.code === "Escape" &&
    card.style.display === "flex" &&
    testBtn.style.display === "none"
  ) {
    //checks whether the pressed key is "Enter"
    /*     debugger;
    testBtn.focus(); */
    stopGame();
  }
});

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
 * quick function to remove the display of an HTML element
 * @param {HTMLElement} e
 */
function displayNone(e) {
  e.style.display = "none";
}

/**
 * display and initialize the HTML elements of the game
 * and get a random number
 */
function displayGame() {
  displayNone(playBtn);
  displayNone(btnCard);
  card.style.display = "flex";
  input.focus();
  testBtn.style.display = "block";
  // define the random number
  game.searchedNumber = randomNumber(game.min, game.max);
  resultLbl.textContent = "";
  messageLbl.textContent = "";
}

/**
 * manage HTML elements to continue playing a new round of the current game
 */
function continueGame() {
  displayGame();
  testBtn.style.display = "block";
  displayNone(btnCard);
  displayNone(resultLbl);
  game.attempts = 1;
}

/**
 * manage HTML elements to stop the game and display results
 */
function stopGame() {
  displayNone(card);
  displayNone(btnCard);
  resultLbl.style.display = "block";
  resultLbl.innerHTML = "Voici vos resultats : <br>" + game.scores.join("<br>");
  playBtn.style.display = "block";
  playBtn.focus();
  messageLbl.textContent = "";
  game.scores = [];
}

/**
 * main function of the game
 * @returns none
 */
function play() {
  messageLbl.textContent = "";
  // get the guessed user number
  let enteredNumber = parseInt(input.value);
  // as long as enteredNumber is not right, a new input is asked
  // while (enteredNumber !== game.searchedNumber) {
  // verify that the user put something in the input
  if (!enteredNumber) {
    alert("Vous n'avez pas rentré de nombre");
    return;
    // indication whether the solution is higher or lower
  } else if (enteredNumber < game.searchedNumber) {
    messageLbl.textContent = "C'est plus";
    game.attempts += 1;
    return;
  } else if (enteredNumber > game.searchedNumber) {
    messageLbl.textContent = "C'est moins";
    game.attempts += 1;
    return;
  } else {
    // the loop ended, we display the victory message
    game.scores.push(
      `Partie ${game.scores.length + 1} : ${game.attempts} essais`
    );
    messageLbl.innerHTML = `Bravo ! ${game.searchedNumber} était le bon numéro.<br>
          Nombre d'essais : ${game.attempts}`;
    displayNone(testBtn);
    btnCard.style.display = "flex";
  }
}
