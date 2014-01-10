
var firstUser;
var secondUser;
var firstUserLives = 3;
var secondUserLives = 3;
var generatedNumber1 = Math.floor(Math.random() * 20 + 1);
var generatedNumber2 = Math.floor(Math.random() * 20 + 1);
var userAnswer = 0;

console.log(generatedNumber1);

if (generatedNumber1 < 7) {
    console.log("+");
} else if ((generatedNumber1 >=7) && (generatedNumber1 < 14)) {
    console.log("*");
} else if ((generatedNumber1 >= 14) && (generatedNumber1 < 21)) {
    console.log("-"); 
}

// if(generatedNumber1 < 7) {
//   console.log("+");
// } else if((generatedNumber1 >= 7) && (generatedNumber1 < 14)) {
//   console.log("*");
// } else ((generatedNumber1 >= 14) && (generatedNumber1 < 21)) {
//   console.log("-");
// }




