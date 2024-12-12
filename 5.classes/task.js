// Задача 1 //

// Базовый класс для печатных изданий
class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this._state = 100; // начальное состояние издания
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
    this._state = Math.min(this._state * 1.5, 100); // увеличение состояния с учётом ограничения
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

// Пример использования
const detectiveBook = new DetectiveBook('Агата Кристи', 'Убийство в Восточном экспрессе', 1934, 240);
console.log(detectiveBook.state); // 100
detectiveBook.state = 60;
console.log(detectiveBook.state); // 60
detectiveBook.fix();
console.log(detectiveBook.state); // 90


// Задача 2 //

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (book.state >= 30) {
      this.books.push(book);
    }
  }

  findBookBy(key, value) {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i][key] === value) {
        return this.books[i];
      }
    }
    return null;
  }

  giveBookByName(bookName) {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].name === bookName) {
        let foundBook = this.books.splice(i, 1)[0]; // удаляем книгу из массива и возвращаем её
        return foundBook;
      }
    }
    return null;
  }
}

// Пример использования
const library = new Library("Библиотека имени Ленина");

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

console.log(library.findBookBy("name", "Властелин колец")); // null
console.log(library.findBookBy("releaseDate", 1924).name); // "Мурзилка"

console.log("Количество книг до выдачи: " + library.books.length); // Количество книг до выдачи: 4
let borrowedBook = library.giveBookByName("Машина времени");
console.log("Количество книг после выдачи: " + library.books.length); // Количество книг после выдачи: 3

borrowedBook.state = 20; // Повреждаем книгу
borrowedBook.fix(); // Восстанавливаем книгу
library.addBook(borrowedBook); // Добавляем восстановленную книгу обратно в библиотеку

console.log("Количество книг после возврата: " + library.books.length); // Количество книг после возврата: 4
