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

console.log(time(0))
