export const darkMode = {
  init() {
    const darkBtn = document.querySelector(".dark-mode-btn");
    const darkIcon = darkBtn.firstElementChild;
    const bodyElt = document.querySelector("body");
    const wsTitle = document.querySelector(".ws-title");
    const welcomeSection = document.querySelector("#welcome-section");
    const projectSection = document.querySelector("#projects");
    const blogSection = document.querySelector("#blog");
    const contactSection = document.querySelector("#contact");
    const contactDetails = document.querySelectorAll(".contact-details");
    const footer = document.querySelector("footer");
    const navbar = document.querySelector("#navbar");

    darkBtn.addEventListener("click", () => {
      if (darkIcon.classList.contains("fa-sun")) {
        darkIcon.classList.replace("fa-sun", "fa-moon");
        bodyElt.style.color = "black";
        wsTitle.classList.replace("ws-title-dark", "ws-title-light");
        welcomeSection.style.background = "var(--light-mode-one)";
        projectSection.style.background = "var(--light-mode-two)";
        blogSection.style.background = "var(--light-mode-three)";
        contactSection.style.background = "var(--light-mode-four)";
        // darkBtn.style.background = "var(--light-mode-five)";
        navbar.style.background = "var(--light-mode-five)";
        footer.style.background = "var(--light-mode-five)";
        contactDetails.forEach((x) => (x.style.textShadow = "none"));
      } else {
        darkIcon.classList.replace("fa-moon", "fa-sun");
        bodyElt.style.color = "var(--main-white)";
        wsTitle.classList.replace("ws-title-light", "ws-title-dark");
        welcomeSection.style.background =
          "linear-gradient(to right, var(--home-light-blue), var(--home-dark-blue))";
        projectSection.style.background =
          "linear-gradient( to right, var(--project-light-blue), var(--project-dark-blue) )";
        blogSection.style.background =
          "linear-gradient(  to right, var(--blog-light-blue), var(--blog-dark-blue))";
        contactSection.style.background =
          "linear-gradient( to right, var(--contact-light-blue),var(--contact-dark-blue))";
        // darkBtn.style.background = "var(--main-red)";
        navbar.style.background = "var(--main-red)";
        footer.style.background =
          "linear-gradient(  to right, var(--home-light-blue), var(--home-dark-blue)  )";
        contactDetails.forEach(
          (x) => (x.style.textShadow = "2px 2px 1px #1f1f1f")
        );
      }
      window.focus;
    });
  },

  //   /**
  //    *
  //    * @param {HTMLElement} icon
  //    */
  //   switchDarkIcon(icon) {
  //     icon.classList.contains("fa-sun")
  //       ? icon.classList.replace("fa-sun", "fa-moon")
  //       : icon.classList.replace("fa-moon", "fa-sun");
  //   },
};
