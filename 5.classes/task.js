// Задача 1 //

// Базовый класс для печатных изданий
class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this._state = 100; // _state обозначает приватное свойство
    this.type = null;
  }
  
  get state() {
    return this._state;
  }
  
  set state(newState) {
    if (newState < 0) {
      this._state = 0;
    } else if (newState > 100) {
      this._state = 100;
    } else {
      this._state = newState;
    }
  }
  
  fix() {
    this._state *= 1.5;
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

// Классы для различных типов книг
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
const magazine = new Magazine('Название журнала', 2023, 64);
console.log(magazine.type); // 'magazine'
console.log(magazine.state); // 100
magazine.state = 50;
console.log(magazine.state); // 50
magazine.fix();
console.log(magazine.state); // 75
const book = new Book('Автор книги', 'Название книги', 2000, 320);
console.log(book.type); // 'book'
console.log(book.author); // 'Автор книги'
console.log(book.state); // 100
book.state = 80;
console.log(book.state); // 80
book.fix();
console.log(book.state); // 120 (округляется до 100)
const fantasticBook = new FantasticBook('Автор', 'Фантастическая книга', 1995, 256);
console.log(fantasticBook.type); // 'fantastic'
console.log(fantasticBook.author); // 'Автор'
console.log(fantasticBook.state); // 100
fantasticBook.state = 90;
console.log(fantasticBook.state); // 90
fantasticBook.fix();
console.log(fantasticBook.state); // 135 (округляется до 100)
