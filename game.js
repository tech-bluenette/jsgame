var PLAYER_1 = 0;
var PLAYER_2 = 1;
var PLAYER_1_NAME = prompt("Enter your name:");
var PLAYER_2_NAME = prompt("Enter your name:");
var turn = PLAYER_1;
var lives = [3, 3];

var op = 0;
var generatedNumber1 = Math.floor(Math.random() * 20 + 1);
var generatedNumber2 = Math.floor(Math.random() * 20 + 1);

var userAnswer = 0;



var setOperator = function () {
  if (generatedNumber1 < 7) {
      op = "+";
  } else if ((generatedNumber1 >=7) && (generatedNumber1 < 14)) {
      op = "*";
  } else if ((generatedNumber1 >= 14) && (generatedNumber1 < 21)) {
      op = "-"; 
  }
}

function generateNumbers () {
  generatedNumber1 = Math.floor(Math.random() * 20 + 1);
  generatedNumber2 = Math.floor(Math.random() * 20 + 1);
  setOperator();
}

// if player 1's turn prompt with player 1's name, else prompt with p2's name
function promptUser () {
  if (turn == PLAYER_1) {
    return prompt(PLAYER_1_NAME + "," + " please answer the following " + generatedNumber1 + " " + op + " " + generatedNumber2);
  }
  else {

  return prompt(PLAYER_2_NAME + "," + " please answer the following " + generatedNumber1 + " " + op + " " + generatedNumber2);
  };
}

function correct ( answer ) {
  if ( ( generatedNumber1 + generatedNumber2 ) == answer && op == '+') {
    return true;
  } else if ( ( generatedNumber1 - generatedNumber2 ) == answer && op == '-') {
    return true;
  } else if ( ( generatedNumber1 * generatedNumber2 ) == answer && op == '*') {
    return true;
  } else {
    return false;
  }
}

function loseLife (turn) {
  if (turn == PLAYER_1) {
      lives[PLAYER_1]--;
  }
  else if (turn == PLAYER_2) {
    lives[PLAYER_2]--;
  }
}

// turn = PLAYER_2 means SET turn to PLAYER_2.
// two == in this case means "does turn equal PLAYER_1?" == is evaluating whether turn and PLAYER_1 are the same.
// one = in this case means "set the turn to PLAYER_2".
function changeTurn () {
  if (turn == PLAYER_1) {
    turn = PLAYER_2
  }
  else {
    turn  = PLAYER_1
  }
}

function gameLoop () {
  while (lives[PLAYER_1] >= 1 && lives[PLAYER_2] >= 1) {

    generateNumbers();

    var answer = promptUser(); 

    if ( correct( answer ) ) {
      alert("You're awesome!");
    } else {
      loseLife(turn);
      alert("You dissapoint me. " );
    }

    changeTurn();

    if (lives[PLAYER_1] < 1 || lives[PLAYER_2] < 1) {
      if (lives[PLAYER_1] < 1) {
        prompt(PLAYER_2_NAME +  " wins!");
      } 
      else {
        prompt(PLAYER_1_NAME + " wins!");
      }
    }
  }
}

window.onload = function () { gameLoop(); };