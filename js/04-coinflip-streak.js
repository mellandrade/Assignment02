/*eslint-env broswer*/
var coinFlip;

do (coinFlip = Math.round(Math.random())) {
    if (coinFlip === 0) {
        window.console.log("Heads");
}   else (coinFlip === 1) {
        window.console.log("Tails");
} while (coinFlip == 1);
    document.write("End of the game."); 
}