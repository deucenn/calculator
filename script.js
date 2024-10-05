// Getting all the queries
const output = document.querySelector(".output");
const numberBtns = document.querySelectorAll("[data - number]");
const operatorBtns = document.querySelectorAll("[data - operator]");
const pointBtn = document.getElementById("pointBtn");
const equalsBtn = document.getElementById("equalsBtn");
const clearBtn = document.getElementById("clearBtn");
const deleteBtn = document.getElementById("deleteBtn");
const lastOperationScreen = document.getElementById("lastOperationScreen");
const currentOperationScreen = document.getElementById("currentOperationScreen");

// Setting the variables
let firstOperand = "";
let secondOperand = "";
let mathematicalOperation = null;

// Number input


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
