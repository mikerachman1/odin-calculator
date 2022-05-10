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
    switch(operator) {
        case '+':
            return add(a,b);
            break;
        case '-':
            return subtract(a,b);
            break;
        case '*':
            return multiply(a,b);
            break;
        case '/':
            return divide(a,b);
            break;
    }
}