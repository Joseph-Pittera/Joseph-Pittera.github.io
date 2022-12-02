import { navbar } from "./navbar.js";
import { theme } from "./theme.js";

const script = {
  init() {
    // Gestion de la navbar
    navbar.init();

    // Gestion du dark-mode
    theme.init();
  },
};

document.addEventListener("DOMContentLoaded", script.init);
