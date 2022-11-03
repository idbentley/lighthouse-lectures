const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
// session-cookie is in the homework
// session-cookie is both encrypted and signed
const bodyParser = require('body-parser');

const booksRouter = require('./routes/bookRoutes');

const PORT = 9876;

const app = express();

app.set('view engine', 'ejs');

// => [express] -> bodyParser -> .. -> routes

app.use(morgan('dev'));
app.use(cookieParser("some long secret key"));
app.use(bodyParser.urlencoded({ extended: true }));

/* FAKE DATABASE */
const users = {
    123: {
        id: '123',
        name: 'Louie Louie',
        email: 'louie@louie.com',
        password: 'abcd'
    },
    234: {
        id: '234',
        name: 'Cat Dog',
        email: 'catdog@hungry.com',
        password: 'meow'
    }
}

function findUserById(id) {
    return users[id];
}

function findUserByEmailAndPassword(email, password) {
    for (const userId in users) {
        const user = users[userId];
        if (user.email === email && user.password === password) {
            return user;
        }
    }
    return null;
}

app.get('/', (req, res) => {
    let user;
    if (req.signedCookies.user_id) {
        user = findUserById(req.signedCookies.user_id);
    }
    res.render('home', {user: user});
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    console.log('credentials', email, password);
    if (!email || !password) {
        return res.status(400).send('email and password cannot be blank');
    }
    const user = findUserByEmailAndPassword(email, password);
    console.log('user', user)
    if (!user) {
        return res.status(400).send("a user with that email and password doesn't exist.");
    }
    res.cookie('user_id', user.id, { signed: true });
    res.redirect('/');
});

app.post('/logout', (req, res) => {
    res.clearCookie('user');
    res.redirect('/');
});

app.use('/books', booksRouter)
app.listen(PORT);