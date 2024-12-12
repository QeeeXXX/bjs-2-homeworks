class AlarmClock {
  constructor() {
    // Коллекция звонков
    this.alarmCollection = [];
    
    // Id интервала
    this.intervalId = null;
  }
  
  addClock(time, callback) {
    if (!time || !callback) {
      throw new Error('Отсутствуют обязательные аргументы');
    }
    
    const existingAlarm = this.alarmCollection.find((alarm) => alarm.time === time);
    
    if (existingAlarm) {
      console.warn('Уже присутствует звонок на это же время');
      return;
    }
    
    this.alarmCollection.push({
      time,
      callback,
      canCall: true
    });
  }
  
  removeClock(time) {
    this.alarmCollection = this.alarmCollection.filter((alarm) => alarm.time !== time);
  }
  
  getCurrentFormattedTime() {
    const now = new Date();
    let hours = now.getHours().toString().padStart(2, '0'); // Форматируем часы до двух цифр
    let minutes = now.getMinutes().toString().padStart(2, '0'); // Форматируем минуты до двух цифр
    return `${hours}:${minutes}`;
  }
  
  start() {
    if (this.intervalId) {
      return;
    }
    
    this.intervalId = setInterval(() => {
      const currentTime = this.getCurrentFormattedTime();
      
      this.alarmCollection.forEach((alarm) => {
        if (currentTime === alarm.time && alarm.canCall) {
          alarm.callback(); // Выполняем коллбек
          alarm.canCall = false; // Запрещаем повторный вызов
        }
      });
    }, 1000); // Интервал каждые 1000 мс (каждую секунду)
  }
  
  stop() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }
  
  resetAllCalls() {
    this.alarmCollection.forEach((alarm) => {
      alarm.canCall = true;
    });
  }
  
  clearAlarms() {
    this.stop(); // Останавливаем текущий интервал
    this.alarmCollection = []; // Полностью очищаем коллекцию звонков
  }
}
