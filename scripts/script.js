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
    let ret = null;
    num1 = Number(num1);
    num2 = Number(num2);
    switch (op) {
        case "+":
            ret = add(num1, num2);
            break;
        case "-":
            ret = subtract(num1, num2);
            break;
        case "*":
            ret = multiply(num1, num2);
            break;
        case "/":
            ret = divide(num1, num2);
            break;
        default:
            break;
    }

    return ret;
}

function handleInput(input) {
    if (input == "CE") {
        output = [];
    }
    else if (input == '=') {
        while (output.length > 1) {
            let num1 = output.shift();
            let op = output.shift();
            let num2 = output.shift();
    
            let result = operate(op, num1, num2);

            if (result == null || isNaN(result) || result == Infinity) {
                output = ["Error"];
            }
            else {
                output.unshift(Math.round(result * 100) / 100);
            }
        }
    }
    else if (!isNaN(input)) {
        if (!isNaN(output[output.length - 1])) {
            output[output.length - 1] += input;
        }
        else {
            output.push(input);
        }
    }
    else {
        output.push(input);
    }

    if (output[0] == "Error") {
        outputBox.textContent = "Error"
        output = [];
    }
    else if (output.length > 0) {
        outputBox.textContent = output.join(" ");
    }
    else {
        outputBox.textContent = "0";
    }
}

let output = [];
let outputBox = document.getElementById("out");

let buttons = Array.from(document.getElementsByClassName("normal"));
buttons.forEach(button => {
    button.addEventListener('click', () => {
        handleInput(button.firstChild.textContent);
    });
})