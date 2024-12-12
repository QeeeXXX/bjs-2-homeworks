const clock = new AlarmClock();

// Добавляем звонки
clock.addClock('09:00', () => console.log('Пора вставать!'));
clock.addClock('12:30', () => console.log('Обеденный перерыв'));

// Запускаем будильник
clock.start();

// Через некоторое время можем остановить будильник
setTimeout(() => {
  clock.stop();
}, 60000); // остановка через минуту

// Сброс всех звонков
clock.resetAllCalls();

// Очистка всех звонков
clock.clearAlarms();
