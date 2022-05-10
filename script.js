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