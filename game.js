var PLAYER_1 = 0;
var PLAYER_2 = 1;
var turn = PLAYER_1;
var lives = [3, 3];

var op = 0;
var generatedNumber1 = Math.floor(Math.random() * 20 + 1);
var generatedNumber2 = Math.floor(Math.random() * 20 + 1);
var userAnswer = prompt('What is the answer to:');

var setOperator = function () {
  if (generatedNumber1 < 7) {
      op = "+";
  } else if ((generatedNumber1 >=7) && (generatedNumber1 < 14)) {
      op = "*";
  } else if ((generatedNumber1 >= 14) && (generatedNumber1 < 21)) {
      op = "-"; 
  }
}

function generatedNumbers () {
  generatedNumber1 = Math.floor(Math.random() * 20 + 1);
  generatedNumber2 = Math.floor(Math.random() * 20 + 1);
  setOperator();
}

function promptUser () {
  return prompt("Player " + (turn + 1) + "please answer the following " + generatedNumber1 + " " + op + " " + generatedNumber2);
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

function gameLoop () {
  while (lives[PLAYER_1] >= 1 && lives[PLAYER_2] >= 1) {

    generateNumbers(); // 2.Need to generate two numbers and a mathematical operator to do that

    var answer = promptUser(); // Generate a question - connect the two numbers & operator to show up in this prompt

    if ( correct( answer ) ) {
      alert("grats!");
    } else {
      alert("idiot!");
      looseLife();
    }

    changeTurn();

  }

}



console.log(question());    







