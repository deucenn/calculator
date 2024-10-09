// Getting all the queries
const output = document.querySelector(".output");
const numberBtns = document.querySelectorAll("[data-number]");
const operatorBtns = document.querySelectorAll("[data-operator]");
const pointBtn = document.getElementById("pointBtn");
const equalsBtn = document.getElementById("equalsBtn");
const clearBtn = document.getElementById("clearBtn");
const deleteBtn = document.getElementById("deleteBtn");
const lastOperationScreen = document.getElementById("lastOperationScreen");
const currentOperationScreen = document.getElementById(
  "currentOperationScreen"
);

// Setting the variables
let firstOperand = "";
let secondOperand = "";
let mathematicalOperation = null;

// Event listeners
equalsBtn.addEventListener("click", evaluate);
clearBtn.addEventListener("click", clear);
deleteBtn.addEventListener("click", deleteNumber);
pointBtn.addEventListener("click", appendPoint);

numberBtns.forEach((button) => {
  button.addEventListener("click", () => addNumber(button.textContent));
});

operatorBtns.forEach((operator) => {
  operator.addEventListener("click", () => addOperator(operator.textContent));
});

// Functions
function addNumber(number) {
  // Prevent leading zeroes
  if (currentOperationScreen.textContent === "0" && number === "0") return;

  if (currentOperationScreen.textContent === "0")
    currentOperationScreen.textContent = number;
  else currentOperationScreen.textContent += number;
}

function addOperator(operator) {
  firstOperand = currentOperationScreen.textContent;
  mathematicalOperation = operator;
  lastOperationScreen.textContent = `${firstOperand} ${mathematicalOperation}`;
  currentOperationScreen.textContent = "0";
}

// function resetScreen() {
//   currentOperationScreen.textContent = ''
//   shouldResetScreen = false
// }

function clear() {
  currentOperationScreen.textContent = "0";
  lastOperationScreen.textContent = "";
  let firstOperand = "";
  let secondOperand = "";
  let mathematicalOperation = null;
}

function deleteNumber() {
  if (currentOperationScreen.textContent === "0") return;
  currentOperationScreen.textContent = currentOperationScreen.textContent.slice(
    0,
    -1
  );
  if (currentOperationScreen.textContent === "")
    currentOperationScreen.textContent = "0";
}

// TODO: build the appendPoint function
function appendPoint() {}

function evaluate() {
  if (currentOperationScreen.textContent === "0") return;
  if (currentOperationScreen.text === "0" && mathematicalOperation === "÷") {
    alert("You can´t divide by 0!");
    return;
  }

  secondOperand = currentOperationScreen.textContent;
  currentOperationScreen.textContent = roundResult(
    calculate(mathematicalOperation, firstOperand, secondOperand)
  );
  lastOperationScreen.textContent = `${firstOperand} ${mathematicalOperation} ${secondOperand}`;
  mathematicalOperation = null;
}

function roundResult(number) {
  return Math.round(number * 1000) / 1000;
}

// Mathematical operations
const summation = (a, b) => {
  return a + b;
};

const subtraction = (a, b) => {
  return a - b;
};

const multiplication = (a, b) => {
  return a * b;
};

const division = (a, b) => {
  return a / b;
};

function calculate(operand, a, b) {
  switch (operand) {
    case "+":
      return summation(a, b);
    case "−":
      return subtraction(a, b);
    case "×":
      return multiplication(a, b);
    case "÷":
      return division(a, b);
    default:
      return null;
  }
}
