var PLAYER_1 = 0;
var PLAYER_2 = 1;
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
  alert( "rand1 " + generatedNumber1 + " rand2  " + generatedNumber2); 
  setOperator();
}

function promptUser () {
  return prompt("Player " + (turn + 1) + " please answer the following " + generatedNumber1 + " " + op + " " + generatedNumber2);
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
      alert("grats!");
    } else {
      alert("idiot!");
      loseLife();
    }

    changeTurn();
  }
}

window.onload = function () { gameLoop(); };