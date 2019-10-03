// Object Of Protos
const bookProtos = {
    getSummary: function () {
        return `
            ${this.title} was written by ${this.author} in ${this.year}
        `;        
    },
    getAge: function () {
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old`;        
    }
}

// Create Object
/* const book1 = Object.create(bookProtos);
book1.title = 'Book Primero';
book1.author = 'Miguel';
book1.year = '2013';
 */

const book1 = Object.create(bookProtos, {
    title: {value: 'Uno'},
    author: {value: 'autor'},
    year: {value: '2015'}
});

console.log(book1)