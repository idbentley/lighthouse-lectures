# Mocha, Chai, and TDD

## Resources
 - Video: https://vimeo.com/698279186/79da735693
 - Repo: https://github.com/idbentley/lighthouse-lectures/tree/main/flex-w3d1-full-w2d1-mocha-chai-tdd


## Module export/require review

*note* In modern JavaScript there are 2 ways to do imports/exports.  We will learn about the second style: "EcmaScript 6 import" later in the program - for now we will focus on "CommonJs require" style.

- Each module (i.e. _file_) has a *module.exports* object.
- We can export data and functions from by placing it in the `module.exports` object
- You can add new keys to the `module.exports` object _or_ you can completely overwrite it

```js
// adding new keys to module.exports
module.exports.myFunc = myFunc;
module.exports.myOtherFunc = myOtherFunc;

// overwriting module.exports attribute
module.exports = myFunc;
// or overwrite with an object declaration
module.exports = {
  myFunc,
  myOtherFunc
};
```

- We can import the `exports` attribute from one module into another module, using the `require` keyword with a _relative path_.

```js
// require the entire attribute
const myFunc = require('./otherModule');

// use ES6 destructuring to require just one value from the exported object
const { myFunc } = require('./otherModule');
```

- To import functionality from a _package_, simply import from the package name.

```js
//import the exported object from the `assert` package
const assert = require('assert');
```

### Test Driven Development or TDD
- We begin by writing one or more tests - before writing any code
- We use a process called Red-Green-Refactor
- Red: Run the tests - and see that it's failing "RED"
- Green: Write the minimum possible code to make your tests pass "GREEN"
- Refactor: Review your current code, and see if there is some way you can improve it without causing your tests to fail.

### Mocha
- A testing runner
- By default, looks in the `test` folder for test files to run

### Chai
- An **assertion** library
- We can use _assertions_ to describe the desired outcome of our code
- Chai offers three different interfaces: `should`, `expect`, and `assert`
- For most uses, choosing which interface to use is a matter of preference

```js
// should
myVar.should.be.a('string');
myVar.should.equal('hello world');

// expect
expect(myVar).to.be.a('string');
expect(myVar).to.equal('hello world');

// assert
assert.typeOf(myVar, 'string');
assert.equal(myVar, 'hello world');
```
### Behaviour Driven Development

Behaviour Driven Development is a methodology wherby code specifications are written in such a way that test code can be automatically (or nearly automatically) be generated for the specifications.

- BDD is rarely used in practice, and will not be covered in detail in this program.


### Ignoring files/folders
* Sometimes there are files or folders that we do not want git to track for us
* These files might contain sensitive information such as passwords or API keys
* They might also be folders such as `node_modules` which are different in different environments
* We can tell git to ignore certain files/folders by using a special file called `.gitignore` (note the leading period)
```
# inside .gitignore
node_modules
.DS_Store
```

* Using the above file, the `node_modules` folder and any `.DS_Store` files will not be tracked by git

### Useful Links
- [Node Modules](https://nodejs.org/docs/latest/api/modules.html)
- [Node Wrapper Function](https://nodejs.org/api/modules.html#modules_the_module_wrapper)
- [Mocha Docs](https://mochajs.org/)
- [Chai Docs](https://www.chaijs.com/)
- [Chai: Differences between should, expect, and assert](https://www.chaijs.com/guide/styles/#differences)
