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
let operator = null;

const display = document.querySelector('#display');
//event listener for numbers
const nums = document.querySelectorAll('.num');
nums.forEach(num => {
    num.addEventListener('click', () => {
        if (displayValue === 0 || displayValue === '0') {
            display.textContent = num.textContent
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



//decimal event listener
const decimal = document.querySelector('#decimal');
decimal.addEventListener('click', function() {
    display.textContent += '.';
    displayValue = display.textContent;
})

//clear button event listeners
const clear = document.querySelector('#clear')
clear.addEventListener('click', function() {
    display.textContent = '0';
    displayValue = 0;
    firstNum = null;
    secondNum = null;
    operator = null;
})

const operators = document.querySelectorAll('.operator');
operators.forEach(op => {
    op.addEventListener('click', () => {
        if (firstNum === null && secondNum === null) {
            //if starting fresh
            firstNum = displayValue;
            operator = op.textContent;
            displayValue = 0;
            console.log(firstNum)
            console.log(secondNum)
            console.log(operator)
            console.log(displayValue)
            console.log('end')
        } else if (firstNum !== null && secondNum === null){
            //if first num has been entered and operator selected
            secondNum = displayValue;
            operator = op.textContent
            let result = operate(firstNum, operator, secondNum);
            display.textContent = result;
            displayValue = 0;
            firstNum = result;
            console.log(firstNum)
            console.log(secondNum)
            console.log(operator)
            console.log(displayValue)
            console.log('end')
        } else if (firstNum === null && secondNum !==null) {
            //if operation has already happened
            firstNum = secondNum;
            secondNum = null;
            operator = op.textContent;
            console.log(firstNum)
            console.log(secondNum)
            console.log(operator)
            console.log(displayValue)
            console.log('end')
        } else if (firstNum !== null && secondNum !== null) {
            secondNum = displayValue;
            operator = op.textContent
            let result = operate(firstNum, operator, secondNum);
            display.textContent = result;
            displayValue = 0;
            firstNum = result;
            console.log(firstNum)
            console.log(secondNum)
            console.log(operator)
            console.log(displayValue)
            console.log('end')
        }
    })
})
//equals button event listener
const equalsBtn = document.getElementById('equals')
equalsBtn.addEventListener('click', () => {
    if (secondNum === null) {
        secondNum = displayValue;
        let result = operate(firstNum, operator, secondNum);
        display.textContent = result;
        displayValue = 0;
        firstNum = null; //this is problem
        secondNum = result;
        console.log(firstNum)
        console.log(secondNum)
        console.log(operator)
        console.log(displayValue)
        console.log('end')
    } else {
        firstNum = displayValue;
        let result = operate(firstNum, operator, secondNum);
        display.textContent = result;
        displayValue = 0;
        firstNum = null;
        secondNum = result;
        console.log(firstNum)
        console.log(secondNum)
        console.log(operator)
        console.log(displayValue)
        console.log('end')
    }
})

