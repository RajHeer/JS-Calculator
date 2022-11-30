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

function percent (num) {
    value = num / 100;
    if (value < 0.000001) {
        screen.innerText = 'ERROR'
    } else {
        screen.innerText = `${num / 100}`;
    }
    
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
        case "%":
            return percent(num1);
            break;
    }
}

// DISPLAY FUNCTION

function display (str) { 
    if (str === 'clear') {
        screen.innerText = '0';
    } else if (screen.innerText === '0' &&
               str != ' = ' && str != ' % ') {
        screen.innerText = str;
    } // Call operate when '=' is input after valid expression
      else if (str === ' = ' && 
        /\d+\s[\+\-\*\/]\s\d/.test(screen.innerText)) {
        operate(screen.innerText);
    } // If operand key is clicked...
      else if (/[\+\-\*\/]/.test(str)) {
      // ...and display already contains existing operand
        if (/[\+\-\*\/]/.test(screen.innerText)) {
            //...call the operator function
            operate(screen.innerText, str);
      //...else add this operand to screen.
        } else {
            screen.innerText += str;
        }
    } else if (str === ' % ' && /[1-9]/.test(screen.innerText)) {
        screen.innerText += str;
        setTimeout(operate(screen.innerText), 5000);
    } else if (str != ' = ' && str != ' % ') {
        screen.innerText += str;
    }
}
