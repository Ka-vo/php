let lastOperand = 0;
let operation = null;

const inputWindow = document.querySelector("#inputWindow");

document.querySelector("#btn_1").addEventListener("click", function () {
  inputWindow.value += "1";
});

document.querySelector("#btn_2").addEventListener("click", function () {
  inputWindow.value += "2";
});

document.querySelector("#btn_3").addEventListener("click", function () {
  inputWindow.value += "3";
});

document.querySelector("#btn_4").addEventListener("click", function () {
  inputWindow.value += "4";
});

document.querySelector("#btn_5").addEventListener("click", function () {
  inputWindow.value += "5";
});

document.querySelector("#btn_6").addEventListener("click", function () {
  inputWindow.value += "6";
});

document.querySelector("#btn_7").addEventListener("click", function () {
  inputWindow.value += "7";
});

document.querySelector("#btn_8").addEventListener("click", function () {
  inputWindow.value += "8";
});

document.querySelector("#btn_9").addEventListener("click", function () {
  inputWindow.value += "9";
});

document.querySelector("#btn_0").addEventListener("click", function () {
  inputWindow.value += "0";
});

document.querySelector("#btn_sum").addEventListener("click", function () {
  lastOperand = parseInt(inputWindow.value);
  operation = "sum";
  inputWindow.value = "";
});

document.querySelector("#btn_sub").addEventListener("click", function () {
  lastOperand = parseInt(inputWindow.value);
  operation = "sub";
  inputWindow.value = "";
});

document.querySelector("#btn_multi").addEventListener("click", function () {
  lastOperand = parseInt(inputWindow.value);
  operation = "multi";
  inputWindow.value = "";
});

document.querySelector("#btn_divis").addEventListener("click", function () {
  lastOperand = parseInt(inputWindow.value);
  operation = "divis";
  inputWindow.value = "";
});

document.querySelector("#btn_sqrt").addEventListener("click", function () {
  lastOperand = parseInt(inputWindow.value);
  operation = "sqrt";
  inputWindow.value = "";
});

document.querySelector("#btn_calc").addEventListener("click", function () {
  if (operation === "sum") {
    let resault = lastOperand + parseInt(inputWindow.value);
    operation = null;
    lastOperand = 0;
    inputWindow.value = resault;
  }
  if (operation === "sub") {
    resault = lastOperand - parseInt(inputWindow.value);
    operation = null;
    lastOperand = 0;
    inputWindow.value = resault;
  }
  if (operation === "multi") {
    resault = lastOperand * parseInt(inputWindow.value);
    operation = null;
    lastOperand = 0;
    inputWindow.value = resault;
  }
  if (operation === "divis") {
    resault = lastOperand / parseInt(inputWindow.value);
    operation = null;
    lastOperand = 0;
    inputWindow.value = resault;
  }
  if (operation === "sqrt") {
    resault = Math.sqrt(parseInt(inputWindow.value));
    inputWindow.value = resault;
  }
});

document.querySelector("#btn_clr").addEventListener("click", function () {
  lastOperand = 0;
  operation = null;
  inputWindow.value = "";
});
