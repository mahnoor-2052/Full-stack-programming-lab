function calculate() {
  let n1 = parseFloat(document.getElementById("num1").value);
  let n2 = parseFloat(document.getElementById("num2").value);
  let op = document.getElementById("operator").value;
  let result;

  if (op === "/" && n2 === 0) {
    document.getElementById("calcResult").innerText = "Cannot divide by zero!";
    return;
  }

  if (op === "+") result = n1 + n2;
  else if (op === "-") result = n1 - n2;
  else if (op === "*") result = n1 * n2;
  else if (op === "/") result = n1 / n2;

  let output = document.getElementById("calcResult");
  output.innerText = "Result: " + result;

  if (result >= 0) {
    output.style.backgroundColor = "lightgreen";
  } else {
    output.style.backgroundColor = "lightcoral";
  }
}
