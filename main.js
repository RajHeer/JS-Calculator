// SELECTORS
const root = document.documentElement;
const screen = document.querySelector('#screen');
const calcBtns = document.querySelectorAll('.calc-button');

// LISTENERS

calcBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        display(e.target.dataset.value);
        btn.classList.add('pressed');
    })
    btn.addEventListener('transitionend', (e) => {
        e.target.classList.remove('pressed');
    })
  }
)

// BASIC OPERATIONS (AND HANDLING PERCENTAGE EXPRESSIONS) ***

function add (num1, num2, operator2 = '') {
    if (operator2 === ' % ') {
       screen.innerText = `${num1 + num1 * (num2/100)}`;
       displaySize();
    } else {
       screen.innerText = `${(num1 + num2)}${operator2}`; 
       displaySize();
    }
}

function subtract (num1, num2, operator2 ='') {
    if (operator2 === ' % ') {
        screen.innerText = `${num1 - num1 * (num2/100)}`;
        displaySize();
     } else {
        screen.innerText = `${(num1 - num2)}${operator2}`;
        displaySize();
     }
    
}

function multiply (num1, num2, operator2 ='') {
    if (operator2 === ' % ') {
        screen.innerText = `${num1 / (100/num2)}`;
        displaySize();
     } else {
        screen.innerText = `${(num1 * num2)}${operator2}`;
        displaySize();
     }
}

function divide (num1, num2, operator2 ='') {
    if (operator2 === ' % ') {
        screen.innerText = `${num1 * (100/num2)}`;
        displaySize();
     } else {
        screen.innerText = `${(num1 / num2)}${operator2}`;
        displaySize();
     }
}

function percent (num) {
    let displayVal = num / 100;
    if (displayVal < 0.000001) {
        screen.innerText = 'ERROR';
        displaySize();
    } else {
        screen.innerText = `${num / 100}`;
        displaySize();
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
        displaySize();
    } // Error can only be removed by clear key due to order of conditions
    else if (screen.innerText === 'ERROR') {
        screen.innerText === 'ERROR';
        displaySize();
    } else if (screen.innerText === '0' && str != 'back'
               && str != ' = ' && str != ' % ' && str != 'plus-minus') {
        screen.innerText = str;
        displaySize();
    } //Toggle the number sign; regex capture groups for different number format options 
    else if (str === 'plus-minus') {
        if (/\-(\.)?\d+(\.)?(\d+)?$/.test(screen.innerText)) {
            screen.innerText = screen.innerText.replace(/(\-)(\.)?(\d+)(\.)?(\d+)?$/, "$2$3$4$5");
            displaySize();
        } else if (screen.innerText != '0') {
            screen.innerText = screen.innerText.replace(/(\.)?(\d+)(\.)?(\d+)?$/, "-$1$2$3$4");
            displaySize();
        }  
    } // Call operate when '=' is input after valid expression
      else if (str === ' = ' && 
        /(\-)?(\d+)?(\.)?\d+\s[\+\-\*\/]\s(\-)?(\d+)?(\.)?\d+/.test(screen.innerText)) {
        operate(screen.innerText);
    } // If operand key is clicked...
      else if (/[\+\-\*\/]/.test(str)) {
      // ...and display already contains existing operand
        if (/(\-)?(\.)?(\d+)\s[\+\-\*\/]/.test(screen.innerText)) {
            //...call the operator function
            operate(screen.innerText, str);
      //...else add this operand to screen.
        } else {
            screen.innerText += str;
            displaySize();
        }
    } else if (str === ' % ' && /[1-9]/.test(screen.innerText)) {
        screen.innerText += str;
        displaySize();
        setTimeout(operate, 250, screen.innerText, str);
    } else if (str === '.') {
        if (/\.\d+$/.test(screen.innerText)) {
            screen.innerText;
        } else if (/\d$|[\+\-\*\/]\s$/.test(screen.innerText)) {
            screen.innerText += str;
            displaySize();
        }
    } else if (str === 'back') {
        if (screen.innerText.length > 1) {
        const displayed = screen.innerText;
        const amendedDisplay = displayed.split('').slice(0,-1).join('');
        screen.innerText = amendedDisplay;
        displaySize();
        } else {
            screen.innerText = '0';
            displaySize();
        }
    } else if (str != ' = ' && str != ' % ') {
        screen.innerText += str;
        displaySize();
       
    } 
}

function displaySize () {
    if (screen.innerText.length > 10) {
        root.style.setProperty('--font-size', "1.2rem"); 
    } else if (screen.innerText.length > 8) {
        root.style.setProperty('--font-size', "1.5rem");
    } else {
        root.style.setProperty('--font-size', "1.8rem");
    }
}
