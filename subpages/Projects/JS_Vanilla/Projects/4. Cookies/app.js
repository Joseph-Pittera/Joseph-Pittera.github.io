const cookieForm = document.querySelector("form");
const inputs = document.querySelectorAll("input");

cookieForm.addEventListener("submit", handleForm);

/**
 * manage the main form
 * @param {*} e
 */
function handleForm(e) {
  e.preventDefault();

  const newCookie = {};
  // set "name = value" from inputs to newCookie
  inputs.forEach((input) => {
    // cookies are composed by "name = value; expires= date"
    newCookie[input.getAttribute("name")] = input.value;
  });
  // Date = nb of milliseconds since January 1st 1970 0:00
  // set an expiration date to newCookie
  newCookie.expires = new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000);
  createCookie(newCookie);
  // empty inputs fields
  cookieForm.reset(); // inputs.forEach((input) => (input.value = "")); works too
}

/**
 * create a cookie with input's data
 * @param {{name:string}} newCookie
 */
function createCookie(newCookie) {
  // encodeURIComponent encodes the parameter to match cookie's format
  // test if the cookie we want to create already exists or not to show the right toast
  if (cookieExist(encodeURIComponent(newCookie.name))) {
    createToast(`Cookie ${newCookie.name} modifié`, "orangered");
  } else {
    createToast(`Cookie ${newCookie.name} créé`, "green");
  }

  // add the new cookie or modify it
  document.cookie = `${encodeURIComponent(newCookie.name)}=${encodeURIComponent(
    newCookie.value
  )};expires=${newCookie.expires.toUTCString()}`;

  // if cookies are currently displayed, update the list and display again
  if (cookiesList.children.length) displayCookies();
}

/**
 * verify if a cookie already exists in the document
 * @param {string} name
 * @returns {boolean}
 */
function cookieExist(name) {
  const cookies = document.cookie.split("; ");
  const cookiesName = cookies.map((cookie) => cookie.split("=")[0]);
  return cookiesName.find((e) => e === name);
}

const toastCtn = document.querySelector(".toast-ctn");

/**
 * create the toast message
 * @param {string} text
 * @param {string} color
 */
function createToast(text, color) {
  const toast = document.createElement("p");
  toast.className = "toast";
  toast.textContent = text;
  toast.style.background = color;
  toastCtn.appendChild(toast);
  setTimeout(() => {
    /*     toast.textContent = "";
    toast.style.background = "none"; */ // => works too
    toast.remove();
  }, 3000);
}

const cookiesList = document.querySelector(".cookies-list");
const displayCookiesBtn = document.querySelector(".displayCookiesBtn");
const infoTxt = document.querySelector(".info-txt");

displayCookiesBtn.addEventListener("click", displayCookies);

/**
 * display the existing cookies on the screen by click on "Afficher"
 */
function displayCookies() {
  if (cookiesList.children.length) cookiesList.textContent = "";
  if (document.cookie === "") {
    infoTxt.textContent = "Pas de cookies à afficher, créez-en un !";
    setTimeout(() => {
      infoTxt.textContent = "";
    }, 2000);
    return;
  }
  const cookies = document.cookie.split("; ").reverse();
  createElements(cookies);
}

/**
 * create HTML elements <li> with cookies data
 * @param {Array<string>} cookies // string with "name=value; name=value..."
 */
function createElements(cookies) {
  const cookiesName = cookies.map((cookie) => cookie.split("=")[0]);
  const cookiesValue = cookies.map((cookie) => cookie.split("=")[1]);
  // for-loop to create an HTML element by cookie
  for (let i = 0; i < cookies.length; i++) {
    const listItem = document.createElement("li");
    listItem.className = "cookie";
    listItem.innerHTML = `
    <p>
      <span class="bold">Nom : </span>${cookiesName[i]}
    </p> 
    <p>
      <span class="bold">Valeur : </span>${cookiesValue[i]}
    </p>
    <button class="delete">X</button>`;
    const deleteCookie = listItem.querySelector("button");
    // set the lister on the delete button to delete the cookie and the HTML element on click
    deleteCookie.addEventListener("click", (e) => {
      // set expires date of the cookie to an anterior date in order to delete it
      document.cookie = `${cookiesName[i]}=; expires=${new Date(0)}`;
      // remove an HTML element
      e.target.parentElement.remove();
    });
    cookiesList.appendChild(listItem);
  }
}
