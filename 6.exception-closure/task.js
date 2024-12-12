// Задача 1 //

// Функция для парсинга числа
function parseCount(value) {
  const result = Number.parseFloat(value);

  if (isNaN(result)) {
    throw new Error("Невалидное значение");
  }

  return result;
}

// Функция для проверки значения
function validateCount(value) {
  try {
    return parseCount(value);
  } catch (error) {
    // Возвращаем объект ошибки
    return error;
  }
}
