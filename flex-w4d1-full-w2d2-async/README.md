# W02D02 - Ansynchronous Control Flow

## Resources
 - Code Repo:https://github.com/idbentley/lighthouse-lectures/tree/main/flex-w4d1-full-w2d2-async
 - Video: https://vimeo.com/677889195/9f5e0a1f33
 - Slides: Checked into repo

### Recap callbacks
A callback is a function passed to another function to be called within that function.

```js
// higher order function takes in callback
const myFilter = (arr, callback) => {
  const filteredArray = [];
  for(const item of arr) {
    if(callback(item)) {
        filteredArray.push(item);
    }
  }
  return filteredArray;
}

const nouns = [ 'Ian', 'dog', 'Montreal', 'bus'];


const properNouns = myFilter(nouns, noun => noun[0].toUpperCase() === noun[0]);

```

### Asynchronous Programming
- JavaScript has a synchronous runtime environment
    - Each line of code is executed one after another
    - JavaScript only has a single thread
    - No two pieces of code can execute simultaneously in a single process
- JavaScript __simulates__ asynchrony by interleaving operations, when the runtime has downtime.
- Asynchronous programming allows us to mark some code as long-running, and indicate that we wish to execute other code while the long-running code is in progress.
- We generally use async programming when using API's outside of our application (eg. interacting with a database, making a web request, waiting on user input, or even reading and writing to disk)

### Blocking code
In JavaScript, code is _always blocking_ unless explcitly set up to be non-blocking.  Blocking code is code that **blocks** other code from executing, while it is executing.

```js
function randomDelay() {
    while(true) {
        if (Math.random() < 0.00000001) {
            break;
        }
    }
}

const a = 1;
randomDelay();
console.log(a);
```

The execution of `randomDelay` *blocks* the execution of `console.log(a)`, even though `randomDelay` would never change the value of `a`.

### setTimeout
`setTimeout` is an asynchronous function that executes a callback after a specified amount of time.

```js
setTimeout(() => {
  console.log("Print afte 1s.")
}, 1000)
```

Synchronous code will always run first

```js
console.log('First');
setTimeout(() => {
  // This line of code will run whenever JavaScript finds a moment.
  console.log("Third");
})
console.log('Second');
```

`setInterval` is similar to `setTimeout`, but runs the callback repeatedly on an interval (rather than being executed only once).

Both `setTimeout` and `setInterval` return a value to us so that we can later make reference to the interval (eg. in order to cancel the execution of the callback).

```js
let counter = 0;
// create a handle
const intervalHandle = setInterval(() => {
  counter++;
  console.log("Counter: ", counter);
}, 1000);

//Sometime later we can cancel the counter.
clearInterval(intervalHandle)
```

**note**: `setInterval` and `setTimeout` ignore the return values of callbacks, so you shouldn't expect them to do anything with them.

### File system functions

Node has a build-in module that allows us to interact with our file system. We can import in this `fs` module like any other node module and this module gives us both a synchronous and asynchronous way of reading in a file.

```js
const fs = require('fs');

// sync
const data = fs.readFileSync('./data.json', {encoding: 'utf-8'})
console.log(data);

// async
fs.readFile('./data.json',{encoding: 'utf-8'}, (err, data) => {
  if(err) {
    return console.log(err);
  }

  console.log(data.length)
})
```

### Read more
- [Node Block vs Non-blocking code](https://nodejs.org/en/docs/guides/blocking-vs-non-blocking/)
- [MDN asynchronous concepts](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Concepts)
- [Node fs](https://nodejs.org/api/fs.html)
