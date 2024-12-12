// Задача 1 //

// Функция для парсинга числа
function parseCount(value) {
    const parsedValue = Number.parseFloat(value);
    
    if (isNaN(parsedValue)) {
        throw new Error('Невалидное значение');
    }
    
    return parsedValue;
}

// Функция для проверки значения и возврата результата либо ошибки
function validateCount(value) {
    try {
        // Пробуем распарсить значение
        return parseCount(value);
    } catch (error) {
        // Если произошла ошибка при парсинге, возвращаем её
        return error;
    }
}

// Задача 2 //

class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        
        // Проверка условия существования треугольника
        if ((a + b <= c) || (a + c <= b) || (b + c <= a)) {
            throw new Error('Треугольник с такими сторонами не существует');
        }
    }

    // Геттер для периметра треугольника
    get perimeter() {
        return this.a + this.b + this.c;
    }

    // Геттер для площади треугольника по формуле Герона
    get area() {
        let p = this.perimeter / 2; // Полупериметр
        let s = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
        return s.toFixed(3); // Округление до трех знаков после запятой
    }
}

// Функция для создания нового объекта треугольника
function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (error) {
        // Возвращение объекта с сообщениями об ошибках вместо значений
        return {
            perimeter: () => 'Ошибка! Треугольник не существует',
            area: () => 'Ошибка! Треугольник не существует'
        };
    }
}
let triangle1 = getTriangle(3, 4, 5);
console.log(triangle1.perimeter()); // Выведет 12
console.log(triangle1.area());      // Выведет 6.000

let triangle2 = getTriangle(1, 1, 3);
console.log(triangle2.perimeter()); // Выведет 'Ошибка! Треугольник не существует'
console.log(triangle2.area());      // Выведет 'Ошибка! Треугольник не существует'
