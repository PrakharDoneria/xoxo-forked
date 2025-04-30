document.addEventListener('DOMContentLoaded', () => {
  // UI Elements
  const startScreen = document.getElementById('start-screen');
  const gameScreen = document.getElementById('game-screen');
  const winScreen = document.getElementById('win-screen');
  const failScreen = document.getElementById('fail-screen');
  const startButton = document.getElementById('start-button');
  const claimRewardButton = document.getElementById('claim-reward-button');
  const tryAgainButton = document.getElementById('try-again-button');
  const cells = document.querySelectorAll('.cell');

  // Game State
  let currentPlayer = 'x';
  let board = Array(9).fill(null);
  let gameActive = true;
  const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6] // Diagonals
  ];

  // Window Controls Setup
  function setupWindowControls(container) {
    const closeButtons = container.querySelectorAll('.close-button');
    const shrinkButtons = container.querySelectorAll('.shrink-button');

    closeButtons.forEach(btn => {
      btn.addEventListener('click', () => window.electronAPI.closeWindow());
    });

    shrinkButtons.forEach(btn => {
      btn.addEventListener('click', () => window.electronAPI.minimizeWindow());
    });
  }

  // Game Functions
  function handleCellClick(cell) {
    const index = cell.dataset.index;
    if (board[index] || !gameActive) return;

    board[index] = currentPlayer;
    cell.classList.add(currentPlayer);

    if (checkWin()) {
      const winningCells = winningCombinations.find(combo => combo.every(index => board[index] === currentPlayer));
      winningCells.forEach(index => cells[index].classList.add('win'));
      gameActive = false;
      setTimeout(() => {
        gameScreen.style.display = 'none';
        winScreen.style.display = 'block';
        setupWindowControls(winScreen);
      }, 1000); // Delay to show winning animation
      return;
    }

    if (board.every(cell => cell)) {
      gameActive = false;
      setTimeout(() => {
        gameScreen.style.display = 'none';
        failScreen.style.display = 'block';
        setupWindowControls(failScreen);
      }, 1000); // Delay to show draw state
      return;
    }

    currentPlayer = currentPlayer === 'x' ? 'o' : 'x';
  }

  function checkWin() {
    return winningCombinations.some(combo => {
      return combo.every(index => board[index] === currentPlayer);
    });
  }

  function resetGame() {
    board.fill(null);
    cells.forEach(cell => {
      cell.className = 'cell'; // Reset all classes
    });
    currentPlayer = 'x';
    gameActive = true;
    startScreen.style.display = 'block';
    gameScreen.style.display = 'none';
    winScreen.style.display = 'none';
    failScreen.style.display = 'none';
    setupWindowControls(startScreen);
  }

  // Initial Setup
  setupWindowControls(startScreen); // Initialize controls for start screen

  // Event Listeners
  startButton.addEventListener('click', () => {
    startScreen.style.display = 'none';
    gameScreen.style.display = 'block';
    setupWindowControls(gameScreen); // Reinitialize for game screen
  });

  claimRewardButton.addEventListener('click', resetGame);
  tryAgainButton.addEventListener('click', resetGame);

  cells.forEach(cell => {
    cell.addEventListener('click', () => handleCellClick(cell));
  });
});