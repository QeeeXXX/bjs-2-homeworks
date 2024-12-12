//Task FIRST

// Базовый класс PrintEditionItem
// Базовый класс для печатных изданий
class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this._state = 100; // инициализируем состояние
    this.type = null; // Тип пока не задан
  }
  
  get state() { // Геттер для состояния
    return this._state;
  }
  
  set state(newState) { // Сеттер для состояния
    if (newState < 0) {
      this._state = 0;
    } else if (newState > 100) {
      this._state = 100;
    } else {
      this._state = newState;
    }
  }
  
  fix() { // Метод для улучшения состояния
    this._state *= 1.5;
    if (this._state > 100) {
      this._state = 100;
    }
  }
}

// Класс журнала, наследуемый от PrintEditionItem
class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = 'magazine';
  }
}

// Класс книги, наследуемый от PrintEditionItem
class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = 'book';
  }
}

// Книги разных жанров, наследующие от Book
class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'novel';
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'fantastic';
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'detective';
  }
}
const sherlock = new PrintEditionItem("Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008);

console.log(sherlock.releaseDate); // 2019
console.log(sherlock.state);       // 100
sherlock.fix();
console.log(sherlock.state);       // 100 (не меняется, так как изначально было 100)

const magazine = new Magazine('Forbes', 2023, 128);

console.log(magazine.type);        // 'magazine'
console.log(magazine.pagesCount);  // 128

const picknick = new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168);

console.log(picknick.author);          // "Аркадий и Борис Стругацкие"
picknick.state = 10;
console.log(picknick.state);           // 10
picknick.fix();
console.log(picknick.state);           // 15

  //TASK SECOND
import { Library } from './library.js';
import { Magazine } from './magazine.js';
import { NovelBook } from './novel-book.js';
import { FantasticBook } from './fantastic-book.js';
import { DetectiveBook } from './detective-book.js';

// Создание библиотеки
const library = new Library("Библиотека имени Ленина");

// Добавление книг в библиотеку
library.addBook(
  new DetectiveBook(
    "Артур Конан Дойл",
    "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
    2019,
    1008
  )
);
library.addBook(
  new FantasticBook(
    "Аркадий и Борис Стругацкие",
    "Пикник на обочине",
    1972,
    168
  )
);
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));

// Поиск книги
console.log(library.findBookBy("name", "Властелин колец")); // null
console.log(library.findBookBy("releaseDate", 1924).name); // "Мурзилка"

// Выдача книги
console.log("Количество книг до выдачи: " + library.books.length); // Количество книг до выдачи: 4
library.giveBookByName("Машина времени");
console.log("Количество книг после выдачи: " + library.books.length); // Количество книг после выдачи: 3

// Повреждение и восстановление книги
const borrowedBook = library.giveBookByName("Пикник на обочине");
borrowedBook.state = 20;
borrowedBook.fix(); // Восстановление книги
console.log(borrowedBook.state); // 30

// Попытка вернуть книгу в библиотеку
library.addBook(borrowedBook);
console.log("Количество книг после возврата: " + library.books.length); // Количество книг после возврата: 3

// Попытка вернуть книгу в библиотеку
library.addBook(borrowedBook);
console.log("Количество книг после возврата: " + library.books.length); // Количество книг после возврата: 3
