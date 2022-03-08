# HTTP Cookies, User Authentication, Sessions

## Resources
- Lecture Recording: https://vimeo.com/686028184/dbc6fda5c1
- Code:  https://github.com/idbentley/lighthouse-lectures/tree/main/flex-w7d1-full-w3d3-user-session
- Slides (in this repo)

## Objectives 
- [X] HTTP and cookies
- [X] Setting a cookie to change language preferences
- [X] User registration and authentication

### HTTP and Cookies
- **HTTP** is a stateless protocol which means that the participants are not required to remember any previous communication
- **Cookies**:
  - Allow us to store information about a user between HTTP requests
  - Stored as key/value pairs in the client's browser
  - Are passed to the server with every HTTP request by the browser
  - Usually used to store a unique value that identifies a particular user

### Reading Cookies
- Cookies come in with the request
- We could parse the request header ourselves, but it's easier to use a library like `cookie-parser`
- `cookie-parser` will parse the cookies and add them to the `request` object

```js
app.get('/protected', (req, res) => {
  const userId = req.cookies.userId;
  // do something with the userId
});
```

### Setting Cookies
- Cookies are set on the `response` object
- The browser will receive the reponse and store the cookie as directed

```js
app.post('/login', (req, res) => {
  // other authenticatey stuff
  res.cookie('userId', user.id); // set the cookie's key and value
  res.redirect('/');
});
```

### Useful Links
* [Restrictions on Cookies](https://flaviocopes.com/cookies/#restrictions-of-cookies)
* [cookie-parser](https://www.npmjs.com/package/cookie-parser)