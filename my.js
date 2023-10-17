'usestrict';

// selectors

const start_Game_Button = document.querySelector('.header button');
const header_display = document.querySelector('.header');
const playing_Section = document.querySelector('.playing');
const player_Choice = document.getElementById('player-Choice');
const player_Img_Rock = document.getElementById('img-rock');
const player_Img_Paper = document.getElementById('img-paper');
const player_Img_Scissors = document.getElementById('img-scissors');
const computer_Img_Rock = document.getElementById('comp-rock');
const computer_Img_Paper = document.getElementById('comp-paper');
const computer_Img_Scissors = document.getElementById('comp-scissors');
const go_Button = document.querySelector('.go-button');
const winner_Para = document.querySelector('.winner-Quote');
const player_Score_Para = document.querySelector('.player-score');
const computer_Score_Para = document.querySelector('.computer-score');
// ____________________________________________________________________________

// variables global scope
let active_Computer;
let player_Score = 0;
let computer_Score = 0;

// ___________________________________________________

// start game function
const start_Game = function () {
  header_display.classList.add('hidden');
  playing_Section.classList.remove('hidden');
};

start_Game_Button.addEventListener('click', start_Game);

// ____________________________________________________________

// player selecting between rock,paper & scissors function
const selecting = function () {
  if (player_Choice.value === 'rock') {
    player_Img_Rock.classList.add('active-background');
    player_Img_Paper.classList.remove('active-background');
    player_Img_Scissors.classList.remove('active-background');
  } else if (player_Choice.value === 'paper') {
    player_Img_Paper.classList.add('active-background');
    player_Img_Rock.classList.remove('active-background');
    player_Img_Scissors.classList.remove('active-background');
  } else if (player_Choice.value === 'scissors') {
    player_Img_Scissors.classList.add('active-background');
    player_Img_Rock.classList.remove('active-background');
    player_Img_Paper.classList.remove('active-background');
  }
};

player_Choice.addEventListener('change', selecting);

// ___________________________________________________________________

// computer selecting rock,paper & scissors after you press GO button

const random_Computer = function () {
  winner_Para.textContent = '';
  let random = Math.floor(Math.random() * 3) + 1;

  if (random === 1) {
    active_Computer = 'rock';
    computer_Img_Rock.classList.add('active-background');
    computer_Img_Paper.classList.remove('active-background');
    computer_Img_Scissors.classList.remove('active-background');
    winner();
  } else if (random === 2) {
    active_Computer = 'paper';
    computer_Img_Paper.classList.add('active-background');
    computer_Img_Rock.classList.remove('active-background');
    computer_Img_Scissors.classList.remove('active-background');
    winner();
  } else if (random === 3) {
    active_Computer = 'scissors';
    computer_Img_Scissors.classList.add('active-background');
    computer_Img_Paper.classList.remove('active-background');
    computer_Img_Rock.classList.remove('active-background');
    winner();
  }
};

go_Button.addEventListener('click', random_Computer);
// ___________________________________________________________________________

// comparing between player and computer choice and deciding the winner function

const winner = function () {
  if (active_Computer === player_Choice.value) {
    winner_Para.textContent = 'Tie';
  } else if (active_Computer === 'rock' && player_Choice.value === 'paper') {
    winner_Para.textContent = 'player wins';
    player_Score++;
    player_Score_Para.textContent = `Player--${player_Score}`;
  } else if (active_Computer === 'rock' && player_Choice.value === 'scissors') {
    winner_Para.textContent = 'computer wins';
    computer_Score++;
    computer_Score_Para.textContent = `Computer--${computer_Score}`;
  } else if (active_Computer === 'paper' && player_Choice.value === 'rock') {
    winner_Para.textContent = 'computer wins';
    computer_Score++;
    computer_Score_Para.textContent = `Computer--${computer_Score}`;
  } else if (
    active_Computer === 'paper' &&
    player_Choice.value === 'scissors'
  ) {
    winner_Para.textContent = 'player wins';
    player_Score++;
    player_Score_Para.textContent = `Player--${player_Score}`;
  } else if (active_Computer === 'scissors' && player_Choice.value === 'rock') {
    winner_Para.textContent = 'player wins';
    player_Score++;
    player_Score_Para.textContent = `Player--${player_Score}`;
  } else if (
    active_Computer === 'scissors' &&
    player_Choice.value === 'paper'
  ) {
    winner_Para.textContent = 'computer wins';
    computer_Score++;
    computer_Score_Para.textContent = `Computer--${computer_Score}`;
  }
};
