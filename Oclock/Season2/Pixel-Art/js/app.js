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
  selectedColor: 1,
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
    if (cell.classList.contains(`--${app.arrayOfColors[app.selectedColor]}`)) {
      return;
    }
    // loop on the color table "styles" to remove all the already present "styles" class on the cell
    for (let color of app.arrayOfColors) {
      cell.classList.remove(`--${color}`);
    }
    // add the right class on the cell
    cell.classList.add(`--${app.arrayOfColors[app.selectedColor]}`);
  },

  /**
   * create a cell and add it a "click" event listener to switch its color
   * @param {string} pixelSize The pixel size the cell will get
   * @returns {HTMLElement} The created cell
   */
  createCell(pixelSize) {
    const cellDiv = app.createDiv("cell");
    cellDiv.style.width = cellDiv.style.height = pixelSize + "px";
    cellDiv.addEventListener("click", function (e) {
      app.switchCellColor(e.target);
    });
    return cellDiv;
  },

  /**
   * create a grid of the given size
   * @param {string} gridSize
   * @param {string} pixelSize
   */
  gridCreation(gridSize, pixelSize) {
    app.drawingDiv.innerHTML = "";
    const size = Number(gridSize);
    for (let line = 0; line < size; line++) {
      const lineDiv = app.createDiv("line");
      app.drawingDiv.appendChild(lineDiv);
      for (let cell = 0; cell < size; cell++) {
        const cellDiv = app.createCell(pixelSize);
        lineDiv.appendChild(cellDiv);
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
   * create and set a new input with parameters
   * @param {string} placeholder - input placeholder
   * @param {string} className - input class
   * @param {number} min - input min number
   * @param {number} max - input max number
   * @returns {HTMLElement} input
   */
  sizeInputSetting(placeholder, className, min, max) {
    const input = document.createElement("input");
    input.placeholder = placeholder;
    input.className = className;
    input.type = "number";
    input.min = min;
    input.max = max;
    input.addEventListener("input", app.validButtonEnablingCheck);
    return input;
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
    for (let i in app.arrayOfColors) {
      if (app.colorSelectorButtons[i] === event.target) {
        app.colorSelectorButtons[i].classList.add("--checked");
        app.selectedColor = i;
      } else {
        app.colorSelectorButtons[i].classList.remove("--checked");
      }
    }
  },

  /**
   * create and set a radio button in the arrayOfColor
   * @param {string} color
   */
  colorRadioInputSetting(color, colorSelectorDiv) {
    const colorSelectorButton = document.createElement("input");
    app.colorSelectorButtons.push(colorSelectorButton);
    colorSelectorButton.type = "radio";
    colorSelectorButton.name = "color-selector-buttons";
    colorSelectorButton.classList.add("color-selector__button");
    colorSelectorButton.classList.add(`--${color}`);
    if (color === app.selectedColor) {
      colorSelectorButton.classList.add("--checked");
    }
    colorSelectorButton.addEventListener("click", function (event) {
      app.radioCheckHandler(event);
    });
    colorSelectorDiv.appendChild(colorSelectorButton);
  },

  /**
   * main function to initiate the game
   */
  init() {
    // Create the form the set size parameters
    const form = document.createElement("form");
    form.className = "configuration";
    document.body.appendChild(form);
    // add a hidding property on scroll to the form
    let lastScrollTop = 0;
    window.addEventListener("scroll", function () {
      const scrollTop =
        window.pageTOffset || this.document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        form.style.top = `-${form.offsetHeight}px`;
      } else form.style.top = "0";
      lastScrollTop = scrollTop;
    });

    // Form inputs
    // set up grid size input
    app.gridSizeInput = app.sizeInputSetting(
      "Taille de la grille",
      "gridSize",
      app.minGridSize,
      app.maxGridSize
    );
    // set up pixel size input
    app.pixelSizeInput = app.sizeInputSetting(
      "Taille des pixels",
      "pixelSize",
      app.minPixelSize,
      app.maxPixelSize
    );

    // Form button
    app.validButton = document.createElement("button");
    app.validButton.type = "button";
    app.validButton.className = "btn--submit";
    app.validButton.textContent = "Valider";
    app.validButtonEnablingCheck();
    app.validButton.addEventListener("click", function () {
      app.gridCreation(app.gridSizeInput.value, app.pixelSizeInput.value);
    });

    form.appendChild(app.gridSizeInput);
    form.appendChild(app.pixelSizeInput);
    form.appendChild(app.validButton);

    // create the pixel-art div that contains the drawing and the colors
    const pixelArtDiv = document.createElement("div");
    pixelArtDiv.className = "pixel-art";
    document.body.appendChild(pixelArtDiv);

    // create the drawing div
    app.drawingDiv = app.createDiv("drawing");
    pixelArtDiv.appendChild(app.drawingDiv);

    // Style color selection buttons
    const colorSelectorDiv = app.createDiv("color-selector");
    pixelArtDiv.appendChild(colorSelectorDiv);
    app.colorSelectorButtons = [];
    app.arrayOfColors.forEach((color) =>
      app.colorRadioInputSetting(color, colorSelectorDiv)
    );
    // creation of the grid with standard size at initiation of the page
    app.gridCreation(app.standardGridSize, app.standardPixelSize);
  },
};

document.addEventListener("DOMContentLoaded", app.init);
