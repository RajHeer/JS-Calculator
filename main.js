// SELECTORS
const screen = document.querySelector('#screen');
const calcBtns = document.querySelectorAll('.calc-button');

// LISTENERS

calcBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        display(e.target.dataset.value);
    })
  }
)

// BASIC OPERATIONS ***

function add (num1, num2, operator2) {
    screen.innerText = `${num1 + num2}${operator2}`;
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

function operate (displayStr, operator2) {
    let [num1, operator, num2] = displayStr.split(/\s/);
    num1 = Number(num1);
    num2 = Number(num2);
    switch (operator) {
        case "+":
            return add(num1, num2, operator2);
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
    if (str === 'clear') {
        screen.innerText = '0';
    } else if (screen.innerText === '0') {
        screen.innerText = str;
    } // If one of the operator keys is clicked...
      else if (/[\+\-\*\/]/.test(str)) {
        // ...and there's already a displayed operator
        if (/[\+\-\*\/]/.test(screen.innerText)) {
            //...then call the operator function
            operate(screen.innerText, str);
          //...otherwise add the operator to screen.
        } else {
            screen.innerText += str;
        }
    } else {
        screen.innerText += str;
    }
}
