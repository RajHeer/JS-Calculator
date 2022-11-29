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

function add (num1, num2, operator2 = '') {
    screen.innerText = `${num1 + num2}${operator2}`;
}

function subtract (num1, num2, operator2 ='') {
    screen.innerText = `${num1 - num2}${operator2}`;
}

function multiply (num1, num2, operator2 ='') {
    screen.innerText = `${num1 * num2}${operator2}`;
}

function divide (num1, num2, operator2 ='') {
    screen.innerText = `${num1 / num2}${operator2}`;
}

//OPERATOR FUNCTION

function operate (displayStr, operator2 = '') {
    let [num1, operator, num2] = displayStr.split(/\s/);
    num1 = Number(num1);
    num2 = Number(num2);
    switch (operator) {
        case "+":
            return add(num1, num2, operator2);
            break;
        case "-":
            return subtract(num1, num2, operator2);
            break;
        case "*":
            return multiply(num1, num2, operator2);
            break;
        case "/":
            return divide(num1, num2, operator2);
            break;
    }
}

// DISPLAY FUNCTION

function display (str) { 
    if (str === 'clear') {
        screen.innerText = '0';
    } else if (screen.innerText === '0' &&
               str != ' = ') {
        screen.innerText = str;
    } else if (str === " = " && 
        /\d+\s[\+\-\*\/]\s\d/.test(screen.innerText)) {
        operate(screen.innerText);
    } // If operand key is clicked...
      else if (/[\+\-\*\/]/.test(str)) {
      // ...and display contains existing operand
        if (/[\+\-\*\/]/.test(screen.innerText)) {
            //...call the operator function
            operate(screen.innerText, str);
      //...else add this operand to screen.
        } else {
            screen.innerText += str;
        }
    } else if (str != ' = ') {
        screen.innerText += str;
    }
}
