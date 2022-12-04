const theme = {
  bg: document.querySelectorAll(".bg"),
  projectTile: document.querySelectorAll(".project"),

  init() {
    if (localStorage.getItem("theme") === "dark") {
      theme.bg.forEach((x) => x.classList.replace("light-bg", "dark-bg"));
      theme.projectTile.forEach((x) =>
        x.classList.replace("--project-light", "--project-dark")
      );
    } else {
      theme.bg.forEach((x) => x.classList.replace("dark-bg", "light-bg"));
      theme.projectTile.forEach((x) =>
        x.classList.replace("--project-dark", "--project-light")
      );
    }
  },
};

theme.init();
