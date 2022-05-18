const operate = (n1, operator, n2) => {
    const firstNum = parseFloat(n1)
    const secondNum = parseFloat(n2)
    if (operator === '+') return firstNum + secondNum
    if (operator === '-') return firstNum - secondNum
    if (operator === '*') return firstNum * secondNum
    if (operator === '/') return firstNum / secondNum
}

let displayValue = 0;
let firstNum = null;
let secondNum = null;
//refactor code to have two operator variables
let firstOperator = null;
let secondOperator = null

const display = document.querySelector('#display');

//event listener for numbers
const nums = document.querySelectorAll('.num');
nums.forEach(num => {
    num.addEventListener('click', () => {
        
        if (displayValue === 0 || displayValue === '0') {
            display.textContent = num.textContent
            if (num.textContent === '.') {
                if (!display.textContent.includes('.')) {
                    display.textContent += '.';
                    displayValue = display.textContent;
                    return;
                } else {
                    displayValue = display.textContent;
                    return;
                }
            }
        } else {
            display.textContent += num.textContent
        }
        displayValue = parseFloat(display.textContent)
    })
})


//operator button declarations
const addBtn = document.getElementById('add')
const subtractBtn = document.getElementById('subtract')
const multiplyBtn = document.getElementById('multiply')
const divideBtn = document.getElementById('divide')


//clear button event listeners
const clear = document.querySelector('#clear')
clear.addEventListener('click', function() {
    display.textContent = '0';
    displayValue = 0;
    firstNum = null;
    secondNum = null;
    firstOperator = null;
    secondOperator = null;
})

const operators = document.querySelectorAll('.operator');
operators.forEach(op => {
    op.addEventListener('click', () => {
        if (firstOperator === null && secondOperator === null) {
            //1st click of operator
            firstNum = displayValue;
            firstOperator = op.textContent;
            displayValue = 0;
            console.log(`firstNum: ${firstNum}`)
            console.log(`secondNum: ${secondNum}`)
            console.log(`firstOperator: ${firstOperator}`)
            console.log(`secondOperator: ${secondOperator}`)
            console.log(`displayValue: ${displayValue}`)
        } else if (firstOperator !== null && secondOperator === null) {
            secondOperator = op.textContent;
            if (firstNum !== null && secondNum === null) {
                secondNum = displayValue;
                result = operate(firstNum, firstOperator, secondNum)
                display.textContent = result;
                firstNum = result;
                
            }
            displayValue = 0;
            console.log(`firstNum: ${firstNum}`)
            console.log(`secondNum: ${secondNum}`)
            console.log(`firstOperator: ${firstOperator}`)
            console.log(`secondOperator: ${secondOperator}`)
            console.log(`displayValue: ${displayValue}`)
        } else if (firstOperator !== null && secondOperator !== null) {
        
            if (firstNum !== null && secondNum !== null) {
                secondNum = displayValue;
                result = operate(firstNum, secondOperator, secondNum)
                display.textContent = result;
                firstNum = result;
                
            }
            secondOperator = op.textContent;
            displayValue = 0;
            console.log(`firstNum: ${firstNum}`)
            console.log(`secondNum: ${secondNum}`)
            console.log(`firstOperator: ${firstOperator}`)
            console.log(`secondOperator: ${secondOperator}`)
            console.log(`displayValue: ${displayValue}`)
        }
})
})

//equals button event listener
const equalsBtn = document.getElementById('equals')
equalsBtn.addEventListener('click', () => {
    if (firstOperator !== null && secondOperator === null) {
        secondNum = displayValue;
        result = operate(firstNum, firstOperator, secondNum)
        display.textContent = result;
        firstNum = result;
        displayValue = 0;
        console.log(`firstNum: ${firstNum}`)
        console.log(`secondNum: ${secondNum}`)
        console.log(`firstOperator: ${firstOperator}`)
        console.log(`secondOperator: ${secondOperator}`)
    } else if (firstOperator !== null && secondOperator !== null) {
        secondNum = displayValue;
        result = operate(firstNum, secondOperator, secondNum)
        secondOperator = null;
        display.textContent = result;
        firstNum = result;
        displayValue = 0;
        console.log(`firstNum: ${firstNum}`)
        console.log(`secondNum: ${secondNum}`)
        console.log(`firstOperator: ${firstOperator}`)
        console.log(`secondOperator: ${secondOperator}`)
    }
})
