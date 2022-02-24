
const request = require('request');

function fetchCats () {
    request('https://cataaas.com/api/tags', (error, response, body) => {
        if (error) {
            console.log("ERROR", error);
        } else {
            const tags = JSON.parse(body);
        }
    });
}

fetchCats();


const request = require('request-promise-native');

function fetchCats () {
    request('https://cataaas.com/api/tags').then(body => {
            const tags = JSON.parse(body);

    }).catch(err => {
        console.log("ERROR", err);
    });
}

fetchCats();