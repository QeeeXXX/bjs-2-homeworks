class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.intervalId = null;
  }

  getCurrentFormattedTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
  }

  addClock(time, callback) {
    if (!time || !callback) {
      throw new Error('Отсутствуют обязательные аргументы');
    }
    
    // Проверяем наличие звонка с таким же временем
    const existingAlarm = this.alarmCollection.find(alarm => alarm.time === time);
    if (existingAlarm) {
      console.warn(`Уже присутствует звонок на ${time}`);
    } else {
      this.alarmCollection.push({ time, callback, canCall: true });
    }
  }

  removeClock(time) {
    this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== time);
  }

  start() {
    if (this.intervalId === null) {
      this.intervalId = setInterval(() => {
        const currentTime = this.getCurrentFormattedTime();
        
        this.alarmCollection.forEach(alarm => {
          if (alarm.time === currentTime && alarm.canCall) {
            alarm.canCall = false;
            alarm.callback();
          }
        });
      }, 1000);
    }
  }

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  resetAllCalls() {
    this.alarmCollection.forEach(alarm => {
      alarm.canCall = true;
    });
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}
