
const request = require('request');
const fs = require('fs');
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function fetchCats () {
    request('https://cataas.com/api/tags', (error, response, body) => {
        console.log(body);
        const tags = JSON.parse(body);
        fs.writeFile('cattags.json', tags.join(', '), () => {
            console.log('cattags written');
            rl.question("What type of cat is your favourite", (answer) => {
                if (tags.includes(answer)) {
                    request(`https://cataas.com/api/cats?tag=${answer}`, (error, response, body) => {
                        console.log(`https://cataas.com/cat/${JSON.parse(body)[0].id}`);

                    });
                }
                rl.close();
            });
        }); 
    });
}

fetchCats();