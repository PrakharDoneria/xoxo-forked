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
  const currentPlayerDisplay = document.getElementById('current-player-display');
  const gameMessageDisplay = document.getElementById('game-message-display');

  // Game State
  let currentPlayer = 'x'; // 'x' or 'o'
  let board = Array(9).fill(null);
  let gameActive = true;
  const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6] // Diagonals
  ];

  // Function to update the current player display
  function updatePlayerDisplay() {
    if (currentPlayerDisplay) {
      currentPlayerDisplay.textContent = `Player ${currentPlayer.toUpperCase()}'s Turn`;
    }
  }

  // Function to display game messages
  function showGameMessage(message) {
    if (gameMessageDisplay) {
      gameMessageDisplay.textContent = message;
      gameMessageDisplay.style.display = 'block'; // Ensure message is visible
    }
  }

  // Function to hide game messages
  function hideGameMessage() {
    if (gameMessageDisplay) {
      gameMessageDisplay.style.display = 'none';
      gameMessageDisplay.textContent = ''; // Clear message
    }
  }

  // Window Controls Setup - Attaching listeners once for all relevant buttons
  // Assumes window.electronAPI is available from preload.js
  const allCloseButtons = document.querySelectorAll('.close-button');
  const allShrinkButtons = document.querySelectorAll('.shrink-button');

  allCloseButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Check if electronAPI exists before calling
      if (window.electronAPI && window.electronAPI.closeWindow) {
        window.electronAPI.closeWindow();
      } else {
        console.warn("electronAPI.closeWindow is not available. Running in browser?");
      }
    });
  });

  allShrinkButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Check if electronAPI exists before calling
      if (window.electronAPI && window.electronAPI.minimizeWindow) {
        window.electronAPI.minimizeWindow();
      } else {
        console.warn("electronAPI.minimizeWindow is not available. Running in browser?");
      }
    });
  });

  // Game Functions
  function handleCellClick(cell) {
    const index = cell.dataset.index;
    // Prevent clicks if game is not active or cell is already taken
    if (!gameActive || board[index]) return;

    board[index] = currentPlayer;
    cell.classList.add(currentPlayer);

    if (checkWin()) {
      const winningCells = winningCombinations.find(combo => combo.every(idx => board[idx] === currentPlayer));
      winningCells.forEach(idx => cells[idx].classList.add('win'));
      gameActive = false; // Game ends
      showGameMessage(`Player ${currentPlayer.toUpperCase()} Wins!`); // Display win message

      setTimeout(() => {
        gameScreen.style.display = 'none';
        winScreen.style.display = 'block';
        hideGameMessage(); // Hide message when screen changes
      }, 1500); // Increased delay to better see winning animation
      return;
    }

    // Check for draw after checking for win
    if (board.every(cell => cell)) {
      gameActive = false; // Game ends in a draw
      showGameMessage("It's a Draw!"); // Display draw message
      setTimeout(() => {
        gameScreen.style.display = 'none';
        failScreen.style.display = 'block'; // Using fail screen for draw
        hideGameMessage(); // Hide message when screen changes
      }, 1500); // Increased delay to better see draw state
      return;
    }

    // Switch player if game is still active
    currentPlayer = currentPlayer === 'x' ? 'o' : 'x';
    updatePlayerDisplay(); // Update display for new current player
  }

  function checkWin() {
    return winningCombinations.some(combo => {
      return combo.every(index => board[index] === currentPlayer);
    });
  }

  // Function to restart the game, can be called from win/fail screens
  function restartGame() {
    board.fill(null);
    cells.forEach(cell => {
      cell.className = 'cell'; // Reset all classes (x, o, win)
    });
    currentPlayer = 'x'; // Always start with 'x'
    gameActive = true;
    hideGameMessage(); // Ensure message is hidden on restart
    updatePlayerDisplay(); // Set initial player display
    winScreen.style.display = 'none';
    failScreen.style.display = 'none';
    gameScreen.style.display = 'block'; // Go directly to game screen
  }

  // Initial Setup: Show start screen and hide others
  startScreen.style.display = 'block';
  gameScreen.style.display = 'none';
  winScreen.style.display = 'none';
  failScreen.style.display = 'none';
  hideGameMessage(); // Hide message initially

  // Event Listeners
  startButton.addEventListener('click', () => {
    startScreen.style.display = 'none';
    gameScreen.style.display = 'block';
    resetGameInternal(); // Reset game state but stay on game screen
  });

  claimRewardButton.addEventListener('click', restartGame); // Restart game from win screen
  tryAgainButton.addEventListener('click', restartGame); // Restart game from fail screen

  cells.forEach(cell => {
    cell.addEventListener('click', () => handleCellClick(cell));
  });

  // Internal reset function for when starting a new game from the start screen
  function resetGameInternal() {
    board.fill(null);
    cells.forEach(cell => {
      cell.className = 'cell';
    });
    currentPlayer = 'x';
    gameActive = true;
    hideGameMessage();
    updatePlayerDisplay();
  }

  // Set initial player display when the page loads
  updatePlayerDisplay();
});
