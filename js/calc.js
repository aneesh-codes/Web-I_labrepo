const display = document.getElementById("display");

function appendValue(val) {
  display.value += val;
}

function calculate() {
  try {
    display.value = eval(display.value); // evaluates the expression
  } catch {
    display.value = "Error";
  }
}

function clearDisplay() {
  display.value = "";
}
