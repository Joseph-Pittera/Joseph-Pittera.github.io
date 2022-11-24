const app = {
  arrayOfColors: [
    "empty",
    "plain",
    "light",
    "highlight",
    "aqua",
    "black",
    "blue",
    "fuchsia",
    "gray",
    "green",
    "lime",
    "maroon",
    "navy",
    "olive",
    "purple",
    "red",
    "silver",
    "teal",
    "white",
    "yellow",
  ],
  currentColor: 1,
  minGridSize: 4,
  maxGridSize: 32,
  minPixelSize: 12,
  maxPixelSize: 32,
  standardGridSize: 10,
  standardPixelSize: 20,

  /**
   * create a div with the parametered class
   * @param {String} classDiv
   * @returns {HTMLElement}
   */
  createDiv(classDiv) {
    const div = document.createElement("div");
    div.className = classDiv;
    return div;
  },

  /**
   * switch cell color by changing the class of the cell
   * @param {HTMLElement} cell
   */
  switchCellColor(cell) {
    if (cell.classList.contains(`--${app.arrayOfColors[app.currentColor]}`)) {
      return;
    }
    // loop on the color table "styles" to remove all the already present "styles" class on the cell
    for (let i = 0; i < app.arrayOfColors.length; i++) {
      cell.classList.remove(`--${app.arrayOfColors[i]}`);
    }
    // add the right class on the cell
    cell.classList.add(`--${app.arrayOfColors[app.currentColor]}`);
  },

  /**
   * create a cell and add it a "click" event listener to switch its color
   * @param {string} pixelSize The pixel size the cell will get
   * @returns {HTMLElement} The created cell
   */
  createCell(pixelSize) {
    const cellDiv = app.createDiv("cell");
    cellDiv.style.width = cellDiv.style.height = pixelSize + "px";
    cellDiv.addEventListener("click", function (event) {
      app.switchCellColor(event.target);
    });
    return cellDiv;
  },

  /**
   * create a grid of the given size
   * @param {string} gridSize
   * @param {string} pixelSize
   */
  gridCreation(gridSize, pixelSize) {
    app.globalDiv.innerHTML = "";
    const size = Number(gridSize);
    for (let line = 0; line < size; line++) {
      const lineDiv = app.createDiv("line");
      app.globalDiv.appendChild(lineDiv);
      for (let cell = 0; cell < size; cell++) {
        const cellDiv = app.createCell(pixelSize);
        lineDiv.appendChild(cellDiv);
      }
    }
  },

  /**
   * verify if the radio is already checked
   * else add the class --checked and remove it from the others
   * @param {*} event
   *
   */
  radioCheckHandler(event) {
    if (event.target.classList.contains("--checked")) {
      return;
    }
    for (let i = 0; i < app.arrayOfColors.length; i++) {
      if (app.colorSelectorButtons[i] === event.target) {
        app.colorSelectorButtons[i].classList.add("--checked");
        app.currentColor = i;
      } else {
        app.colorSelectorButtons[i].classList.remove("--checked");
      }
    }
  },

  /**
   * disable the "Valider" button if no data in inputs
   */
  validButtonEnablingCheck() {
    app.validButton.disabled =
      app.gridSizeInput.value === "" || app.pixelSizeInput.value === "";
  },

  /**
   * main function to initiate the game
   */
  init() {
    // Create the form
    const form = document.createElement("form");
    form.className = "configuration";
    document.body.appendChild(form);
    let lastScrollTop = 0;
    window.addEventListener("scroll", function () {
      const scrollTop =
        window.pageTOffset || this.document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        form.style.top = "-70px";
      } else form.style.top = "0";
      lastScrollTop = scrollTop;
    });
    // create the pixel-art div
    const pixelArtDiv = document.createElement("div");
    pixelArtDiv.className = "pixel-art";
    document.body.appendChild(pixelArtDiv);

    app.globalDiv = app.createDiv("global");
    pixelArtDiv.appendChild(app.globalDiv);

    // Form inputs
    app.gridSizeInput = document.createElement("input");
    app.gridSizeInput.placeholder = "Taille de la grille";
    app.gridSizeInput.className = "gridSize";
    app.gridSizeInput.type = "number";
    app.gridSizeInput.min = app.minGridSize;
    app.gridSizeInput.max = app.maxGridSize;
    app.gridSizeInput.addEventListener("input", app.validButtonEnablingCheck);

    app.pixelSizeInput = document.createElement("input");
    app.pixelSizeInput.placeholder = "Taille des pixels";
    app.pixelSizeInput.className = "pixelSize";
    app.pixelSizeInput.type = "number";
    app.pixelSizeInput.min = app.minPixelSize;
    app.pixelSizeInput.max = app.maxPixelSize;
    app.pixelSizeInput.addEventListener("input", app.validButtonEnablingCheck);

    const validForm = document.querySelector(".configuration");
    validForm.appendChild(app.gridSizeInput);
    validForm.appendChild(app.pixelSizeInput);

    // Form button
    app.validButton = document.createElement("button");
    app.validButton.type = "button";
    app.validButton.className = "btn--submit";
    app.validButton.textContent = "Valider";
    app.validButton.addEventListener("click", function () {
      app.gridCreation(app.gridSizeInput.value, app.pixelSizeInput.value);
    });
    validForm.appendChild(app.validButton);

    // Style color selection buttons
    const colorSelectorDiv = app.createDiv("color-selector");
    pixelArtDiv.appendChild(colorSelectorDiv);
    app.colorSelectorButtons = [];
    for (let i = 0; i < app.arrayOfColors.length; i++) {
      const colorSelectorButton = document.createElement("input");
      app.colorSelectorButtons.push(colorSelectorButton);
      colorSelectorButton.type = "radio";
      colorSelectorButton.name = "color-selector-buttons";
      colorSelectorButton.classList.add("color-selector__button");
      colorSelectorButton.classList.add(`--${app.arrayOfColors[i]}`);
      if (i === app.currentColor) {
        colorSelectorButton.classList.add("--checked");
      }
      colorSelectorButton.addEventListener("click", function (event) {
        app.radioCheckHandler(event);
      });
      colorSelectorDiv.appendChild(colorSelectorButton);
    }
    app.validButtonEnablingCheck();
    app.gridCreation(app.standardGridSize, app.standardPixelSize);
  },
};

document.addEventListener("DOMContentLoaded", app.init);
