// DOMS consts
const value = document.querySelector(".calc__screen");
// Delete consts
const backspaceButton = document.querySelector(".btn__delete--backspace");
const ceButton = document.querySelector(".btn__delete--ce");
const cButton = document.querySelector(".btn__delete--c");
// Number consts
const sevenButton = document.querySelector(".btn__number--seven");
const eightButton = document.querySelector(".btn__number--eight");
const nineButton = document.querySelector(".btn__number--nine");
const fourButton = document.querySelector(".btn__number--four");
const fiveButton = document.querySelector(".btn__number--five");
const sixButton = document.querySelector(".btn__number--six");
const oneButton = document.querySelector(".btn__number--one");
const twoButton = document.querySelector(".btn__number--two");
const threeButton = document.querySelector(".btn__number--three");
const zeroButton = document.querySelector(".btn__number--zero");
// Operation consts
const positivityButton = document.querySelector(".btn__special--positivity");
const decimalButton = document.querySelector(".btn__special--decimal");
const additionButton = document.querySelector(".btn__special--addition");
const subtractButton = document.querySelector(".btn__special--subtract");
const equalsButton = document.querySelector(".btn__special--equals");
const fractionButton = document.querySelector(".btn__special--fraction");
const percentageButton = document.querySelector(".btn__special--percentage");
const sqrtButton = document.querySelector(".btn__special--sqrt");
const divisionButton = document.querySelector(".btn__special--division");
const multiplyButton = document.querySelector(".btn__special--multiply");

// Variables
let currentOp = null;
let currentValue = null;
let lastValue;
let result = "p";
let factorIndexes = [];
let index = 0;

// Buttons
const printValue = (val) => {
  if (
    value.innerHTML === "0" ||
    value.innerHTML == result ||
    value.innerHTML == "Error ⚠" ||
    value.innerHTML == "Infinity"
  ) {
    value.innerHTML = val;
    result = "p";
  } else if (lastValue == "." || value.innerHTML !== "0") {
    value.innerHTML += val;
  }
  lastValue = String(value.innerHTML).slice(-1);
};

const printOperator = (op) => {
  if (
    value.innerHTML != "0" &&
    value.innerHTML != result &&
    value.innerHTML != "Error ⚠" &&
    value.innerHTML != "Infinity" &&
    !isOperator(lastValue)
  ) {
    factorIndexes[index++] = value.innerHTML.length;
    value.innerHTML += op;
  }
  lastValue = String(value.innerHTML).slice(-1);
};

zeroButton.onclick = () => {
  if (value.innerHTML != 0) {
    printValue(0);
  }
};

oneButton.onclick = () => {
  printValue(1);
};

twoButton.onclick = () => {
  printValue(2);
};

threeButton.onclick = () => {
  printValue(3);
};

fourButton.onclick = () => {
  printValue(4);
};

fiveButton.onclick = () => {
  printValue(5);
};

sixButton.onclick = () => {
  printValue(6);
};

sevenButton.onclick = () => {
  printValue(7);
};

eightButton.onclick = () => {
  printValue(8);
};

nineButton.onclick = () => {
  printValue(9);
};

additionButton.onclick = () => {
  printOperator("+");
};

subtractButton.onclick = () => {
  printOperator("-");
};

divisionButton.onclick = () => {
  printOperator("/");
};

multiplyButton.onclick = () => {
  printOperator("*");
};

cButton.onclick = () => {
  value.innerHTML = "";
  factorIndexes = [];
};

ceButton.onclick = () => {};

backspaceButton.onclick = () => {
  if (isOperator(lastValue)) {
    factorIndexes.pop();
  }
  value.innerHTML = String(value.innerHTML).slice(0, -1);
  lastValue = String(value.innerHTML).slice(-1);
};

/* decimalButton.onclick = () => {
  factorIndexes[factorIndexes.length - 1]

  while (isOperator(lastValue))
    if (
      lastValue !== "." &&
      d
      /*
    (value.innerHTML == result &&
      String(
        value.innerHTML.includes(".") &&
          (String(value.innerHTML).includes("+") ||
            String(value.innerHTML).includes("-") ||
            String(value.innerHTML).includes("*") ||
            String(value.innerHTML).includes("/")) &&
          lastValue !== "."
      ))
    ) {
      value.innerHTML += ".";
    }
  lastValue = String(value.innerHTML).slice(-1);
}; */

equalsButton.onclick = () => {
  if (value.innerHTML != 0) {
    try {
      value.innerHTML = eval(value.innerHTML);
    } catch (e) {
      value.innerHTML = "Error ⚠";
    }
  }
};

const isOperator = (val) => {
  return val == "+" || val == "-" || val == "*" || val == "/";
};

// Terrible honguite
const honguiteImg = document.querySelector(".figure__img");
const audio = new Audio("assets/hongo.mp3");

honguiteImg.onclick = () => {
  audio.play();
};
