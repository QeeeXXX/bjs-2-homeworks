class AlarmClock {
  constructor() {
    this.alarmCollection = [];  // Коллекция звонков
    this.intervalId = null;     // id таймера
  }

  // Метод для получения текущего времени в формате HH:MM
  getCurrentFormattedTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
  }

  // Метод для добавления нового звонка
  addClock(time, callback) {
    // Проверка на обязательные аргументы
    if (!time || !callback) {
      throw new Error('Отсутствуют обязательные аргументы');
    }

    // Добавляем звонок в коллекцию без проверок на уникальность
    this.alarmCollection.push({
      time,
      callback,
      canCall: true
    });
  }

  // Метод для удаления звонков по времени
  removeClock(time) {
    this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== time);
  }

  // Метод для старта будильника
  start() {
    if (this.intervalId !== null) {
      return;  // Если интервал уже существует, ничего не делаем
    }

    // Создание интервала для запуска будильника каждую секунду
    this.intervalId = setInterval(() => {
      const currentTime = this.getCurrentFormattedTime();

      // Перебор всех звонков
      this.alarmCollection.forEach(alarm => {
        if (alarm.time === currentTime && alarm.canCall) {
          alarm.canCall = false;  // Не запускать снова
          alarm.callback();       // Вызов коллбека
        }
      });
    }, 1000);  // Периодичность — 1 секунда
  }

  // Метод для остановки будильника
  stop() {
    if (this.intervalId !== null) {
      clearInterval(this.intervalId);
      this.intervalId = null;  // Сброс значения intervalId
    }
  }

  // Метод для сброса всех звонков (сделать их снова доступными для вызова)
  resetAllCalls() {
    this.alarmCollection.forEach(alarm => {
      alarm.canCall = true;
    });
  }

  // Метод для очистки всех звонков и остановки будильника
  clearAlarms() {
    try {
      this.stop();  // Останавливаем интервал
      this.alarmCollection = [];  // Очищаем коллекцию звонков
    } catch (error) {
      console.error('Ошибка при очистке звонков:', error);
    }
  }
}
