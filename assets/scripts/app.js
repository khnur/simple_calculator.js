const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

//  alert(typeof logEntries);

function getUserNumberInput() {
    return parseInt(userInput.value); // +string or parseInt(string) or parseFloat(string) and number.toString()
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);
}

function writeToLog(operationID, prevResult, operationNumber, newResult) {
    const logEntry = {
        operation: operationID,
        prevResult: prevResult,
        number: operationNumber,
        result: newResult,
    };
    logEntries.push(logEntry);
    console.log(logEntries);
}

function calculateResult(calculationType) {
    if (
        calculationType !== 'ADD' &&
        calculationType !== 'SUBSTRACT' &&
        calculationType !== 'MULTIPLY' &&
        calculationType !== 'DIVIDE'
    ) {
        return;
    }
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    let mathOperator;

    if (calculationType === 'ADD') {
        currentResult += enteredNumber;
        mathOperator = '+';
    } else if (calculateResult === 'SUBTRACT') {
        currentResult -= enteredNumber;
        mathOperator = '-';
    } else if (calculationType === 'MULTIPLY') {
        currentResult *= enteredNumber;
        mathOperator = '*';
    } else if (calculationType === 'DIVIDE') {
        currentResult /= enteredNumber;
        mathOperator = '/';
    }

    createAndWriteOutput(mathOperator, initialResult, enteredNumber);
    writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}

function add() {
    calculateResult('ADD');
}

function subtract() {
    calculateResult('SUBTRACT');
}

function multiply() {
    calculateResult('MULTIPLY');
}

function divide() {
    calculateResult('DIVIDE');
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
