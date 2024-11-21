// TASK FIRST//

function getArrayParams(...arr) {
    if (!arr.length) return {};
    
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    const sum = arr.reduce((acc, cur) => acc + cur, 0);
    const avg = Number((sum / arr.length).toFixed(2));

    return { max, min, avg };
}
// Примеры вызова функций//
console.log(getArrayParams(-99, 99, 10));   // { min: -99, max: 99, avg: 3.33 }
console.log(getArrayParams(1, 2, 3, -100, 10));  // { min: -100, max: 10, avg: -16.8 }
console.log(getArrayParams(5));  // { min: 5, max: 5, avg: 5 }

// TASK SECOND//

//Функция для нахождения суммы элементов массива//
function summElementsWorker(...args) {
    if (!args.length) return 0;
    return args.reduce((acc, cur) => acc + cur, 0);
}
//Функция для вычисления разницы между максимальным и минимальным элементами//
function differenceMaxMinWorker(...args) {
    if (!args.length) return 0;
    let max = Math.max(...args);
    let min = Math.min(...args);
    return max - min;
}
//Функция для вычисления разницы между суммой четных и нечетных элементов//
function differenceEvenOddWorker(...args) {
    if (!args.length) return 0;
    let sumEven = 0;
    let sumOdd = 0;
    for (let num of args) {
        if (num % 2 === 0) {
            sumEven += num;
        } else {
            sumOdd += num;
        }
    }
    return sumEven - sumOdd;
}
//Функция для вычисления среднего значения четных элементов//
function averageEvenElementsWorker(...args) {
    if (!args.length) return 0;
    let sumEven = 0;
    let countEven = 0;
    for (let num of args) {
        if (num % 2 === 0) {
            sumEven += num;
            countEven++;
        }
    }
    return countEven ? sumEven / countEven : 0;
}
//Примеры использования//
// summElementsWorker
console.log(summElementsWorker()); // 0
console.log(summElementsWorker(10, 10, 11, 20, 10)); // 61

// differenceMaxMinWorker
console.log(differenceMaxMinWorker()); // 0
console.log(differenceMaxMinWorker(10, 10, 11, 20, 10)); // 20 - 10 => 10

// differenceEvenOddWorker
console.log(differenceEvenOddWorker(94, 51, 57, 41, 47, 66, 58, 10, 38, 17)); // 266 - 213 => 53
console.log(differenceEvenOddWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35)); // 114 - 383 => -269

// averageEvenElementsWorker
console.log(averageEvenElementsWorker(1, 2, 3, 4, 5, 6, 7, 8, 9)); // [2, 4, 6, 8] => 5
console.log(averageEvenElementsWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35)); // [64, 10, 40] => 38

// TASK THIRD//

function makeWork(arrOfArr, func) {
    if (!arrOfArr || !func) return null;

    let maxWorkerResult = -Infinity;

    for (let subArr of arrOfArr) {
        const result = func(...subArr); // Применяем насадку к каждому подмассиву
        if (result > maxWorkerResult) {
            maxWorkerResult = result;
        }
    }

    return maxWorkerResult;
}
// Примеры использования//
const arr = [
    [10, 10, 11, 20, 10],
    [67, 10, 2, 39, 88],
    [72, 75, 51, 87, 43],
    [30, 41, 55, 96, 62]
];

console.log(makeWork(arr, summElementsWorker));     // 328
console.log(makeWork(arr, differenceMaxMinWorker)); // 86
console.log(makeWork(arr, differenceEvenOddWorker));// 92
console.log(makeWork(arr, averageEvenElementsWorker));  // 72
