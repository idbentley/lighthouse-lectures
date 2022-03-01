# Web Servers 101

## Resources
 - Code Repo: https://github.com/idbentley/lighthouse-lectures/tree/main/flex-w6d1-full-w3d1-web-servers
 - Video Link: https://vimeo.com/683501180/16e169d055
 - Slides: in the repo

## Web server
 - Wide variety of meanings, including:
  - Load Balancer
  - Web Server
  - Application Server <- These are what we write

## TCP 
- The layer that facilitates delivery of requests and responses

## HTTP
- built on top of TCP
- request - response protocol
- client (requests) a resource
- server (responds) to the request

## Address
- Your servre has a IP address where it can be reached on the internet
- PORT Number (65,535 TCP ports on your machine)

## Request
- every request needs a **verb** and a **path**
- verbs - what do we want to do
  1. GET => retrieve information
  2. POST => send information to the server
- path - what do we want to do it to
  - string
  - `/users`, `/maps`
  - http://localhost:3000/users

## Middleware
- a function that runs between the request and the response
  - ex. parse the incoming request (pull out username and password)
  - `email=j@example.com&password=1234` <= url encoded 
  - body-parser middleware will parse this for us 
  ```js
  {
    email: 'j@example.com',
    password: '1234'
  }
  ```




### Express.js
* A _framework_ for building application servers written in JavaScript
* The main use for _Express_ is to simplify the creation of route handlers

```js
// basic Express server
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('thanks for visiting "/"');
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
```

### Middleware
* _Middleware_ is code (in the form of functions) that runs between the incoming request and the outgoing response
* ExpressJS on its own has very little functionality; it is through the use of middleware that the real power of Express comes out
* There are many popular middleware packages available to us via NPM (or Yarn), for example:
  * [`body-parser`](https://expressjs.com/en/resources/middleware/body-parser.html): Parses the _body_ of the incoming request, converting it to a JS object and attaching it to the `request` object (accessible with `req.body`)
  * [`cookie-parser`](https://expressjs.com/en/resources/middleware/cookie-parser.html): Parses the _cookie_ header, converting it to an object and attaching it to the `request` object (accessible with `req.cookies`)
  * [`morgan`](https://expressjs.com/en/resources/middleware/morgan.html): A _logger_ that logs all requests/responses to the web servers console
* We let our Express know to use the piece of middleware via the `.use` method

```js
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');

// let Express know to use the middleware
app.use(bodyParser.urlEncoded({ extended: false }));
app.use(morgan('dev'));
```

### Custom Middleware
* We aren't limited to using middleware that someone else has written, we can freely create our own
* To define custom middleware, we pass a callback function to the `.use` method
* The callback function is passed the `request` and `response` objects as well as a special function `next` which our custom middleware will call to indicate that the middleware has finished running

```js
app.use((req, res, next) => {
  // do something with the request and/or response objects
  console.log(`New request: ${req.method} ${req.url}`);

  // call the next step in the middleware chain
  next();
});
```

### Template Engines and EJS
* From [the Express Docs](https://expressjs.com/en/guide/using-template-engines.html):
> A template engine enables you to use static template files in your application. At runtime, the template engine replaces variables in a template file with actual values, and transforms the template into an HTML file sent to the client.
* We tell Express which _template engine_ to use with the `.set` method
* Note: Express refers to the _template engine_ as a _view engine_

```js
app.set('view engine', 'ejs');
```

* By default, Express will look in a `views` directory for our templates
* We specify which template to render using the `.render` method on the `response` object
* The convention is to put all variables into an object called `templateVars` that will then get passed to the template

```js
const templateVars = {
  some: 'data to pass to the template',
  any: 'valid JavaScript values can be passed'
};

response.render('template-name', templateVars);
```

* EJS templates always end in `.ejs`
* Inside the template, we use special tags to indicate where we want values to be used

```ejs
<h1><%= message %><h1>
```

### Useful Links
- [MDN: What is a web server?](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_web_server)
- [Node Docs: http module](https://nodejs.org/api/http.html)
- [ExpressJS](https://expressjs.com/)
- [Popular Express Middleware](https://expressjs.com/en/resources/middleware.html)
- [Writing Custom Middleware](https://expressjs.com/en/guide/writing-middleware.html)
- [EJS](https://ejs.co/)
- [Using Template Engines with Express](https://expressjs.com/en/guide/using-template-engines.html)
