function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max + 1 - min)) + min;
}

const newGame = document.querySelector('.btn-new');
const rollDice = document.querySelector('.btn-roll');
const hold = document.querySelector('.btn-hold');
let player1Score = document.getElementById('score-0');
let player2Score = document.getElementById('score-1');
let player1RoundScore = document.getElementById('current-0');
let player2RoundScore = document.getElementById('current-1');
let dice1 = document.getElementById('dice1')
let dice2 = document.getElementById('dice2')
let player1RoundTotal = document.getElementById('current-0')
let player2RoundTotal = document.getElementById('current-1')
let player1Panel = document.querySelector('.player-1-panel')
let player2Panel = document.querySelector('.player-2-panel')



function resetGame(e) {
  player1Score.innerHTML = 0;
  player2Score.innerHTML = 0;
  player1RoundScore.innerHTML = 0;
  player2RoundScore.innerHTML = 0;
  dice1.src = 'dice-1.png';
  dice2.src = 'dice-1.png';
  player1Panel.classList.add('active')
  player2Panel.classList.remove('active')
}

function rollTheDice() {
  
  
  let roll1 = getRandomInt(1, 6);
  let roll2 = getRandomInt(1, 6)

  dice1.src = `dice-${roll1}.png`;
  dice2.src = `dice-${roll2}.png`;

  if(roll1 !== 1 && roll2 !== 1 && player1Panel.classList.contains('active')) {
    console.log('while')
    player1RoundTotal.innerHTML = (+player1RoundTotal.innerHTML + roll1 + roll2);
} else if (roll1 !== 1 && roll2 !== 1 && player2Panel.classList.contains('active')) {
  player2RoundTotal.innerHTML = (+player2RoundTotal.innerHTML + roll1 + roll2);
} else {
    player1RoundTotal.innerHTML = 0;
    player2RoundTotal.innerHTML = 0;
    player1Panel.classList.toggle('active')
    player2Panel.classList.toggle('active')
}
}

function holdTheScore() {
  if (player1Panel.classList.contains('active')) {
  player1Score.innerHTML = (+player1Score.innerHTML + +player1RoundTotal.innerHTML)
  player1RoundScore.innerHTML = 0;
  player1Panel.classList.toggle('active')
  player2Panel.classList.toggle('active')
} else {
  player2Score.innerHTML = (+player2Score.innerHTML + +player2RoundTotal.innerHTML)
  player2RoundScore.innerHTML = 0;
  player2Panel.classList.toggle('active')
  player1Panel.classList.toggle('active')
}
}

newGame.addEventListener('click', resetGame);
rollDice.addEventListener('click', rollTheDice);
hold.addEventListener('click', holdTheScore);
let firstLoad = window.addEventListener('DOMContentLoaded', resetGame)

