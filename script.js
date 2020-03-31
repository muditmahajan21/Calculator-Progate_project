//Calculator Screen Function.

const calculatorScreen = document.querySelector('.calculator-screen')

const updateScreen = (number) => {
    calculatorScreen.value = number;

}
//Numbers Function.

const numbers = document.querySelectorAll(".number");

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value);
        updateScreen(prevInput + calculationOperator + currentInput)
    });
});

let prevInput = "";
let calculationOperator = "";
let currentInput = "";

const inputNumber = (number) => {
    if(currentInput === 0){
        currentInput = number;
    }
    else{
        currentInput += number;
    }
}

//OPeraton function

const operators = document.querySelectorAll(".operator")

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value)
        updateScreen(prevInput+calculationOperator)
    });
});


const inputOperator = (operator) => {
    prevInput = currentInput;
    calculationOperator = operator;
    currentInput = '0';
}

//Equal-sign function

const equalSign = document.querySelector('.equal-sign')

equalSign.addEventListener("click", () => {
    calculate();
    updateScreen(currentInput);
    clearAll();
});


//Clear-button function:
const clearBtn = document.querySelector('.all-clear')

clearBtn.addEventListener('click', () => {
    clearAll();
    updateScreen(currentInput);
});

const clearAll = () => {
    prevInput = '';
    calculationOperator = '';
    currentInput = '0';
}

//Calculation function:
const calculate = () => {
    let result = 0;
    switch(calculationOperator) {
        case '+':
        result = parseInt(prevInput) + parseInt(currentInput);
        break;
        case '-':
        result = parseInt(prevInput) - parseInt(currentInput);
        break;
        case '*':
        result = parseInt(prevInput) * parseInt(currentInput);
        break;
        case '/':
        result = parseInt(prevInput) / parseInt(currentInput);
        break;
        default :
        return;
    }
    currentInput = result.toString();
    calculationOperator = '';
}
