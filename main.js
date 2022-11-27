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
    }   
    else if (screen.innerText === '0') {
        screen.innerText = str;
    } else if (str === "+" || str === "-" ||
               str === "*" || str === "/") {
        screen.innerText += ` ${str} `;
    }
    
    else {
        screen.innerText += str;
    }
}
