let numere = [10, 15, 20, 25, 30];

function updateOutput() {
  document.getElementById("output").innerText = `${numere.join(", ")}`;
}

const inputPush = document.getElementById("pushNumber");
function arrayPush() {
  const valPush = inputPush.value;
  numere.push(valPush);
  updateOutput();
}

function arrayPop() {
  numere.pop();
  updateOutput();
}

const inputUnshift = document.getElementById("unShiftNumber");
function arrayUnshift() {
  valUnshift = inputUnshift.value;
  numere.unshift(valUnshift);
  updateOutput();
}

function arrayShift() {
  numere.shift();
  updateOutput();
}

function arrayFilter() {
  numere = numere.filter((num) => num % 2 === 0);
  updateOutput();
}

function arraySortCresc() {
  numere.sort((a, b) => a - b);
  updateOutput();
}
function arraySortDesc() {
  numere.sort((a, b) => b - a);
  updateOutput();
}

function arrayMap() {
  numere = numere.map((num) => num * 2);
  updateOutput();
}

function arrayForEach() {
  updateOutput();
}
