// API ENDPOINT : `https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srlimit=20&srsearch=${searchInput}`

const form = document.querySelector("form");
const input = document.querySelector("input");
const errorMsg = document.querySelector(".error-msg");
const loader = document.querySelector(".loader");

form.addEventListener("submit", wikiSearch);

function wikiSearch(e) {
  e.preventDefault();

  if (input.value === "") {
    errorMsg.innerHTML = "Whoooppss ! <br> Please enter an element of research";
    return;
  } else {
    errorMsg.textContent = "";
    loader.style.display =
      "flex"; /* make visible the loader during the search */
    resultsDisplay.textContent =
      ""; /* re-initialyze the results of the search */
    wikiApiCall(input.value);
  }
}

async function wikiApiCall(searchInput) {
  try {
    const response = await fetch(
      `https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srlimit=20&srsearch=${searchInput}`
    );
    /* allow the catch of 404 errors */
    if (!response.ok) {
      throw new Error(`${response.status}`);
    }
    const data = await response.json();
    /* console.log(data); */

    createCards(data.query.search);
  } catch (error) {
    errorMsg.textContent = error;
    loader.style.display = "none";
  }
}

const resultsDisplay = document.querySelector(".results-ctn");

function createCards(data) {
  /* manage no result */
  if (!data.length) {
    errorMsg.innerHTML = "Whoooppss ! <br> We counldn't find any result";
    loader.style.display = "none";
    return;
  }
  data.forEach((el) => {
    const url = `https://en.wikipedia.org/?curid=${el.pageid}`;
    const card = document.createElement("div");
    card.className = "result-item";
    card.innerHTML = `
    <div class="result-item">
    <h3 class="result-title">
    <a href="${url}" target="_blank">${el.title}</a>
    </h3>
    <a href="${url}" class="result-link" target="_blank">${url}</a>
    <p class="result-snippet">${el.snippet}</p><br>
    </div>
    `;
    resultsDisplay.appendChild(card);
  });
  loader.style.display = "none";
}
