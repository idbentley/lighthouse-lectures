// Arrays are references:
const burritoIngredients = ['rice', 'beans', 'salsa'];

// const bowlIngredients = burritoIngredients;

// bowlIngredients.push('guac');

// console.log(burritoIngredients);
// console.log(bowlIngredients);

// Making a copy:

// const bowlIngredients = Array.from(burritoIngredients);
const bowlIngredients = [...burritoIngredients];

bowlIngredients.push('guac');

console.log('burrito: ', burritoIngredients);
console.log('bowl: ', bowlIngredients);
