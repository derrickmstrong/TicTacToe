const players = [
  {
    name: 'P🐶w Patrol',
    symbol: '🐶',
  },
  {
    name: 'Li🦁n King',
    symbol: '🦁',
  },
];

let turn = 0;

const cells = document.querySelectorAll('.row > div');

// Looping through the cells
for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener('click', cellClicked);
}

// App Logic
function cellClicked() {
  // Check to see whose turn it is
  if (turn % 2 == 0) {
    // TODO: Remove later, decided to go with emojis instead of change symbol colors event.target.classList.add('red'); 
    event.target.textContent = players[0].symbol;
    turn++;
  } else if (!(turn % 2 == 0)) {
    // TODO: Remove later, decided to go with emojis instead of change symbol colors event.target.classList.add('blue'); 
    event.target.textContent = players[1].symbol;
    turn++;
  }

  // Check for winner - For the record, there has to be a better way than this SUPER LONG if/else statement - Find a way with an object
  if (
    (cells[0].textContent === '🐶' &&
      cells[1].textContent === '🐶' &&
      cells[2].textContent === '🐶') ||
    (cells[3].textContent === '🐶' &&
      cells[4].textContent === '🐶' &&
      cells[5].textContent === '🐶') ||
    (cells[6].textContent === '🐶' &&
      cells[7].textContent === '🐶' &&
      cells[8].textContent === '🐶') ||
    (cells[0].textContent === '🐶' &&
      cells[3].textContent === '🐶' &&
      cells[6].textContent === '🐶') ||
    (cells[1].textContent === '🐶' &&
      cells[4].textContent === '🐶' &&
      cells[7].textContent === '🐶') ||
    (cells[2].textContent === '🐶' &&
      cells[5].textContent === '🐶' &&
      cells[8].textContent === '🐶') ||
    (cells[0].textContent === '🐶' &&
      cells[4].textContent === '🐶' &&
      cells[8].textContent === '🐶') ||
    (cells[2].textContent === '🐶' &&
      cells[4].textContent === '🐶' &&
      cells[6].textContent === '🐶')
  ) {
    // Announce Winner
    console.log(`${players[0].name} Wins!!!`);
    // Remove click event
    // FIXME: cells.removeEventListener('click', cellClicked); I need to figure out how to get this game to stop accepting clicks and removeEventListener seems like the direction
    // Reset Game Board
    // TODO: I should probably create a reset button instead of forcing the screen to refresh after 3 seconds
    setTimeout(function () {
      location = '';
    }, 3000);
  } else if (
    (cells[0].textContent === '🦁' &&
      cells[1].textContent === '🦁' &&
      cells[2].textContent === '🦁') ||
    (cells[3].textContent === '🦁' &&
      cells[4].textContent === '🦁' &&
      cells[5].textContent === '🦁') ||
    (cells[6].textContent === '🦁' &&
      cells[7].textContent === '🦁' &&
      cells[8].textContent === '🦁') ||
    (cells[0].textContent === '🦁' &&
      cells[3].textContent === '🦁' &&
      cells[6].textContent === '🦁') ||
    (cells[1].textContent === '🦁' &&
      cells[4].textContent === '🦁' &&
      cells[7].textContent === '🦁') ||
    (cells[2].textContent === '🦁' &&
      cells[5].textContent === '🦁' &&
      cells[8].textContent === '🦁') ||
    (cells[0].textContent === '🦁' &&
      cells[4].textContent === '🦁' &&
      cells[8].textContent === '🦁') ||
    (cells[2].textContent === '🦁' &&
      cells[4].textContent === '🦁' &&
      cells[6].textContent === '🦁')
  ) {
    console.log(`${players[1].name} Wins!!!`);
    // Remove click event
    // FIXME: cells.removeEventListener('click', cellClicked); I need to figure out how to get this game to stop accepting clicks and removeEventListener seems like the direction
    // Reset Game Board
    // TODO: I should probably create a reset button instead of forcing the screen to refresh after 3 seconds
    setTimeout(function () {
      location = '';
    }, 3000);
  }
}

// Notes: Additional way to immediately reset page
// window.location.reload(true);
