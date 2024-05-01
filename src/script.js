const calculator = document.querySelector("#kalkulator");
const display = calculator.querySelector(".display");

calculator.addEventListener("click", function(event) {
  if (event.target.matches("button")) {
    let value = event.target.value;
    let text = display.textContent.trim();
    
    if (value === "clear") {
      display.textContent = "0";
    } else if (value === "backspace") {
      display.textContent = text.slice(0, -1);
    } else if (value === "=") {
      display.textContent = eval(text);
    } else if (value === "+/-") {
      display.textContent = text.startsWith("-") ? text.substring(1) : `-${text}`;
    } else {
      display.textContent = text === "0" ? value : text + value;
    }
  }
});
