const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const pageText = require('./data/languages.json');

const app = express();
const port = 4545;
const DEFAULT_LANGUAGE = "fr";

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.set('view engine', 'ejs');

app.listen(port, () => console.log(`Express listening on port ${port}`));

app.get('/home/:language_code?', (req, res) => {

  console.log('req.cookies', req.cookies);

  const selectedLanguage = req.params.language_code || req.cookies.language || DEFAULT_LANGUAGE;
  console.log('selected', selectedLanguage);
  const templateVars = {
    head: pageText.homeHeaders[selectedLanguage],
    body: pageText.homeBodies[selectedLanguage]
  };

  res.render('home', templateVars);
})

app.get('/about', (req, res) => {
  const selectedLanguage = req.cookies.language || DEFAULT_LANGUAGE;
  const templateVars = {
    head: pageText.aboutHeaders[selectedLanguage],
    body: pageText.aboutBodies[selectedLanguage]
  };

  res.render('about', templateVars);
});

app.post('/languages', (req, res) => {
  console.log('form body: ', req.body);
  const languageCode = req.body.language_code;

  res.cookie('language', languageCode);
  res.redirect('/home')

})


