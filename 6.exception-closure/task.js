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
    if (!this.isValidTriangle(a, b, c)) {
      throw new Error("Треугольник с такими сторонами не существует");
    }

    this.a = a;
    this.b = b;
    this.c = c;
    this.perimeter = this.calculatePerimeter();
    this.area = this.calculateArea();
  }

  isValidTriangle(a, b, c) {
    return (
      a + b > c &&
      a + c > b &&
      b + c > a
    );
  }

  calculatePerimeter() {
    return this.a + this.b + this.c;
  }

  calculateArea() {
    let s = this.perimeter / 2;
    return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
  }
}

function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);
  } catch (error) {
    return { area: 'Ошибка! Треугольник не существует', perimeter: 'Ошибка! Треугольник не существует' };
  }
}
