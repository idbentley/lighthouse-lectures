# Callbacks

## Resources
- Video: https://vimeo.com/673351015/8403bec0fe
- Code Repo: https://github.com/idbentley/lighthouse-lectures/tree/main/flex-w2d2-full-w1d4-callbacks

### Functions as values

Functions are Objects.  So, we can interact with them like Objects.

```js
//addTwo is a variable that holds a _reference_ to a function.
const addTwo = function(num) {
  return num + 2;
}

// Functions are stored in variables, so we can assign them into other variables
const addDeux = addTwo; //alias `addTwo` as `addDeux`.
console.log(addTwo);
console.log(addDeux);

// Functions can be anonymous!
const functions = [
    function(num) { return num + 2; }, // this function has no name!
    function(num) { return num * 2; }];

for (fx of functions) {
    console.log(fx); // but we can still access it's reference
    console.log(fx(3));
}

// Just like how we can store them in objects
const functions = {
    addTwo: function(num) { return num + 2; }
}
functions.timesTwo = function(num) {return num *= 2; };

for (key in functions) {
    console.log(functions[key](3));
}
```

### Function Invocation

Invoking a function, or _calling_ a function happens **only when we use `()`**.

```js
// Assigning a function into another variable
const addDeux = addTwo; 

// Invoking a function and assigning its return value into a variable
const result = addTwo(3);

```

### Passing Functions to Functions

Functions are just Objects, so we can call a function with another function as an argument!

```js
const addTwo = function(num) {
    return num + 2;
}

const doSomething = function(callback) {
    return callback(2);
}

doSomething(console.log) // => 2
doSomething(addTwo) // => 4
```


```js
// But we can do something first
const addTwo = function(num) {
    return num + 2;
}

const sumThenApplyCallback = function(nums, callback) {
    let sum = 0;
    for (num of nums) {
        sum += num;
    }
    console.log("sum", sum);
    return callback(sum);
}

const result = sumThenApplyCallback([1, 2, 3], addTwo); 
console.log("result", result);

> sum 6
> result 8
```

Functions that are passed to functions are called `callbacks`. In other words, a callback is a function that gets passed to another function to be invoked in a function.

### Arrow functions

- Arrow functions are a syntactic sugar for creating a limited function
- Arrow functions inherit context from their definition location - so aren't appropriate to use as `methods` on objects.
- Arrow functions are mostly designed for use as callbacks


```js
const addTwo = function(num) {
    return num + 2;
}

// In the simplest view, just remove `function` keyword and add `fat arrow`
const addTwo = (num) => {
    return num + 2;
}

// For functions with exactly one parameter, then `()`s are optional
const addTwo = num => {
    return num + 2;
}

// For one-line functions, the return statement becomes implicit
const addTwo = num => num + 2

// For functions with zero parameters, `()` is mandatory
const alwaysTrue = () => true;

// For functions with multiple parameters. `()` are also mandatory
const addTwoNumbers = (num1, num2) => num1 + num2;

```

### Arrow functions can't be used as methods

```js
const car = {
    maxFuelLevel: 100,
    fuelLevel: 10,
    displayFuelLevel: function () {
        console.log(`Currentley fueled at ${this.fuelLevel}L ${this.maxFuelLevel / this.fuelLevel}% of max`);
    }
}
```

With regular `function` declaration syntax, the context of the function is the `car` object.

```js
const car = {
    maxFuelLevel: 100,
    fuelLevel: 10,
    displayFuelLevel: () => {
        console.log(`Currentley fueled at ${this.fuelLevel}L ${this.maxFuelLevel / this.fuelLevel}% of max`);
    }
}
```
With an arrow function, the context of the function is the `module` - _not_ the `car` object.


### Array iteration functions

There are a few useful array iteration functions that we should know:
 - filter 
 - map
 - reduce
 - forEach

Filter returns an array with only the values that pass a conditional check

```js
const evens = [1, 2, 3, 4].filter(num => num % 2 === 0);
console.log(evens); // > [2, 4]

const properNouns = ["Ian", "cat", "dog", "Taiwo"].filter(name => name[0].toUpperCase() === name[0]);
console.log(properNouns); // > ["Ian", "Taiwo"]
```

How could we implement our own version of `filter`?

```js
// accepts a callback that returns a boolean
const filter = function (array, callback) {
    const result = [];
    for (const item of array) {
        if (callback(item)) {
            result.push(item);
        } else {
            // DO NOTHING
        }
    }
    return result;
}
```


Map returns an array with a modification applied to each array item

```js
const doubled = [1, 2, 3, 4].map(num => num * 2);
console.log(doubled);

const capitalized = ["ian", "dog", "cat", "Taiwo"].map(name => name[0].toUpperCase() + name.slice(1));
```

ForEach is just like a `for ... of` loop, but the loop body is a callback:

```js
// To print each value
[1, 2, 3, 4].forEach(num => console.log(num));
```
 - ** note ** I discourage the use of `forEach`, because it has several disadvantages compared to a regular loop, and it's semantics often lead to unexpected bugs!

Reduce is a very fundamental loop iteration function, with which we can build all of the other functions.  It is _very powerful_, and _very generic_, and as a result it can be rather confusing.

 ```js
[1, 2, 3].reduce((accum, num) => num + accum, 0);

[1, 2, 3].reduce((accum, num) => num > 1 ? accum.concat(num) : accum, [])
 ```