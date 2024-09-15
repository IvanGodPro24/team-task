//Напишіть функцію caclculateAverage()
//яка приймає довільну кількість
//аргументів і повертає їхнє середнє значення.
//Додати перевірку, що аргументи це числа.

function caclculateAverage(...array) {
  let sum = 0;
  let totalCount = 0;
  for (const elem of array) {
    if (typeof elem === "number") {
      totalCount += 1;
      sum += elem;
    }
  }

  return sum / totalCount;
}

// console.log(caclculateAverage(2, 6, 24, 7, 35, 24, "hello", 9, "world"));

// Напиши функцію findLongestWord(string)
//яка приймає довільний рядок
//що складається лише з розділених слів
//пробілом (параметр string)
//і повертає найдовше слово у цьому рядку

// const string = "Nunc sed turpis a felis in nunc fringilla"

function findLongestWord(string) {
  let words = string.split(" ");
  let longestWord = words[0];
  for (const word of words) {
    if (longestWord.length < word.length) {
      longestWord = word;
    }
  }
  return longestWord;
}
// console.log(findLongestWord('Nunc sed turpis a felis in nunc fringilla'));

//Напишіть функцію makeInvetedString(), яка замінює регістр кожного символу
//У сторіччі на протилежний
//Наприклад 'JavaScript' повинен повернути 'jAVAsCRIPT'

function makeInvetedString(string) {
  let text = string.split("");
  let toCase = "";
  for (const letter of text) {
    if (letter.toUpperCase() === letter) {
      toCase += letter.toLowerCase();
    } else {
      toCase += letter.toUpperCase();
    }
  }

  return toCase;
}

console.log(makeInvetedString("JavaScript"));

//У нас є об'єкт, у якому зберігатимуться зарплати
//нашої команди
//Напишіть код для сумування всіх зарплат і
//збережіть його результат у змінній sum.
//Якщо об'єкт salaries порожній, то результат має бути 0

const salaries = {
  Mango: 100,
  Poly: 160,
  Ajax: 1470,
};
function totalSalaries(salaries) {
  let sum = 0;
  let values = Object.values(salaries);
  for (const number of values) {
    sum += number;
  }

  return sum;
}
console.log(totalSalaries(salaries));
