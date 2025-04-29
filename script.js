const board = document.getElementById("board");
let currentPlayer = "X";
let cells = Array(9).fill("");
let gameOver = false;

function checkWinner() {
  const wins = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ];
  
  for (let [a, b, c] of wins) {
    if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
      gameOver = true;
      setTimeout(() => alert("Yay! " + cells[a] + " wins! 🎉"), 100);
      return;
    }
  }

  // Check for draw
  if (!cells.includes("") && !gameOver) {
    gameOver = true;
    setTimeout(() => alert("It's a draw! 😅"), 100);
  }
}

function renderBoard() {
  board.innerHTML = "";
  cells.forEach((cell, i) => {
    const div = document.createElement("div");
    div.className = "cell";
    div.textContent = cell;
    div.addEventListener("click", () => {
      if (!cells[i] && !gameOver) {
        cells[i] = currentPlayer;
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        renderBoard();
        checkWinner();
      }
    });
    board.appendChild(div);
  });
}

renderBoard();
