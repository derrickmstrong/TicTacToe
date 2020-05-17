// Define Variables including Players + Winning Combinations
const cells = document.querySelectorAll('.row > div');
const winner = document.querySelector('#winner');

const players = [
  {
    name: '👸👸 Wins 👸👸',
    emoji: '👸',
  },
  {
    name: '🍄🍄 Wins 🍄🍄',
    emoji: '🍄',
  },
  {
    name: '🎲🎲 DRAW 🎲🎲',
    emoji: '🎲',
  },
];

let player = players[0].emoji;

let gameOver = false;

const winningCombo = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// Define Styles
const insertCoinsStyles = {
  fontSize: '2rem',
  fontWeight: 'bold',
  textAlign: 'center',
  position: 'relative',
  color: '#2B1061',
  width: '300px',
  paddingTop: '2rem',
};

const announceWinnerStyles = {
  color: '#2B1061',
  backgroundColor: 'rgba(189, 172, 247, 0.8)',
  fontSize: '1.5em',
  textAlign: 'center',
  position: 'relative',
  top: '-11.5rem',
  padding: '1rem',
};

const resetStyles = {
  boxShadow: 'inset 0px 1px 0px 0px #f29c93',
  background: 'linear-gradient(to bottom, #fe1a00 5%, #ce0100 100%)',
  backgroundColor: '#fe1a00',
  borderRadius: '10px',
  border: '1px solid #d83526',
  cursor: 'pointer',
  color: '#ffffff',
  fontFamily: 'monospace',
  fontSize: '18px',
  fontWeight: 'bold',
  padding: '1rem',
  textShadow: '0px 1px 0px #b23e35',
  position: 'relative',
  top: '-4rem',
};

// Set audio volume
audioVolume(0.5);

// insertCoins Statement
insertCoins();

// Listen for cells clicks
isCellClicked();

// Function Declarations
function audioVolume(num) {
  const audio = document.querySelector('#mario');
  audio.volume = num;
}

function insertCoins() {
  const insertCoins = document.createElement('div');
  insertCoins.textContent = '💰INSERT COIN💰';
  // Apply insertCoinStyles
  Object.assign(insertCoins.style, insertCoinsStyles);
  document.querySelector('#winner').appendChild(insertCoins);
  // Remove div
  setTimeout(function () {
    insertCoins.style.display = 'none';
  }, 2500);
}

function isCellClicked() {
  for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', cellClicked);
  }
}

function cellClicked() {
  isGameOver();
  chooseTurn();
  checkWinner();
}

function isGameOver() {
  if (gameOver) {
    cells[i].removeEventListener('click', cellClicked);
  }
}

function chooseTurn() {
  // Check to see if the cell is empty
  if (
    event.target.textContent === players[0].emoji ||
    event.target.textContent === players[1].emoji
  ) {
    return;
  }
  // Alternate turns between players
  event.target.textContent = player;
  if (player == players[0].emoji) {
    return (player = players[1].emoji);
  } else {
    return (player = players[0].emoji);
  }
}

function checkWinner() {
  // Check if P1 is the winner
  for (let i = 0; i < winningCombo.length; i++) {
    if (isBoardFilledAndWinner(players[0].emoji)) {
      // Announce draw
      announce(players[0].name);
      // Reset game board
      resetGame();
      break;
    } else if (isBoardFilledAndWinner(player[1].emoji)) {
      // Announce draw
      announce(players[1].name);
      // Reset game board
      resetGame();
      break;
    } else if (
      cells[winningCombo[i][0]].textContent == players[0].emoji &&
      cells[winningCombo[i][1]].textContent == players[0].emoji &&
      cells[winningCombo[i][2]].textContent == players[0].emoji
    ) {
      // Announce P1 winner
      announce(players[0].name);
      // Reset game board
      resetGame();
      break;
      // Check if P2 is the winner
    } else if (
      cells[winningCombo[i][0]].textContent == players[1].emoji &&
      cells[winningCombo[i][1]].textContent == players[1].emoji &&
      cells[winningCombo[i][2]].textContent == players[1].emoji
    ) {
      // Announce P2 winner
      announce(players[1].name);
      // Reset game board
      resetGame();
      break;
    } else if (checkDraw()) {
      // Announce draw
      announce(players[2].name);
      // Reset game board
      resetGame();
      break;
    }
  }
}

function isBoardFilledAndWinner(player) {
  // Check for Draw and Winner
  if (
    (cells[0].textContent != '' &&
      cells[1].textContent != '' &&
      cells[2].textContent != '' &&
      cells[3].textContent != '' &&
      cells[4].textContent != '' &&
      cells[5].textContent != '' &&
      cells[6].textContent != '' &&
      cells[7].textContent != '' &&
      cells[8].textContent != '' &&
      cells[0].textContent == player &&
      cells[1].textContent == player &&
      cells[2].textContent == player) ||
    (cells[0].textContent != '' &&
      cells[1].textContent != '' &&
      cells[2].textContent != '' &&
      cells[3].textContent != '' &&
      cells[4].textContent != '' &&
      cells[5].textContent != '' &&
      cells[6].textContent != '' &&
      cells[7].textContent != '' &&
      cells[8].textContent != '' &&
      cells[3].textContent == player &&
      cells[4].textContent == player &&
      cells[5].textContent == player) ||
    (cells[0].textContent != '' &&
      cells[1].textContent != '' &&
      cells[2].textContent != '' &&
      cells[3].textContent != '' &&
      cells[4].textContent != '' &&
      cells[5].textContent != '' &&
      cells[6].textContent != '' &&
      cells[7].textContent != '' &&
      cells[8].textContent != '' &&
      cells[6].textContent == player &&
      cells[7].textContent == player &&
      cells[8].textContent == player) ||
    (cells[0].textContent != '' &&
      cells[1].textContent != '' &&
      cells[2].textContent != '' &&
      cells[3].textContent != '' &&
      cells[4].textContent != '' &&
      cells[5].textContent != '' &&
      cells[6].textContent != '' &&
      cells[7].textContent != '' &&
      cells[8].textContent != '' &&
      cells[0].textContent == player &&
      cells[3].textContent == player &&
      cells[6].textContent == player) ||
    (cells[0].textContent != '' &&
      cells[1].textContent != '' &&
      cells[2].textContent != '' &&
      cells[3].textContent != '' &&
      cells[4].textContent != '' &&
      cells[5].textContent != '' &&
      cells[6].textContent != '' &&
      cells[7].textContent != '' &&
      cells[8].textContent != '' &&
      cells[1].textContent == player &&
      cells[4].textContent == player &&
      cells[7].textContent == player) ||
    (cells[0].textContent != '' &&
      cells[1].textContent != '' &&
      cells[2].textContent != '' &&
      cells[3].textContent != '' &&
      cells[4].textContent != '' &&
      cells[5].textContent != '' &&
      cells[6].textContent != '' &&
      cells[7].textContent != '' &&
      cells[8].textContent != '' &&
      cells[2].textContent == player &&
      cells[5].textContent == player &&
      cells[8].textContent == player) ||
    (cells[0].textContent != '' &&
      cells[1].textContent != '' &&
      cells[2].textContent != '' &&
      cells[3].textContent != '' &&
      cells[4].textContent != '' &&
      cells[5].textContent != '' &&
      cells[6].textContent != '' &&
      cells[7].textContent != '' &&
      cells[8].textContent != '' &&
      cells[0].textContent == player &&
      cells[4].textContent == player &&
      cells[8].textContent == player) ||
    (cells[0].textContent != '' &&
      cells[1].textContent != '' &&
      cells[2].textContent != '' &&
      cells[3].textContent != '' &&
      cells[4].textContent != '' &&
      cells[5].textContent != '' &&
      cells[6].textContent != '' &&
      cells[7].textContent != '' &&
      cells[8].textContent != '' &&
      cells[2].textContent == player &&
      cells[4].textContent == player &&
      cells[6].textContent == player)
  ) {
    return true;
  }
}

function checkDraw() {
  // Check for Draw
  if (
    cells[0].textContent != '' &&
    cells[1].textContent != '' &&
    cells[2].textContent != '' &&
    cells[3].textContent != '' &&
    cells[4].textContent != '' &&
    cells[5].textContent != '' &&
    cells[6].textContent != '' &&
    cells[7].textContent != '' &&
    cells[8].textContent != ''
  ) {
    return true;
  }
}

function announceDraw() {
  // Check for Draw
  if (
    cells[0].textContent != '' &&
    cells[1].textContent != '' &&
    cells[2].textContent != '' &&
    cells[3].textContent != '' &&
    cells[4].textContent != '' &&
    cells[5].textContent != '' &&
    cells[6].textContent != '' &&
    cells[7].textContent != '' &&
    cells[8].textContent != ''
  ) {
    // Announce draw
    announce(players[2].name);
    // Reset game board
    resetGame();
  }
}

function announce(winner) {
  gameOver = true;
  const announceWinner = document.createElement('div');
  announceWinner.textContent = `${winner}`;
  Object.assign(announceWinner.style, announceWinnerStyles);
  document.querySelector('#winner').appendChild(announceWinner);
}

function resetGame() {
  const btn = document.querySelector('#btn');
  const resetBtn = document.createElement('button');
  resetBtn.textContent = 'PLAY AGAIN';
  // Apply resetStyles
  Object.assign(resetBtn.style, resetStyles);
  // Attach resetBtn to document
  btn.appendChild(resetBtn);

  resetBtn.addEventListener('click', clearBoard);
}

function clearBoard() {
  for (const cell of cells) {
    cell.textContent = '';
  }
  winner.remove();
  btn.remove();
  location.reload();
}
