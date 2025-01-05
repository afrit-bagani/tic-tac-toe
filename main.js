let cell = document.querySelectorAll(".button");
let currentPlayer = "X";
let gameBoard = ["", "", "", "", "", "", "", "", ""];
let result = document.querySelector("#result");

//  Storeing The Player value in array
function store(cell) {
  cell.forEach(function (cell, index) {
    cell.addEventListener("click", () => {
      if (gameBoard[index] === "") {
        gameBoard[index] = currentPlayer;
        cell.textContent = currentPlayer;

        if (checkWinner()) {
          result.textContent = `${currentPlayer} is Winner`;
          resetGame();
        } else if (gameBoard.every((cell) => cell !== "")) {
          result.textContent = `It is a Tie`;
          resetGame();
        } else {
          // update current player after one click
          currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
      }
    });
  });
}

//  Wining Condition
function checkWinner() {
  // Wining Combo
  let winingCombo = [
    // row wise winning combo
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // column wise winning combo
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // Diagonal wise winning combo
    [0, 4, 8],
    [2, 4, 6],
  ];
  if (
    winingCombo.some(
      (combo) =>
        gameBoard[combo[0]] !== "" &&
        gameBoard[combo[0]] === gameBoard[combo[1]] &&
        gameBoard[combo[0]] === gameBoard[combo[2]]
    )
  ) {
    result.innerHTML = `<p class="cross">${currentPlayer} is the Winner</p>`;
    resetGame();
    return true;
  }
}
function resetGame() {
  gameBoard = ["", "", "", "", "", "", "", "", ""];
  currentPlayer = "X";
  result = "";
  cell.forEach((cell) => {
    cell.textContent = "";
  });
}
store(cell);
