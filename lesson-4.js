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

/*
Завдання 3
Кнопка "Приховати" ховає текст і замінює назву кнопки на
"Розкрити", при повторному натисканні текст знову стає доступним
і кнопка набуває початкового вигляду.
*/

const input = document.querySelector("#passwordInput");
const btn = document.querySelector("#passwordButton");

btn.addEventListener("click", blurPass);

function blurPass() {
  if (input.type === "text") {
    input.type = "password";
    btn.textContent = "Розкрити";
    return;
  }
  input.type = "text";
  btn.textContent = "Приховати";
}

/*
Завдання 4
Кнопка "Зменшити" робить квадрат менше на 10 пікселів, допопка "Збільшити" - більше на 10 пікселів.
*/

const box = document.querySelector("#box");
let widthBox = parseInt(getComputedStyle(box).width);
let heightBox = parseInt(getComputedStyle(box).height);
const decrease = document.querySelector("#decrease");
const increase = document.querySelector("#increase");

decrease.addEventListener("click", decreaseBox);

function decreaseBox() {
  if (widthBox <= 0) {
    return;
  }
  widthBox = widthBox - 10;
  heightBox = heightBox - 10;
  box.style.width = `${widthBox}px`;
  box.style.height = `${heightBox}px`;
}

increase.addEventListener("click", increaseBox);

function increaseBox() {
  widthBox = widthBox + 10;
  heightBox = heightBox + 10;
  box.style.width = `${widthBox}px`;
  box.style.height = `${heightBox}px`;
}

/*
Завдання 5
Натиснувши кнопку "Подвоювати", збільшити значення
у кожному елементі списку у 2 рази
*/

const list = document.querySelector(".list");
const doubleBtn = document.querySelector("#double");

doubleBtn.addEventListener("click", doubleElem);

function doubleElem() {
  const numberList = document.querySelectorAll(".list .listItem");
  let elemArray = "";

  numberList.forEach((elem) => {
    const doubleElem = elem.textContent * 2;

    const li = `<li class="listItem">${doubleElem}</li>`;

    elemArray += li;
  });

  list.innerHTML = elemArray;
}
