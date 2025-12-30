"use strict";

// Selecting elements
const wrapper = document.querySelector(".wrapper");
const gridBtn = document.querySelector(".grid-size");
const resetBtn = document.querySelector(".reset");

// Defaults
const maxSize = 960;

// Creates a single square of the size "side"
function createSquare(side) {
    const square = document.createElement("div");
    square.style.width = `${side}px`;
    square.style.height = `${side}px`;
    square.style.backgroundColor = "black";
    square.style.opacity = "0";

    return square;
}

// Creates the grid
function createGrid(numOfSquares = 16) {
    const side = maxSize / numOfSquares;
    const maxSquares = numOfSquares ** 2;

    for (let i = 1; i <= maxSquares; i++) {
        wrapper.appendChild(createSquare(side));
    }
}

// Updates the background color of the target element
function changeBGColor(event) {
    let opacity = Number(event.target.style.opacity);

    if (opacity < 1) {
        event.target.style.opacity = `${opacity + 0.1}`;
    }
}

// Gets the new grid size from user
function getGridSize() {
    let userInput = prompt("Enter grid size: max(100)");
    userInput = Number(userInput);

    if (Number.isNaN(userInput) || userInput === 0 || userInput > 100) {
        alert("Please enter a number between 1 and 100");
    } else {
        return userInput;
    }
}

// Update the background color of an element when hovered on it
function paint() {
    const squares = wrapper.querySelectorAll("div");

    squares.forEach((square) => {
        square.addEventListener("mouseenter", changeBGColor);
    });
}

// Initialize a grid
function init(numOfSquares = 16) {
    wrapper.innerHTML = "";
    createGrid(numOfSquares);
    paint();
}

// Renders a new grid based on the user input
function renderNewGrid() {
    let numOfSquares = getGridSize();

    if (numOfSquares) {
        init(numOfSquares);
    }
}

gridBtn.addEventListener("click", renderNewGrid);
resetBtn.addEventListener("click", () => {
    init();
});

init();
