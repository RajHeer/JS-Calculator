// SELECTORS
const screen = document.querySelector('#screen');
const calcBtns = document.querySelectorAll('.calc-button');

// LISTENERS

calcBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        display(e.target.innerText);
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

// DISPLAY FUNCTION

function display (str) { 
    if (str === 'C') {
        screen.innerText = '0';
    } else if (screen.innerText === '0') {
        screen.innerText = str;
    } // If one of the operator keys is clicked...
      else if (/[\+\-\*\/]/.test(str)) {
        // ...and there's already a displayed operator
        if (/[\+\-\*\/]/.test(screen.innerText)) {
            //...then call the operator function
            console.log("Call operator function");
          //...otherwise add the operator to screen.
        } else {
            screen.innerText += `\u00a0${str}\u00a0`;
        }
    } else {
        screen.innerText += str;
    }
}
