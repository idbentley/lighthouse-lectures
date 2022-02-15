const fs = require('fs');

// sync
const data = fs.readFileSync('./data.json', {encoding: 'utf-8'})
console.log(data); // This line waits 


// async
fs.readFile('./data.json', {encoding: 'utf-8'}, (err, data) => {
    console.log(data); // This line waits
});
console.log('right away'); // This line executes immediately