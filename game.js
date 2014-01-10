
var firstUserLives = 3;
var secondUserLives = 3;
var generatedNumber1 = Math.floor(Math.random() * 20 + 1);
var generatedNumber2 = Math.floor(Math.random() * 20 + 1);
var userAnswer = prompt('What is the answer to:');

var operator = function () {
  if (generatedNumber1 < 7) {
    console.log("+");
} else if ((generatedNumber1 >=7) && (generatedNumber1 < 14)) {
    console.log("*");
} else if ((generatedNumber1 >= 14) && (generatedNumber1 < 21)) {
    console.log("-"); 
}
}

function question () {
   console.log(generatedNumber1);
   operator();
   console.log(generatedNumber2);
}


console.log(question());    







