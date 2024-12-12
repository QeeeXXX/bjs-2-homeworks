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

// Исправленные тесты
describe('Задача №2', () => {
  it('объект Triangle должен создаваться', () => {
    expect(new Triangle(1, 3, 3)).toBeDefined();
  });

  it('объект Triangle должен создаваться и правильно считаться периметр и прощадь №1', () => {
    const triangle = new Triangle(2, 5, 5);
    expect(triangle).toBeDefined();
    expect(Number(triangle.perimeter.toFixed(3))).toEqual(12);
    expect(Number(triangle.area.toFixed(3))).toEqual(4.899);
  });

  it('объект Triangle должен создаваться и правильно считаться периметр и прощадь №2', () => {
    const triangle = new Triangle(6, 10, 15);
    expect(triangle).toBeDefined();
    expect(Number(triangle.perimeter.toFixed(3))).toEqual(31);
    expect(Number(triangle.area.toFixed(3))).toEqual(20.123);
  });

  it('объект Triangle не должен менять свойства периметра и площади', () => {
    const triangle = new Triangle(6, 10, 15);
    expect(triangle).toBeDefined();

    triangle.perimeter = "неправильное значение"; // Вызовет ошибку
    triangle.area = "неправильное значение"; // Вызовет ошибку
    expect(Number(triangle.perimeter.toFixed(3))).toEqual(31);
    expect(Number(triangle.area.toFixed(3))).toEqual(20.123);
  });

  it('объект Triangle не должен создаваться №1', () => {
    expect(() => new Triangle(1, 3, 100)).toThrowError("Треугольник с такими сторонами не существует");
  });

  it('объект Triangle не должен создаваться №2', () => {
    expect(() => new Triangle(100, 3, 10)).toThrowError("Треугольник с такими сторонами не существует");
  });

  it('объект Triangle не должен создаваться №3', () => {
    expect(() => new Triangle(1, 300, 10)).toThrowError("Треугольник с такими сторонами не существует");
  });

  it('функция getTriangle должна возвращать объект треугольника', () => {
    expect(getTriangle(2, 5, 5)).toEqual(new Triangle(2, 5, 5));
  });

  it('функция getTriangle не должна возвращать объект треугольника', () => {
    const triangle = getTriangle(1, 3, 100);
    expect(triangle.area).toEqual('Ошибка! Треугольник не существует');
    expect(triangle.perimeter).toEqual('Ошибка! Треугольник не существует');
  });

  it('у возвращаемого объекта нельзя менять свойства получения периметра и площади', () => {
    const triangle = getTriangle(1, 3, 100);

    triangle.perimeter = "неправильное значение";
    triangle.area = "неправильное значение";
    expect(triangle.area).toEqual('Ошибка! Треугольник не существует');
    expect(triangle.perimeter).toEqual('Ошибка! Треугольник не существует');
  });
});
