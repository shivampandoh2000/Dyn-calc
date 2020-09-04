const defaultInput = 0;
let currentResult = defaultInput;
let logEntries = [];

function getUserNumberInput() {
  return parseInt(userInput.value); //or +userInput.value
}

function historyAndWrite(operator, valueBefore, inputNo) {
  const calDescription = `${valueBefore} ${operator} ${inputNo}`;
  outputResult(currentResult, calDescription);
}

function writeToLog(operationIdentifier, oldValue, newValue, fResult) {
  const logEntry = {
    operation: operationIdentifier,
    prvValue: oldValue,
    newValue: newValue,
    result: fResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function operationResult(operationDescription) {
  let enteredNumber = getUserNumberInput();
  let initialValue = currentResult;
  let mathOperator;
  if (operationDescription === "ADD") {
    currentResult += enteredNumber;
    mathOperator = "+";
  } else if (operationDescription === "SUBTRACT") {
    currentResult -= enteredNumber;
    mathOperator = "-";
  } else if (operationDescription === "MULTIPLY") {
    currentResult *= enteredNumber;
    mathOperator = "*";
  } else if (operationDescription === "DIVIDE") {
    currentResult /= enteredNumber;
    mathOperator = "/";
  }
  historyAndWrite(mathOperator, initialValue, enteredNumber);
  writeToLog(operationDescription, initialValue, enteredNumber, currentResult);
}

function add() {
  operationResult("ADD");
}
function subtract() {
  operationResult("SUBTRACT");
}
function multiply() {
  operationResult("MULTIPLY");
}
function divide() {
  operationResult("DIVIDE");
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
