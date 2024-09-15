//Напишіть функцію caclculateAverage()
//яка приймає довільну кількість
//аргументів і повертає їхнє середнє значення.
//Додати перевірку, що аргументи це числа.

function caclculateAverage(...array) {
  let sum = 0;
  let totalCount = 0;
  for (const elem of array) {
    if (typeof elem === 'number') {
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
  let words = string.split(' ');
  let longestWord = words[0];
  for (const word of words) {
    if (longestWord.length < word.length) {
      longestWord = word;
    }
  }
  return longestWord;
}
console.log(findLongestWord('Nunc sed turpis a felis in nunc fringilla'));
