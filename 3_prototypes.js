// Constructor
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}

// getSummary prototype
Book.prototype.getSummary = function () {
    return `
        ${this.title} was written by ${this.author} in ${this.year}
    `;
}

// getAge
Book.prototype.getAge = function () {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
}

// Revised - change year
Book.prototype.revise = function (newYear) {
    this.year = newYear;
    this.revised = true;
}

// Instantiate an Object
const book1 = new Book('Libro 1', 'Autor 1','2013');
const book2 = new Book('Libro 2', 'Autor 2', '2016');
//console.log(book1);
console.log(book2)
book2.revise('2018');
console.log(book2)