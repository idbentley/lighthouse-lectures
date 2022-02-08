/*
    Write a function "numVowels" that accepts a string as imput, and returns the integer value of how many vowels are contained in that string.

    Vowels inclue "aeiou", not "y".

    Any non-string value contains no vowels.

*/
function numVowels (str) {
    if (typeof(str) !== 'string') { return 0; }
    let count = 0;
    const vowels = ['a', 'e','i', 'o', 'u'];

    for (const character of str) {
        if (vowels.includes(character.toLowerCase())) {
            count += 1;
        }
    }
    return count;
}

module.exports = {numVowels: numVowels};