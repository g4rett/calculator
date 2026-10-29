
//let var1 = 0;
//let var2 = 0;
const operator = ['+', '-', '*', '/'];

function operate(var1, var2, operator) {
    if (operator === "+") {
        console.log(var1 + var2);
    } else if (operator === "-") {
        console.log(var1 - var2);
    } else if (operator === "*") {
        console.log(var1 * var2);
    } else if (operator === "/") {
        if (var2 === 0) {
            return console.log("Cannot divide by zero");
        } else {
            console.log(var1 / var2);
            
        }
    }
}
const screenDisplay = document.getElementsByClassName("screen-display")[0];
screenDisplay.textContent = "ERROR";
screenDisplay.style.fontSize = "40px";

