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

        // Сортируем корни по возрастанию
        return [x1, x2].sort((a, b) => a - b);
    }
}

// Примеры использования функции
console.log(solveEquation(1, -3, 2));  // [-1, 2]
console.log(solveEquation(1, 2, 1));   // [-1]
console.log(solveEquation(1, 1, 1));   // []