"use strict";

function solveEquation(a, b, c) {
    // Проверка, что a не равно нулю (иначе это линейное уравнение)
    if (a === 0) {
        throw new Error("Коэффициент 'a' не может быть нулем.");
    }
    
    let discriminant = b ** 2 - 4 * a * c;
    
    if (discriminant < 0) {
        return [];
    } else if (discriminant === 0) {
        let root = -b / (2 * a);
        return [root];
    } else {
        let sqrtD = Math.sqrt(discriminant);
        let x1 = (-b + sqrtD) / (2 * a);
        let x2 = (-b - sqrtD) / (2 * a);
        
        return [x1, x2].sort((a, b) => a - b); // Сортируем корни по возрастанию
    }
}

// Пример использования функции
let result = solveEquation(1, -3, 2);
console.log(result); // [-1, 2]