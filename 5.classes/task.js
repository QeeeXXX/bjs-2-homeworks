//Task FIRST

// Базовый класс PrintEditionItem
class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this._name = name;
        this._releaseDate = releaseDate;
        this._pagesCount = pagesCount;
        this._state = 100;
        this.type = null;
    }

    get name() {
        return this._name;
    }

    get releaseDate() {
        return this._releaseDate;
    }

    get pagesCount() {
        return this._pagesCount;
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
        if (this._state > 100) {
            this._state = 100;
        }
    }
}
class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}
class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this._author = author;
        this.type = "book";
    }

    get author() {
        return this._author;
    }
}
class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}
// Пример использования базового класса
const sherlock = new PrintEditionItem(
    "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
    2019,
    1008
);

console.log(sherlock.releaseDate); // 2019
console.log(sherlock.state);       // 100
sherlock.fix();
console.log(sherlock.state);       // 150 (переведено в 100, так как нельзя превышать 100%)

// Пример использования класса Magazine
const murzilka = new Magazine("Мурзилка", 1924, 60);
console.log(murzilka.type);        // magazine

// Пример использования класса FantasticBook
const picknick = new FantasticBook(
    "Аркадий и Борис Стругацкие",
    "Пикник на обочине",
    1972,
    168
);

console.log(picknick.author);      // Аркадий и Борис Стругацкие
picknick.state = 10;
console.log(picknick.state);       // 10
picknick.fix();
console.log(picknick.state);       // 15
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
