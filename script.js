const add = (...args) => {
    return args.reduce((acc, cur) => {
        return acc + cur;
    })
};

const subtract = (...args) => {
    return args.reduce((acc, cur) => {
        return acc - cur;
    })
};

const multiply = (...args) => {
    return args.reduce((acc, cur) => {
        return acc * cur;
    })
};

const divide = (...args) => {
    return args.reduce((acc, cur) => {
        return acc / cur;
    })
}

const operate = (operator, a, b) => {
    if (operator === '+') {
        return add(a, b);
    }
    if (operator === '-') {
        return subtract(a, b);
    }
    if (operator === '*') {
        return multiply(a, b);
    }
    if (operator === '/') {
        return divide(a, b);
    }
}