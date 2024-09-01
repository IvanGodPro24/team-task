//~ Створи функцію яка приймає число від 0 до 59 і.визначає у котру чверть години
//~ Попадає це число (у першу, другу, третю або четверту).

function time(number) {
  if (number >= 0 && number <= 15) {
    return 'Перша чверть';
  } else if (number > 15 && number <= 30) {
    return 'Друга чверть';
  } else if (number > 30 && number <= 45) {
    return 'Третя чверть';
  } else if (number > 45 && number <= 59) {
    return 'Четверта чверть';
  } else {
    return 'Введіть число від 0 до 59';
  }
}

// console.log(time(0));

//~ Напиши функцію яка запитує у користувача ведення числа  1, 2, 3 або 4. Якщо вона має
//~ значення '1', то у змінну result запишемо 'зима', якщо має значення
//~ '2' - 'весна' і так далі. Розв'яжіть завдання через switch-case.
// let valueSeason = prompt("Введіть число від 1 до 4");

function getSeason() {
  let valueSeason = prompt('Введіть число від 1 до 4');
  console.log(valueSeason);

  let result = '';

  switch (Number(valueSeason)) {
    case 1:
      result = 'зима';
      break;

    case 2:
      result = 'весна';
      break;

    case 3:
      result = 'літо';
      break;

    case 4:
      result = 'осінь';
      break;

    default:
      result = 'не-знайдено';
      break;
  }

  return result;
}

// console.log(getSeason(5));

//~ Створи функцію logNumbers яка приймає min і max
//~ і виводить у консоль
//~ числа від max до min за спаданням
//~ Додайте усі парні числа від min до max

function logNumbers(min, max) {
  let sum = 0;
  for (let i = max; i >= min; i--) {
    console.log(i);
    if (i % 2 === 0) {
      sum += i;
    }
  }
  return sum;
}
// console.log(logNumbers(2, 54));

//~Напишіть код, який запитуватиме
//логін за допомогою prompt і логувати результат
//в консоль браузера

//Якщо відвідувач вводить "Адмін",
//то prompt запитує пароль.
//Якщо нічого не ввели або натиснута клавіша Esc
//Вивести стороку "Скасовано"
// Інакше вивести рядок "Я вас не знаю"

//Пароль перевіряти так:
//Якщо введено пароль "Я головний",
//то вивести рядок "Добрий день!"
//інакше виводити рядок "Невірний пароль!"

const userRule = prompt('Введіть логін');
// console.log("userRul
// console.log("userRule: ", userRule);
if (userRule === 'Адмін') {
  const password = prompt('Введіть пароль');
  console.log(password);
  if (!password) {
    console.log('Скасовано');
  } else if (password === 'Я головний') {
    console.log('Добрий день!');
  } else {
    console.log('Невірний пароль!');
  }
} else {
  console.log('Я вас не знаю');
}
