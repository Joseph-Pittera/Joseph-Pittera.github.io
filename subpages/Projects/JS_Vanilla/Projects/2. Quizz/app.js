const responses = ["c", "a", "b", "a", "c"];
const emojis = ["👎", "😭", "👀", "🌟", "✨", "✔️"];
const resultComment = [" Pas terrible ! ", 
" Peut mieux faire ! ",
" Il reste quelques erreurs. ",
" Encore un effort ... ", 
" Vous y êtes presque ! ",
" Bravo, c'est un sans faute ! "
];

const form = document.querySelector("form");

form.addEventListener("submit", handleForm);

// manage the submit of the form
function handleForm(e) {
    //avoid sending information to server because we work in local
    e.preventDefault();
    const radioButtons = document.querySelectorAll("input[type='radio']:checked");
    verifyAnswer(radioButtons);
}
// count the number of right answers and record right answers in a table
function verifyAnswer(radioButtons) {
    let score = 0;
    let answers = [];
    radioButtons.forEach((x, i) => {
        if (responses[i] == x.value) {
            score++;
            answers.push(true);
        } else answers.push(false);
    });
    personalyzedResult(score);
    colorQuestions(answers);
}

const resultCtn = document.querySelector(".result-container").children;

function personalyzedResult(score) {
    resultCtn[0].textContent = emojis[score] + resultComment[score] + emojis[score];
    resultCtn[1].innerHTML = "Score : <span>" + score + " / 5</span>";
    resultCtn[2].textContent = score == 5 ? "Quelle culture ..." : "Retentez une autre réponse dans les cases rouges, puis re-validez !";
}

const questions = form.children;

function colorQuestions(answers) {
    answers.forEach((x, i) => {
        if (x) {
            questions[i].style = "background-image: linear-gradient(to right, rgb(168, 255, 120), rgb(120, 255, 214));";
        } else { 
            questions[i].style = "background-image: linear-gradient(to right, rgb(245, 86, 123), rgb(253, 103, 76))";
        }
    })
}

const radioInputs = document.querySelectorAll("input[type='radio']");
radioInputs.forEach(x => x.addEventListener("input", resetColor));

function resetColor(e) {
    const index = e.target.getAttribute("name").slice(1) - 1;
    const elt = questions[index];
    elt.style = "background-color: #f1f1f1";
    elt.style.backgroundImage = "none";
}
