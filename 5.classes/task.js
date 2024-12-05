//Task FIRST

// Базовый класс PrintEditionItem
class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
      this.name = name;
      this.releaseDate = releaseDate;
      this.pagesCount = pagesCount;
      this.state = 100; // по умолчанию состояние 100
      this.type = null; // тип по умолчанию null
    }
  
    // Метод fix, который улучшает состояние на 50%
    fix() {
      if (this.state < 100) {
        this.state = Math.min(this.state * 1.5, 100); // увеличиваем состояние в 1.5 раза, но не больше 100
      }
    }
  
    // Сеттер для состояния
    set state(value) {
      if (value < 0) {
        this._state = 0; // если меньше 0, записываем 0
      } else if (value > 100) {
        this._state = 100; // если больше 100, записываем 100
      } else {
        this._state = value; // иначе записываем значение
      }
    }
  
    // Геттер для состояния
    get state() {
      return this._state;
    }
  }
  
  // Класс Magazine (журнал) наследует от PrintEditionItem
  class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
      this.type = "magazine"; // тип издания — журнал
    }
  }
  
  // Класс Book (книга) наследует от PrintEditionItem
 class Book {
    constructor(author, title, yearOfPublication, numberOfPages) {
        this.author = author;
        this.title = title;
        this.yearOfPublication = yearOfPublication;
        this.numberOfPages = numberOfPages;
    }
}
// Создание объекта Book
const book = new Book('А. Сапковский', 'Меч Предназначения', 1992, 384);

// Проверка свойств объекта
expect(book.author).toEqual('А. Сапковский');
expect(book.title).toEqual('Меч Предназначения');
expect(book.yearOfPublication).toEqual(1992);
expect(book.numberOfPages).toEqual(384);
  
  // Класс NovelBook (роман) наследует от Book
  class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount, author);
      this.type = "novel"; // тип издания — роман
    }
  }
  
  // Класс FantasticBook (фантастика) наследует от Book
  class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount, author);
      this.type = "fantastic"; // тип издания — фантастика
    }
  }
  
  // Класс DetectiveBook (детектив) наследует от Book
  class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount, author);
      this.type = "detective"; // тип издания — детектив
    }
  }
  
  // Пример использования:
  
  const sherlock = new PrintEditionItem(
    "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
    2019,
    1008
  );
  console.log(sherlock.releaseDate); // 2019
  console.log(sherlock.state); // 100
  sherlock.fix();
  console.log(sherlock.state); // 100 (не изменилось, так как состояние уже на максимуме)
  
  const picknick = new FantasticBook(
    "Аркадий и Борис Стругацкие",
    "Пикник на обочине",
    1972,
    168
  );
  console.log(picknick.author); // "Аркадий и Борис Стругацкие"
  picknick.state = 10;
  console.log(picknick.state); // 10
  picknick.fix();
  console.log(picknick.state); // 15 (состояние увеличено на 50%)
  
  const magazine = new Magazine("Tech Weekly", 2023, 100);
  console.log(magazine.type); // "magazine"
  
  
  //TASK SECOND

 
  // Создаем библиотеку
const library = new Library("Библиотека имени Ленина");

// Добавляем книги в библиотеку
library.addBook(new DetectiveBook("Артур Конан Дойл", "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008));
library.addBook(new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168));
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));

// Проверяем наличие книги
console.log(library.findBookBy("title", "Властелин колец")); // null

// Находим книгу по году выпуска
console.log(library.findBookBy("releaseYear", 1924).title); // "Мурзилка"

// Количество книг до выдачи
console.log("Количество книг до выдачи: " + library.books.length); // 4

// Выдача книги
let borrowedBook = library.giveBookByName("Машина времени");

// Количество книг после выдачи
console.log("Количество книг после выдачи: " + library.books.length); // 3

// Повреждение книги
borrowedBook.state -= 50;

// Восстановление книги
borrowedBook.state += 20;

// Попытка вернуть книгу в библиотеку
library.addBook(borrowedBook);

// Проверим количество книг снова
console.log("Количество книг после попытки возврата: " + library.books.length); // 4


//TASK THIRD


class Student {
    constructor(name) {
        this.name = name;
        this.marks = {};
    }

    addMark(mark, subject) {
        if (mark < 2 || mark > 5) {
            console.error(`Неверная оценка ${mark}. Оценка должна быть в диапазоне от 2 до 5.`);
            return;
        }
        
        if (!this.marks.hasOwnProperty(subject)) {
            this.marks[subject] = [];
        }
        
        this.marks[subject].push(mark);
    }

    getAverageBySubject(subject) {
        if (!this.marks.hasOwnProperty(subject)) {
            return 0;
        }
        
        let sum = this.marks[subject].reduce((acc, current) => acc + current, 0);
        return sum / this.marks[subject].length;
    }

    getAverage() {
        let totalMarks = 0;
        let subjectsCount = 0;
        
        for (let subject in this.marks) {
            totalMarks += this.getAverageBySubject(subject) * this.marks[subject].length;
            subjectsCount += this.marks[subject].length;
        }
        
        return totalMarks / subjectsCount;
    }
}
