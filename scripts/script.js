function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(op, num1, num2) {
    switch (op) {
        case "+":
            let ret = add(num1, num2);
            break;
        case "-":
            let ret = sub(num1, num2);
            break;
        case "*":
                let ret = multiply(num1, num2);
                break;
        case "/":
            let ret = divide(num1, num2);
            break;
        default:
            ret = null;
            break;
    }

    return ret;
}