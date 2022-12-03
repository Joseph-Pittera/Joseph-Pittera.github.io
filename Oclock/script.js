const theme = {
  bg: document.querySelectorAll(".bg"),

  init() {
    if (localStorage.getItem("theme") === "dark") {
      theme.bg.forEach((x) => x.classList.replace("light-bg", "dark-bg"));
    } else {
      theme.bg.forEach((x) => x.classList.replace("dark-bg", "light-bg"));
    }
  },
};

document.body.onload = theme.init;
