//Напишіть функцію caclculateAverage()
//яка приймає довільну кількість
//аргументів і повертає їхнє середнє значення.
//Додати перевірку, що аргументи це числа.

function caclculateAverage(...array) {
    let sum = 0;
    let totalCount = 0
    for (const elem of array) {
        if (typeof elem === "number") {
            totalCount += 1
            sum += elem
        }
    }

    return sum / totalCount;
}

console.log(caclculateAverage(2, 6, 24, 7, 35, 24, "hello", 9, "world"));