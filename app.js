// Define Players
const players = [
  {
    name: 'P1',
    emoji: '👸🏽',
  },
  {
    name: 'P2',
    emoji: '🐸',
  },
];

// Define Winning Combinations
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

// Define Variables
let turn = 0;
let gameOver = false;

const cells = document.querySelectorAll('.row > div');
const winner = document.querySelector('#winner');

// Define Styles
const resetStyles = {
  boxShadow: 'inset 0px 1px 0px 0px #f29c93',
  background: 'linear-gradient(to bottom, #fe1a00 5%, #ce0100 100%)',
  backgroundColor: '#fe1a00',
  borderRadius: '6px',
  border: '1px solid #d83526',
  display: 'inline-block',
  cursor: 'pointer',
  color: '#ffffff',
  fontFamily: 'Arial',
  fontSize: '15px',
  fontWeight: 'bold',
  padding: '1rem',
  textDecoration: 'none',
  textShadow: '0px 1px 0px #b23e35',
};

const readyStyles = {
  fontSize: '3rem',
  fontWeight: 'bold',
  margin: '0 auto',
  position: 'relative',
  left: '5rem',
  color: 'red',
};

const announceWinnerStyles = {
  color: 'black',
  fontSize: '2em',
  padding: '.5em',
  margin: 'auto',
};

// Ready Statement
const ready = document.createElement('div');
ready.textContent = 'READY';
Object.assign(ready.style, readyStyles);
document.querySelector('.middle').appendChild(ready);

// Listen for clicks
for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener('click', cellClicked);
}

// App Logic
function cellClicked() {
  // Check to see whose turn it is AND Check for end of game
  if (gameOver) {
    cells[i].removeEventListener('click', cellClicked);
  } else if (turn % 2 == 0) {
    ready.style.display = 'none';
    event.target.textContent = players[0].emoji;
    turn++;
  } else if (!(turn % 2 == 0)) {
    event.target.textContent = players[1].emoji;
    turn++;
  }

  // Check if P1 is the winner
  for (let i = 0; i < combo.length; i++) {
    // Check if game is a DRAW
    // FIXME: Figure out why the Draw check is not working properly; Instead of saying Draw Once and add one button its addding 8
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
      gameOver = true;
      // Announce Winner
      // const announceWinner = document.createElement('div');
      // announceWinner.textContent = `DRAW!!!`;
      // Object.assign(announceWinner.style, announceWinnerStyles);
      // document.querySelector('#winner').appendChild(announceWinner);

      // Reset Game Board
      const btn = document.querySelector('.btn');
      const resetBtn = document.createElement('button');
      resetBtn.textContent = 'RESET GAME';

      // Apply resetStyles
      Object.assign(resetBtn.style, resetStyles);

      // Attach resetBtn to document
      btn.appendChild(resetBtn);

      resetBtn.addEventListener('click', resetGame);

      function resetGame() {
        setTimeout(function () {
          location = '';
        }, 500);
      }
    } else if (
      cells[combo[i][0]].textContent == players[0].emoji &&
      cells[combo[i][1]].textContent == players[0].emoji &&
      cells[combo[i][2]].textContent == players[0].emoji
    ) {
      gameOver = true;
      // Announce Winner
      const announceWinner = document.createElement('div');
      announceWinner.textContent = `${players[0].name} Wins`;
      Object.assign(announceWinner.style, announceWinnerStyles);
      document.querySelector('#winner').appendChild(announceWinner);

      // Reset Game Board
      const btn = document.querySelector('.btn');
      const resetBtn = document.createElement('button');
      resetBtn.textContent = 'RESET GAME';

      // Apply resetStyles
      Object.assign(resetBtn.style, resetStyles);

      // Attach resetBtn to document
      btn.appendChild(resetBtn);

      resetBtn.addEventListener('click', resetGame);

      function resetGame() {
        setTimeout(function () {
          location = '';
        }, 500);
      }
      // Check if P2 is the winner
    } else if (
      cells[combo[i][0]].textContent == players[1].emoji &&
      cells[combo[i][1]].textContent == players[1].emoji &&
      cells[combo[i][2]].textContent == players[1].emoji
    ) {
      gameOver = true;
      // Announce Winner
      const announceWinner = document.createElement('div');
      announceWinner.textContent = `${players[1].name} Wins`;
      Object.assign(announceWinner.style, announceWinnerStyles);
      document.querySelector('#winner').appendChild(announceWinner);

      // Reset Game Board
      const btn = document.querySelector('.btn');
      const resetBtn = document.createElement('button');
      resetBtn.textContent = 'RESET GAME';

      // Apply resetStyles
      Object.assign(resetBtn.style, resetStyles);

      // Attach resetBtn to document
      btn.appendChild(resetBtn);

      resetBtn.addEventListener('click', resetGame);

      function resetGame() {
        setTimeout(function () {
          location = '';
        }, 500);
      }
    }
  }
}
