export const theme = {
  // initialize the variables that contain the HTML elements to modify when switching theme
  darkBtn: document.querySelector(".dark-mode-btn"),
  darkIcon: document.querySelector(".dark-mode-btn").firstElementChild,
  bodyElt: document.querySelector("body"),
  wsTitle: document.querySelector(".ws-title"),
  welcomeSection: document.querySelector("#welcome-section"),
  projectSection: document.querySelector("#projects"),
  blogSection: document.querySelector("#blog"),
  contactSection: document.querySelector("#contact"),
  contactDetails: document.querySelectorAll(".contact-details"),
  footer: document.querySelector("footer"),
  navbar: document.querySelector("#navbar"),
  navbarLinks: document.querySelectorAll(".link-dark"),
  article: document.querySelectorAll(".article"),

  /**
   * handle the dark/light mode
   */
  init() {
    if (theme.themePreference() === "light") {
      theme.switchToLightMode();
    }
    theme.darkBtn.addEventListener("click", () => {
      theme.switchTheme();
      window.focus;
    });
  },

  /**
   * get the prefered theme stored in local storage or return dark by default
   * @returns {string} "dark" or "light"
   */
  themePreference() {
    if (localStorage.getItem("theme")) {
      return localStorage.getItem("theme");
    }
    return "dark";
  },

  /**
   * handle the switch to dark or light mode
   */
  switchTheme() {
    theme.testDarkMode() ? theme.switchToDarkMode() : theme.switchToLightMode();
  },

  /**
   * return "true" if light mode is currently on, "false" is dark mode is currently on
   * @returns {boolean}
   */
  testDarkMode() {
    return theme.darkIcon.classList.contains("fa-moon");
  },

  /**
   * handle the switch of HTML elements to dark mode
   */
  switchToDarkMode() {
    theme.darkIcon.classList.replace("fa-moon", "fa-sun");
    theme.bodyElt.style.color = "var(--main-white)";
    theme.wsTitle.classList.replace("ws-title-light", "ws-title-dark");
    theme.welcomeSection.style.background =
      "linear-gradient(to right, var(--home-light-blue), var(--home-dark-blue))";
    theme.projectSection.style.background =
      "linear-gradient( to right, var(--project-light-blue), var(--project-dark-blue) )";
    theme.blogSection.style.background =
      "linear-gradient(  to right, var(--blog-light-blue), var(--blog-dark-blue))";
    theme.contactSection.style.background =
      "linear-gradient( to right, var(--contact-light-blue),var(--contact-dark-blue))";
    theme.navbar.style.background = "var(--main-red)";
    theme.navbarLinks.forEach((x) =>
      x.classList.replace("link-light", "link-dark")
    );
    theme.footer.style.background =
      "linear-gradient(  to right, var(--home-light-blue), var(--home-dark-blue)  )";
    theme.contactDetails.forEach(
      (x) => (x.style.textShadow = "2px 2px 1px #1f1f1f")
    );
    theme.article.forEach((x) =>
      x.classList.replace("light-shadow", "dark-shadow")
    );
    localStorage.setItem("theme", "dark");
  },

  /**
   * handle the switch of HTML elements to light mode
   */
  switchToLightMode() {
    theme.darkIcon.classList.replace("fa-sun", "fa-moon");
    theme.bodyElt.style.color = "black";
    theme.wsTitle.classList.replace("ws-title-dark", "ws-title-light");
    theme.welcomeSection.style.background = "var(--light-mode-one)";
    theme.projectSection.style.background = "var(--light-mode-two)";
    theme.blogSection.style.background = "var(--light-mode-three)";
    theme.contactSection.style.background = "var(--light-mode-four)";
    theme.navbar.style.background = "var(--light-mode-five)";
    theme.navbarLinks.forEach((x) =>
      x.classList.replace("link-dark", "link-light")
    );
    theme.footer.style.background = "var(--light-mode-five)";
    theme.contactDetails.forEach((x) => (x.style.textShadow = "none"));
    theme.article.forEach((x) =>
      x.classList.replace("dark-shadow", "light-shadow")
    );
    localStorage.setItem("theme", "light");
  },
};
