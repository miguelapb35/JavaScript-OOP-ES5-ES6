// Constructor
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;

    this.getSummary = function () {
        return `
            ${this.title} was written by ${this.author} in ${this.year}
        `;
    }
}

// Instantiate an Object
const book1 = new Book('Libro 1', 'Autor 1','2013');
const book2 = new Book('Libro 2', 'Autor 2', '2016');
//console.log(book1);
console.log(book2)