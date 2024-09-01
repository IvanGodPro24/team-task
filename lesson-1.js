//~ Створи функцію яка приймає число від 0 до 59 і.визначає у котру чверть години
//~ Попадає це число (у першу, другу, третю або четверту).

function time(number) {
  if (number >= 0 && number <= 15) {
    return "Перша чверть";
  } else if (number > 15 && number <= 30) {
    return "Друга чверть";
  } else if (number > 30 && number <= 45) {
    return "Третя чверть";
  } else if (number > 45 && number <= 59) {
    return "Четверта чверть";
  } else {
    return "Введіть число від 0 до 59";
  }
}

// console.log(time(0));

//~ Напиши функцію яка запитує у користувача ведення числа  1, 2, 3 або 4. Якщо вона має
//~ значення '1', то у змінну result запишемо 'зима', якщо має значення
//~ '2' - 'весна' і так далі. Розв'яжіть завдання через switch-case.
// let valueSeason = prompt("Введіть число від 1 до 4");

function getSeason() {
  let valueSeason = prompt("Введіть число від 1 до 4");
  console.log(valueSeason);

  let result = "";

  switch (Number(valueSeason)) {
    case 1:
      result = "зима";
      break;

    case 2:
      result = "весна";
      break;

    case 3:
      result = "літо";
      break;

    case 4:
      result = "осінь";
      break;

    default:
      result = "не-знайдено";
      break;
  }

  return result;
}

console.log(getSeason(5));
