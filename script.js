const operate = (...args) => {
    switch(args[0]) {
        case '+':
            args.shift();
            return args.reduce((acc, cur) => {
              return acc + cur;
              })
            break;
        case '-':
            args.shift();
            return args.reduce((acc, cur) => {
              let result = acc - cur;
              return result;
              })
            break;
        case '*':
            args.shift();
            return args.reduce((acc, cur) => {
              return acc * cur;
              })
            break;
        case '/':
            args.shift();
            return args.reduce((acc, cur) => {
              return acc / cur;
              })
            break;
    }
}

let displayValue = 0;
let firstNum = 0;
let secondNum = 0;
let operator = '';
//num button declarations
const display = document.querySelector('#display');
const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');
const zero = document.querySelector('#zero');
const decimal = document.querySelector('#decimal');
//operator button declarations
const clear = document.querySelector('#clear')
const addBtn = document.getElementById('add')
const subtractBtn = document.getElementById('subtract')
const multiplyBtn = document.getElementById('multiply')
const divideBtn = document.getElementById('divide')
const equalsBtn = document.getElementById('equals')
//number button event listeners
one.addEventListener('click', function() {
    display.textContent += 1;
    displayValue = display.textContent;
})
two.addEventListener('click', function() {
    display.textContent += 2;
    displayValue = display.textContent;
})
three.addEventListener('click', function() {
    display.textContent += 3;
    displayValue = display.textContent;
})
four.addEventListener('click', function() {
    display.textContent += 4;
    displayValue = display.textContent;
})
five.addEventListener('click', function() {
    display.textContent += 5;
    displayValue = display.textContent;
})
six.addEventListener('click', function() {
    display.textContent += 6;
    displayValue = display.textContent;
})
seven.addEventListener('click', function() {
    display.textContent += 7;
    displayValue = display.textContent;
})
eight.addEventListener('click', function() {
    display.textContent += 8;
    displayValue = display.textContent;
})
nine.addEventListener('click', function() {
    display.textContent += 9;
    displayValue = display.textContent;
})
zero.addEventListener('click', function() {
    display.textContent += 0;
    displayValue = display.textContent;
})
decimal.addEventListener('click', function() {
    display.textContent += '.';
    displayValue = display.textContent;
})

//operator button event listeners
clear.addEventListener('click', function() {
    display.textContent = '';
    displayValue = 0;
})

addBtn.addEventListener('click', function() {
    firstNum = displayValue;
    operator = '+';
    display.textContent = '';
    displayValue = 0;
})
subtractBtn.addEventListener('click', function() {
    firstNum = displayValue;
    operator = '-';
    display.textContent = '';
    displayValue = 0;
})
multiplyBtn.addEventListener('click', function() {
    firstNum = displayValue;
    operator = '*';
    display.textContent = '';
    displayValue = 0;
})
divideBtn.addEventListener('click', function() {
    firstNum = displayValue;
    operator = '/';
    display.textContent = '';
    displayValue = 0;
})

equalsBtn.addEventListener('click', function() {
    secondNum = displayValue;
    let result = operate(operator, parseInt(firstNum), parseInt(secondNum));
    display.textContent = result;
})