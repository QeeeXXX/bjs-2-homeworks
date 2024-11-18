"use strict";

function solveEquation(a, b, c) {
    // Проверяем, является ли уравнение квадратным (коэффициент a не должен быть равным нулю)
    if (a === 0) {
        throw new Error("Коэффициент 'a' не может быть нулем.");
    }

    // Вычисляем дискриминант
    const discriminant = b ** 2 - 4 * a * c;

    // Определяем количество корней в зависимости от значения дискриминанта
    if (discriminant < 0) {
        // Дискриминант меньше нуля - корней нет
        return [];
    } else if (discriminant === 0) {
        // Один корень
        const root = -b / (2 * a);
        return [root];
    } else {
        // Два корня
        const sqrtD = Math.sqrt(discriminant);
        const x1 = (-b + sqrtD) / (2 * a);
        const x2 = (-b - sqrtD) / (2 * a);

        // Возращаем оба корня без сортировки
        return [x1, x2];
    }
}

// Примеры использования функции
console.log(solveEquation(1, -3, 2));  // [-1, 2]
console.log(solveEquation(1, 2, 1));   // [-1]
console.log(solveEquation(1, 1, 1));   // []


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
    // Преобразуем годовую процентную ставку в месячную и переводим её в десятичный формат
    const monthlyRate = (percent / 100) / 12;
    
    // Рассчитываем тело кредита (основная сумма кредита минус первоначальный взнос)
    const principal = amount - contribution;
    
    // Ежемесячный платёж по аннуитетной схеме
    const payment = principal * (monthlyRate + (monthlyRate / ((1 + monthlyRate) ** countMonths - 1)));
    
    // Общая сумма выплат по кредиту
    const totalPayment = payment * countMonths;
    
    // Округляем результат до двух знаков после запятой
    return Number(totalPayment.toFixed(2));
}

// Примеры использования функции
console.log(calculateTotalMortgage(10, 0, 50000, 12));     // Вывод: 52749.53
console.log(calculateTotalMortgage(10, 1000, 50000, 12));  // Вывод: 51694.54
console.log(calculateTotalMortgage(10, 0, 20000, 24));     // Вывод: 22149.56
console.log(calculateTotalMortgage(10, 1000, 20000, 24));  // Вывод: 21042.09
console.log(calculateTotalMortgage(10, 20000, 20000, 24)); // Вывод: 0
console.log(calculateTotalMortgage(10, 0, 10000, 36));     // Вывод: 11616.19
console.log(calculateTotalMortgage(15, 0, 10000, 36));     // Вывод: 12479.52
