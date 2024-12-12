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

    this._a = a;
    this._b = b;
    this._c = c;
    this._perimeter = this.calculatePerimeter();
    this._area = this.calculateArea();
  }

  get perimeter() {
    return this._perimeter;
  }

  set perimeter(value) {
    throw new Error("Свойство периметра нельзя изменять");
  }

  get area() {
    return this._area;
  }

  set area(value) {
    throw new Error("Свойство площади нельзя изменять");
  }

  isValidTriangle(a, b, c) {
    return (
      a + b > c &&
      a + c > b &&
      b + c > a
    );
  }

  calculatePerimeter() {
    return this._a + this._b + this._c;
  }

  calculateArea() {
    let s = this._perimeter / 2;
    return Math.sqrt(s * (s - this._a) * (s - this._b) * (s - this._c));
  }
}

function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);
  } catch (error) {
    return { area: 'Ошибка! Треугольник не существует', perimeter: 'Ошибка! Треугольник не существует' };
  }
}
