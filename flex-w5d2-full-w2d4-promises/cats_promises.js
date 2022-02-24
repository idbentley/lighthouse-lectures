
const request = require('request-promise-native');
const fs = require('fs/promises');
const readline = require("readline/promises");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function fetchCats () {
    const catTagPromise = request('https://cataas.com/api/tags');
    let tags = [];
    catTagPromise.then((body) => {
        tags = JSON.parse(body);
        return fs.writeFile('cattags.json', tags.join(', '));
    }).then(() => {
        return rl.question("What type of cat is your favourite? ");
    }).then((answer) => {
        rl.close();
        if (tags.includes(answer)) {
            return request(`https://cataas.com/api/cats?tag=${answer}`);
        }
    }).then((body) => {
        const bodyJSON = JSON.parse(body);
        const bodyLength = bodyJSON.length;
        const randomCat = Math.round(Math.random() * bodyLength);
        console.log(`https://cataas.com/cat/${JSON.parse(body)[randomCat].id}`);

    });
}
fetchCats();
