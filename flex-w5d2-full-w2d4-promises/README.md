# Promises

## Resources
 - video: https://vimeo.com/681570813/3312c73711
 - code repo: https://github.com/idbentley/lighthouse-lectures/tree/main/flex-w5d2-full-w2d4-promises

## Async Review

Let's consider a recent example of an asynchronous function.

```js
const net = require('net');
const server = net.createServer();
server.listen(9876, () => {
    console.log(`Server is now listening.`);
});
```

In this example, we are setting up a TCP server.   We tell the server to begin listening to port 9876.

The `listen` function is asynchronous, because in order to complete that task, JavaScript needs to make a request to the operating system - it needs to reserve the port, register as a listener on it.

As such, the second parameter to the `listen` funtion is a callback - a function that will be invoked after the async behaviour has completed.

## Async functions *always* accept a callback

It's important to recognize that one of the things that all async functions have in common is that they *always* accept a callback.  The callback is the mechanism that we use in JavaScript to delay execution of code until after the async behaviour is complete.

Not all functions that accept callbacks are async, but _all async functions accept callbacks_!

Without a callback, there is no other mechanism for delaying the execution of some code until after the async behaviour is complete.

## Why callbacks are problematic - A.k.a. Callback Hell

Let's imagine for a moment that you want to request some data from a remote API, then you want to parse the `json` data in the response into an object, before writing that object to a database.

This operation is made up of three async operations:
 - fetching from a remote API
 - parsing the JSON into an object (for large JSON payloads, this can be long running)
 - writing to a database, and confirming that the result was saved.



```js
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
```
**note** the depth of our callbacks reaches **6** levels of indentation

## Why Promises?

 - Promises allows _chaining_ of callbacks
    - Easier to read and write
    - No nested callback "flying V" or "callback hell"
 - A more convenient way of handling async errors
 - Easier ways of synchronizing asynchronous calls

## Our cats example using chained promises

```js
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
```
**note** the depth of our callbacks reaches **2** levels of indentation.

## Error handling with promises

Without Promises, error handling of async methods can be inconsistent, as normal `try/catch` error handling won't work.

As such, each async method must provide it's own interface for error handling, for example: 
```js
request('https://cataaas.com/api/tags', (error, response, body) => {
    if (error) {
        console.log("ERROR", error);
    } else {
        const tags = JSON.parse(body);
    }
});
```

With Promises, we can use the `.catch` method in combination `.then` for a consistent error handling interface.

```js
request('https://cataaas.com/api/tags').then(body => {
        const tags = JSON.parse(body);

}).catch(err => {
    console.log("ERROR", err);
});
```

## Further Reading
 - https://www.youtube.com/watch?v=DHvZLI7Db8E&t=135s
 - https://www.youtube.com/watch?v=QO4NXhWo_NM
 - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
 - https://blog.greenroots.info/javascript-promises-explain-like-i-am-five
 - https://nodejs.dev/learn/understanding-javascript-promises


