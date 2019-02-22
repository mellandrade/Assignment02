/*eslint-env broswer*/

var coinFlip = (Math.round(Math.random() * 2));
var choice = prompt("Select Heads or Tails", choice);
// 0 == HEADS
/*if (choice == "Heads" || choice == "heads") {
if (coinFlip == 0) {
    alert("The flip was heads and you chose heads... you win!"); 
} else {
    alert("The flip was tails but you chose heads... you lose!");
}
}*/
 // 1 == TAILS
/*else if (choice == "Tails" || choice == "tails") {
if (coinFlip == 1) {
    alert("The flip was tails and you chose tails... you win!");
} else {
    alert("The flip was heads but you chose tails... you lose!");     
}
}*/
// BOOLEAN
if (choice == "Heads" || choice == "heads") {
if (coinFlip == 0) {
    alert("This is True.");
} else {
    alert("This is False.");
}
}
else if (choice == "Tails" || choice == "tails") {
if (coinFlip == 1) {
    alert("This is True.");
} else {
    alert("This is False.");
}
}    