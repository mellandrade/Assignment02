/*eslint-env broswer*/
var x = window.prompt("Pick a number 1-50.");
var y = window.prompt("Pick a number 1-50. Not the same as the first one.");
if (x >= y) {
    document.write(x);
} else if (y >= x) {
    document.write(y);
}