let players = ['x', 'o'];
let activePlayer;
let field = [];

function checkWinner() {
  for (let i = 0; i < field.length; i++) {
    for (let j = 0; j < field.length; j++) {
      if (field[i][0] === players[activePlayer] && field[i][1] === players[activePlayer] && field[i][2] === players[activePlayer]) {
        showWinner(activePlayer);  //проверка по строкам
      } else if (field[0][j] === players[activePlayer] && field[1][j] === players[activePlayer] && field[2][j] === players[activePlayer]) {
        showWinner(activePlayer);  //проверка по столбцам
      } else if (field[0][0] === players[activePlayer] && field[1][1] === players[activePlayer] && field[2][2] === players[activePlayer]) {
        showWinner(activePlayer);  //проверка по диагонали слева направо
      } else if (field[0][2] === players[activePlayer] && field[1][1] === players[activePlayer] && field[2][0] === players[activePlayer]) {
        showWinner(activePlayer); //проверка по диагонали справа налево
      }
    }
  }
}

function startGame() {
  field = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
    
  ];

  renderBoard(field);
  activePlayer = 0;
}

function click(row, col) {
  if (field[row][col] === '') {
    field[row][col] = players[activePlayer];
  }

  checkWinner();
  activePlayer++;

  if (activePlayer % 2 === 0) {
    activePlayer = 0;
  } else {
    activePlayer = 1;
  }

  renderBoard(field);
}