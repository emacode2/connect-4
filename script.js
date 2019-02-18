//Used lab tic-tac-toe example for this one. But not all of it is clear to me. Most of it is.

const cells = document.querySelectorAll(".cell");
const reset = document.querySelector(".reset");
let currentPlayer = 1;

for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", function(evt) {
    if (currentPlayer === 1) {
      evt.target.style.backgroundColor = "red";
      currentPlayer = 2;
    } else {
      evt.target.style.backgroundColor = "green";
      currentPlayer = 1;
    }

    evt.target.style.pointerEvents = "none";
  });
}

reset.addEventListener("click", function(evt) {
  evt.preventDefault();
  console.log(evt.target);
  for (let i = 0; i < cells.length; i++) {
    const element = cells[i];
    element.style.backgroundColor = "white";
    element.style.pointerEvents = "auto";
  }
});
