const board = document.getElementById ("board")
const cells = [];
const botModeButton = document.getElementById("botModeButton");
      botModeButton.addEventListener("click", toggleBotMode);

let currentPlayer = "X"; 
let xMoves = [];
let oMoves = [];
let botMode = true;
let gameOver = false;

const winningCombinations = [ // Alle möglichen Gewinnkombinationen
    // Reihen
    [0, 1, 2], // Erste Reihe
    [3, 4, 5], // Zweite Reihe
    [6, 7, 8], // Dritte Reihe

    // Spalten
    [0, 3, 6], // Erste Spalte
    [1, 4, 7], // Zweite Spalte
    [2, 5, 8], // Dritte Spalte

    // Diagonalen
    [0, 4, 8], // Erste Diagonale
    [2, 4, 6] // Zweite Diagonale
];

function createBoard () {
    for (let i = 0; i < 9; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        board.appendChild(cell);
        cells.push(cell);
        cell.addEventListener("click", () => makeMove(i));
    }

}

function makeMove(index) {
    if (!gameOver && cells[index].textContent === "") {
        cells[index].textContent = currentPlayer;
  
      if (currentPlayer === "X") {
        cells[index].style.backgroundColor = "Lightblue";
        currentPlayer = "O";
        xMoves.push(index);
      } else {
        cells[index].style.backgroundColor = "Lightcoral";
        currentPlayer = "X";
        oMoves.push(index);
      }
  
      gameFinished();
  
      // Fügen Sie den Bot-Zug hinzu, wenn der Bot-Modus aktiviert ist und das Spiel nicht beendet ist
      if (botMode && currentPlayer === "O" && !gameOver) {
        makeBotMove();
      }
    }
  }
  
  function makeBotMove() {
    const emptyCells = cells.filter((cell) => cell.textContent === "");
    
    if (emptyCells.length > 0) {
      const randomIndex = Math.floor(Math.random() * emptyCells.length);
      const botMoveCell = emptyCells[randomIndex];
      const botMoveIndex = cells.indexOf(botMoveCell);
      
      botMoveCell.textContent = currentPlayer;
      botMoveCell.style.backgroundColor = "Lightcoral";
      oMoves.push(botMoveIndex);
      
      currentPlayer = "X";
      
      gameFinished();
    }
  }

function gameFinished(){

    for (let i = 0; i < winningCombinations.length; i++ ) {

        const combination = winningCombinations[i];
        if (combination.every((value) => xMoves.includes(value))) {
            finishGame("Player X won");
            return;
        }

        if (combination.every((value) => oMoves.includes(value))) {
            finishGame("Player O won");
            return;
        }
    }

    const totalMoves = oMoves.length + xMoves.length;
    if (totalMoves === 9) {
        finishGame("Stalemate");
    }
}

function finishGame(text) {
    setTimeout(() => {
    if (!alert(text)) {
        window.location.reload();
    }
  }, 100)
  gameOver = true;
}

function toggleBotMode() {
    botMode = !botMode;
    botModeButton.textContent = botMode ? "Bot Mode: ON" : "Bot Mode: OFF";
  }

createBoard();


