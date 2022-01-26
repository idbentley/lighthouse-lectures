const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');

const app = express();
const port = 4545;

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.set('view engine', 'ejs');

app.listen(port, () => console.log(`Express listening on port ${port}`));

/* MOCK DATABASE */
const users = {
  123: {
    id: '123',
    name: "Louie Louie",
    email: 'louie@louie.com',
    password: 'abcd'
  },
  234: {
    id: '234',
    name: "Cat Dog",
    email: 'catdog@hungry.com',
    password: 'meow'
  }
}

const findUserByEmail = (email) => {
  for(const userId in users) {
    const user = users[userId];
    if(user.email === email) {
      return user;
    }
  }
  return null;
}

/* ROUTES */

app.get('/home', (req, res) => {
  console.log('cookies: ', req.cookies);
  res.render('home', {cookies: req.cookies});
});


app.get('/login', (req, res) => {
  res.render('login');
});

app.post('/login', (req, res) => {
  console.log('req.body', req.body);
  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {
    return res.status(400).send("email and password cannot be blank");
  }

  const user = findUserByEmail(email);
  console.log('user', user);
  
  if(!user){
    return res.status(400).send("a user with that email does not exist");
  }

  if(user.password !== password) {
    return res.status(400).send('password does not match');
  }

  res.cookie('user', {id: user.id, name: user.name});
  res.redirect('/home');
});

app.post('/logout', (req, res) => {
  res.clearCookie('user');
  res.redirect('/login');
});

app.get('/protected', (req, res) => {
  const user = req.cookies.user;

  if(!user) {
    return res.status(401).send("Unauthorized");
  }

  const database_user = users[user.id];

  if(!database_user) {
    return res.status(401).send("Invalid Cookie");
  }

  res.render('protected');
});