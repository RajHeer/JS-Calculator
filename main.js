// SELECTORS
const screen = document.querySelector('#screen');
const calcBtns = document.querySelectorAll('.calc-button');

console.log(screen, calcBtns);

// LISTENERS

calcBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        console.log(e.target.innerText);
    })
  }
)

// BASIC OPERATIONS ***

function add (num1, num2) {
    return num1 + num2;
}

function subtract (num1, num2) {
    return num1 - num2;
}

function multiply (num1, num2) {
    return num1 * num2;
}

function divide (num1, num2) {
    return num1 / num2;
}

//OPERATOR FUNCTION

function operate (operator, num1, num2) {
    switch (operator) {
        case "+":
            return add(num1, num2);
            break;
        case "-":
            return subtract(num1, num2);
            break;
        case "*":
            return multiply(num1, num2);
            break;
        case "/":
            return divide(num1, num2);
            break;
    }
}

console.log("Add " + add(1,2));
console.log("Subtract " + subtract(1,2));
console.log("Multiply " + multiply(1,2));
console.log("Divide " + divide(1,2));
console.log("Operator " + operate("/",1,2));