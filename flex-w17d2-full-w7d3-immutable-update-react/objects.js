// const book = {
//     author: 'Ursula K. Leguin',
//     title: 'The Lefthand of Darkness',
//     release_year: 1969
// }

// console.log(book);

// const book2 = book;

// book2.title = "Rocannon's World";
// book2.release_year = 1966;

// console.log(book);
// console.log(book2);

// PART 2

// const book2 = {...book};

// book2.title = "Rocannon's World";
// book2.release_year = 1966;

// console.log(book);
// console.log(book2);

// PART 3

// const book2 = {
//     ...book,
//     title: "Rocannon's World",
//     release_year: 1966
// };

// console.log(book);
// console.log(book2);

// PART 4

// const book = {
//     author: 'Ursula K. Leguin',
//     title: 'The Lefthand of Darkness',
//     release_year: 1969,
//     genre: ['Science Fiction', 'Adventure']
// }

// const book2 = {
//     ...book,
//     title: "Rocannon's World",
//     release_year: 1966
// };

// console.log(book);
// console.log(book2);

// PART 5

const book = {
    author: 'Ursula K. Leguin',
    title: 'The Lefthand of Darkness',
    release_year: 1969,
    genre: ['Science Fiction', 'Adventure']
}

// const book2 = {
//     ...book,
//     title: "Rocannon's World",
//     release_year: 1966
// };

// book2.genre.push('Speculative Fiction');


// console.log(book);
// console.log(book2);

// PART 5

const book2 = {
    ...book,
    title: "Rocannon's World",
    release_year: 1966,
    genre: [...book.genre]
};

book2.genre.push('Speculative Fiction');


console.log(book);
console.log(book2);
