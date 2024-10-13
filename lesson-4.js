/*
~Завдання 1
Натискання на кнопку "SHOW ME" має виводити значення з поля введення (дивіться на елементи в html-розмітці)
*/

const alertBtn = document.querySelector("#alertButton");
const alertInput = document.querySelector("#alertInput");

alertBtn.addEventListener("click", displayValue);

function displayValue() {
  console.log(alertInput.value);
}

/*
Завдання 2
Після натискання кнопки "SWAP ME" здійснюється обмін вмістом між двома інпутами.
Ви можете натиснути на неї кілька разів або вручну змінити вміст інпутів.
*/

const swapBtn = document.querySelector("#swapButton");
const leftSwapInput = document.querySelector("#leftSwapInput");
const rightSwapInput = document.querySelector("#rightSwapInput");

swapBtn.addEventListener("click", swapValue);

function swapValue() {
  const leftValue = leftSwapInput.value;
  const rightValue = rightSwapInput.value;

  leftSwapInput.value = rightValue;
  rightSwapInput.value = leftValue;
}
