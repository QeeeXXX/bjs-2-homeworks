// Задача 1 //
// Функция для парсинга числа
// Определение функций
function parseCount(value) {
  const result = Number.parseFloat(value);

  if (isNaN(result)) {
    throw new Error("Невалидное значение");
  }

  return result;
}

function validateCount(value) {
  try {
    return parseCount(value);
  } catch (error) {
    // Возвращаем объект ошибки
    return error;
  }
}

// Тесты
describe('Домашнее задание к лекции «Обработка исключений и замыкания»', () => {
  describe('Задача №1', () => {
    it('функция parseCount должна парсить целое значение', () => {
      expect(parseCount("123")).toEqual(123);
    });

    it('функция parseCount должна парсить значение 012', () => {
      expect(parseCount("012")).toEqual(12);
    });

    it('функция validateCount должна парсить дробное значение', () => {
      expect(validateCount("56.65")).toEqual(56.65);
    });

    it('функция parseCount не должна парсить невалидное значение', () => {
      expect(() => parseCount("ыфва")).toThrowError("Невалидное значение");
    });

    it('функция validateCount должна возвращать перехваченную ошибку', () => {
      expect(validateCount("ыфва").stack.includes("parseCount")).toBeTruthy();
    });
  });
});

// Задача 2 //

class Triangle {
  constructor(a, b, c) {
    if (!this.isValidTriangle(a, b, c)) {
      throw new Error("Треугольник с такими сторонами не существует");
    }
    
    this.a = a;
    this.b = b;
    this.c = c;
  }

  isValidTriangle(a, b, c) {
    return (
      a + b > c &&
      a + c > b &&
      b + c > a
    );
  }

  get perimeter() {
    return this.a + this.b + this.c;
  }

  get area() {
    // Формула Герона для нахождения площади треугольника
    let p = this.perimeter / 2;
    let s = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
    return Number(s.toFixed(3)); // Округляем до трех знаков после запятой
  }
}

function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);
  } catch (error) {
    return {
      get area() { return 'Ошибка! Треугольник не существует'; },
      get perimeter() { return 'Ошибка! Треугольник не существует'; }
    };
  }
}
