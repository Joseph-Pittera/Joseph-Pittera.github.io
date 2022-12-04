const theme = {
  body: document.querySelector("body"),

  init() {
    if (localStorage.getItem("theme") === "dark") {
      theme.body.classList.replace("light-bg", "dark-bg");
    } else {
      theme.body.classList.replace("dark-bg", "light-bg");
    }
  },
};

theme.init();
