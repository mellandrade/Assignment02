/*eslint-env broswer*/
var coinFlip;
var i;
//Step 1 - 2
/*for (coinFlip = 1; coinFlip <= 10; coinFlip += 1) {
    document.write(coinFlip + "<br>");
}*/


for (coinFlip = (Math.round(Math.random()))); {
if (coinFlip === 0) {
    window.console.log("Heads");
} else if (coinFlip === 1) {
    window.console.log("Tails");
}
}