// Define Variables including Players + Winning Combinations
let turn = 0;
let gameOver = false;

const cells = document.querySelectorAll('.row > div');
console.log(cells);
const winner = document.querySelector('#winner');

const players = [
  {
    name: 'Put Y😷ur Safety First',
    emoji: '😷',
  },
  {
    name: 'R🦠na Strikes Again',
    emoji: '🦠',
  },
  {
    name: 'DRAW',
    emoji: 'D',
  },
];

let player = players[0].emoji;

const combo = [
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
};


// Listen for cells clicks
for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener('click', cellClicked);
}

// insertCoins Statement
insertCoins();

// App Logic
function cellClicked() {
  isGameOver()
  chooseTurn()
  checkWinner()  
}

// Functions
function insertCoins() {
  const insertCoins = document.createElement('div');
  insertCoins.textContent = '💰INSERT COIN💰';
  Object.assign(insertCoins.style, insertCoinsStyles);
  document.querySelector('#winner').appendChild(insertCoins);
  setTimeout(function () {
    insertCoins.style.display = 'none';
  }, 4000);
}

function chooseTurn() {
  // Check to see if anything is in the cells already
  if (event.target.textContent === players[0].emoji || event.target.textContent === players[1].emoji) {
      return;
    } 
  
  // Alternate Player
  event.target.textContent = player;
  if (player == players[0].emoji) {
    player = players[1].emoji;
  } else {
    player = players[0].emoji;
  }
}

function checkWinner() {
  for (let i = 0; i < combo.length; i++) {
    if (
      cells[combo[i][0]].textContent == players[0].emoji &&
      cells[combo[i][1]].textContent == players[0].emoji &&
      cells[combo[i][2]].textContent == players[0].emoji
    ) {
      // Announce Winner
      announce(players[0].name);
      // Reset Game Board
      resetGame();
      // Check if P2 is the winner
    } else if (
      cells[combo[i][0]].textContent == players[1].emoji &&
      cells[combo[i][1]].textContent == players[1].emoji &&
      cells[combo[i][2]].textContent == players[1].emoji
    ) {
      // Announce Winner
      announce(players[1].name);
      // Reset Game Board
      resetGame();
    }
  }
}

function isGameOver() {
  if (gameOver) {
    cells[i].removeEventListener('click', cellClicked);
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
  const btn = document.querySelector('.btn');
  const resetBtn = document.createElement('button');
  resetBtn.textContent = 'TRY AGAIN';

  // Apply resetStyles
  Object.assign(resetBtn.style, resetStyles);

  // Attach resetBtn to document
  btn.appendChild(resetBtn);

  resetBtn.addEventListener('click', refreshPage);
}

function refreshPage() {
  setTimeout(function () {
    location = '';
  }, 100);

  //TODO: Set the textContent for all of the cells to empty instead of doing a page reset ie. cells[0].textContent = ""
}
