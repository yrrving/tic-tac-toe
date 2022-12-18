// script.js

const board = document.getElementById("board");
const cells = board.getElementsByTagName("td");
let player = "X";

board.addEventListener("click", function(event) {
  const cell = event.target;
  if (cell.tagName === "TD" && cell.textContent === "") {
    cell.textContent = player;
    player = player === "X" ? "O" : "X";
  }
});

for (const cell of cells) {
  cell.addEventListener("mouseenter", function() {
    this.style.backgroundColor = "lightgray";
  });
  cell.addEventListener("mouseleave", function() {
    this.style.backgroundColor = "";
  });
