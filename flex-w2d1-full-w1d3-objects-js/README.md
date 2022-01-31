# Objects In Javascript

### Primitive Types
There are 7 primitive types in Javascript
1. String
2. Number
3. Boolean
4. Undefined
5. Null
6. Symbol
7. Bigint

```js
const school = 'lighthouse'; // string
const year = 2022; // number
const isTrue = true; // boolean
const type = Symbol('crypto') // symbol
const someHugeNumber = 9007199254740994n; // bigint
```

*A note * on `null` and `undefined`.
 - `undefined` is the value given to a variable when it's value is _unknown_.  It usually can be read as "this variable has not been given a value yet"
 - `null` is the value given to a variable when it's value is _nothing_.  It usually can be read as "this variable has been given the value of _nothing_".

### Objects
*Everything* in JavaScript that is _not a primitive_ is an object.

- Objects contain data and functionality that works on the contained data.
- Objects are made up of key-value pairs.  The Object stores a _value_ at a `key`.
- keys should (almost always) be strings - they can _technically_ be any primitive.

**note**: *Everything* in JavaScript is either a primitive or an object - thus, arrays and functions are Objects!

#### Object Declaration Syntax

This is the most common way to create Objects in JavaScript
```js
const instructor = {
  name: 'Ian B',
  location: 'Montral, QC',
  isEnrolled: true,
  age: 34,
  plants: ['pothos', 'corn', 'aloe', 'fiddle head fig', 'asparagus fern']
};

// to access value either
// 1. square bracket notation
console.log(instructor['name']); // > Ian B

// 2. dot notation
console.log(instructor.name); // > Ian B
```

If the key of the object is known, use dot notation otherwise use bracket notation.

```js
const keyToLookup = 'name';
console.log(instructor[keyToLookup]);
```

### Primitives are Passed as Values
When you pass a primitive type to a function, it is passed as a value: a copy is passed and the original primitive is unchanged.

```js
let instructor = 'Ian';

const updateInstructor = function(instructor){
  instructor = 'Taiwo';
  console.log('instructor during function:', instructor)
}

console.log(instructor) // > Ian
console.log(updateInstructor(instructor)) // > Taiwo
console.log(instructor) // > Ian
```

*Remember the rule* primitives are passed by value.

Changes made to primitives inside of functions do not persist.

### Objects are Passed as References

When you pass an object to a function, then a _reference_ to the object is passed.  Changes made to an object will modify the original.

```js
const instructor = {
  name: 'Ian B',
  location: 'Montral, QC'
};

const updateInstructor = function(instructor){
  instructor.name = 'Taiwo O';
  console.log('instructor name during function:', instructor.name);

console.log("instructor name before function:", instructor.name) // > Ian
console.log(updateInstructor(instructor)) // > Taiwo
console.log("instructor name after function:", instructor.name) // > Taiwo
}

```

*Remember the rule* objects are passed by reference.

Changes made to objects inside of functions *do* effect the original!

** See the difference in pythontutor **

### Methods & Context
Functions inside objects are known as methods and can be called much like accessing other values inside objects.

In order to access other attributes of the object, within the `context` of the function, use the `this` keyword.

```js
const car = {
  name: 'Camry',
  brand: 'Toyota',
  mileage: 10_000,
  fuelLevel: 18,
  maxFuelLevel: 30,
  litrePerKm: 0.05,
  drive: function (km) {
      this.mileage += km;
      this.fuelLevel -= (km * this.litrePerKm);
  }
};

console.log(car.fuelLevel);
car.drive(100);
console.log(car.fuelLevel);

// function expression then assign to an object key
const refuel = function() {
  const amountOfFuel = this.maxFuelLevel - this.fuelLevel;
  return amountOfFuel;
}
car.refuel = refuel;

console.log(car.fuelLevel);
console.log(car.refuel());

```

**note** Context is a very subtle idea in JavaScript, and later in the program we will spend more time dedicated to understanding the nuances of it's usage and application.

### Looping Objects and Arrays

As we saw last time, we use `for ... of` to loop over an array.

```js
const destinations = ['Vancouver', 'Calgary', 'Edmonton', 'Saskatoon', 'Regina'];

for (const destination of destinations) {
    console.log("Now arriving", destination);
}

```

**remember** `for ... of` loops are designed for arrays!

With objects, we use `for...in` to iterate over the `keys` of the object.

```js
const instructors = {
  1: {
      id: '1',
      name: 'Ian'
  },
  2: {
      id: '2',
      name: 'Taiwo'
  }
};

for (const key in instructors) {
  // key is variable, so use bracket notation to access the value
  console.log(key, instructors[key])
}
/*
>
1 { id: '1', name: 'Ian' }
2 { id: '2', name: 'Taiwo' }
*/
```

**remember** `for ... in` loops are designed for objects!


## Links
- [MDN: Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
- [Dot Notation vs Square Brackets](https://codeburst.io/javascript-quickie-dot-notation-vs-bracket-notation-333641c0f781)
- [Python Tutor](http://www.pythontutor.com/javascript.html#mode=edit)
- [Symbol Type](https://javascript.info/symbol)
- [The Essential Guide to JavaScript's Newest Data Type: BigInt](https://www.smashingmagazine.com/2019/07/essential-guide-javascript-newest-data-type-bigint/)






