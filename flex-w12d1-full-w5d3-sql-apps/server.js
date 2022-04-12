const { getAllAlbums, createNewAlbum, deleteAlbum } = require('./database/queries');

const express = require('express');
const morgan = require('morgan');
const PORT = 5000;

const app = express();

app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));

app.get('/albums', (req, res) => {
    getAllAlbums().then( albums => {
        res.render('albums', {albums});
        // res.render('albums', {albums: albums});
    });
});

app.post('/albums', (req, res) => {
    // if (req.body.artist_name.length === 0) {
    //     res.render('albums');
    // }
    createNewAlbum(req.body).then( response => {
        console.log(response);
        res.redirect('/albums');
    });
})

app.post('/albums/:album_id/delete', (req, res) => {
    const albumId = req.params.album_id;
    deleteAlbum(albumId).then(response => {
        console.log('response', response);
        res.redirect('/albums');
    });
});

app.listen(PORT, () => {
    console.log(`The server is listening on port ${PORT}`);
  });