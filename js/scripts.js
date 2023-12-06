// Constructor function for the Tic Tac Toe game
function TicTacToe() {
  this.board = Array(9).fill(null); // Represents the game board
  this.currentPlayer = 'X'; // Starting player
}

// Prototype method to render the game board
TicTacToe.prototype.renderBoard = function () {
  const boardElement = document.getElementById('board');
  boardElement.innerHTML = '';

  this.board.forEach((cell, index) => {
    const cellElement = document.createElement('div');
    cellElement.className = 'cell';
    cellElement.dataset.index = index;

    if (cell !== null) {
      cellElement.textContent = cell;
    }

    cellElement.addEventListener('click', () => this.handleCellClick(index));

    boardElement.appendChild(cellElement);
  });
};

// Prototype method to handle cell click
TicTacToe.prototype.handleCellClick = function (index) {
  if (this.board[index] === null) {
    this.board[index] = this.currentPlayer;
    this.togglePlayer();
    this.renderBoard();
    const winner = this.checkWinner();

    if (winner) {
      alert(`Player ${winner} wins!`);
      this.resetGame();
    } else if (!this.board.includes(null)) {
      alert('It\'s a tie!');
      this.resetGame();
    }
  }
};

// Prototype method to toggle between X and O players
TicTacToe.prototype.togglePlayer = function () {
  this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
};

// Prototype method to check for a winner
TicTacToe.prototype.checkWinner = function () {
  const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6] // Diagonals
  ];

  for (const combination of winningCombinations) {
    const [a, b, c] = combination;
    if (this.board[a] && this.board[a] === this.board[b] && this.board[a] === this.board[c]) {
      return this.board[a];
    }
  }

  return null;
};

// Prototype method to reset the game
TicTacToe.prototype.resetGame = function () {
  this.board = Array(9).fill(null);
  this.currentPlayer = 'X';
  this.renderBoard();
};

// Initialize the game
const game = new TicTacToe();
game.renderBoard();
