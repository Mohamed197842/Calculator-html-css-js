const buttonClear = document.getElementById("buttonClear");
const buttonDelete = document.getElementById("buttonDelete");
const displayResult = document.getElementById("displayResult");
const buttons = document.querySelectorAll(".button");
const buttonsCalculate = document.querySelectorAll(".buttonCalculate");
const buttonEqual = document.querySelector(".buttonEqual");

function clearResult() {
  buttonClear?.addEventListener("click", () => {
    console.log("click on button");
    displayResult.value = "";
  });
}

function deleteOne() {
  buttonDelete?.addEventListener("click", () => {
    displayResult.value = displayResult.value.toString().slice(0, -1);
  });
}

function appendToDisplay() {
  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      displayResult.value += e.target.value;
    });
  });

  buttonsCalculate.forEach((button) => {
    button.addEventListener("click", (e) => {
      displayResult.value += e.target.value;
    });
  });
}

function claculateResult() {
  buttonEqual?.addEventListener("click", () => {
    try {
      displayResult.value = eval(displayResult.value);
    } catch (error) {
      displayResult.value = "Error";
    }
  });
}

clearResult();
appendToDisplay();
deleteOne();
claculateResult();
