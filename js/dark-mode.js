export const darkMode = {
  init() {
    const darkBtn = document.querySelector(".dark-mode-btn");
    const darkIcon = darkBtn.firstElementChild;

    darkBtn.addEventListener("click", () => {
      darkMode.switchDarkIcon(darkIcon);
    });
  },

  /**
   *
   * @param {HTMLElement} icon
   */
  switchDarkIcon(icon) {
    icon.classList.contains("fa-sun")
      ? icon.classList.replace("fa-sun", "fa-moon")
      : icon.classList.replace("fa-moon", "fa-sun");
  },
};
