import { navbar } from "./navbar.js";
import { darkMode } from "./dark-mode.js";

const script = {
  init() {
    // Gestion de la navbar
    navbar.init();

    // Gestion du dark-mode
    darkMode.init();
  },
};

document.addEventListener("DOMContentLoaded", script.init);
