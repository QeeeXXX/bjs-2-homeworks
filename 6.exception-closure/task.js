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
