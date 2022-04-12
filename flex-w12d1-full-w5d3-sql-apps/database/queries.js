const { client } = require('./connection');

function getAllAlbums() {
    return client.query("SELECT * FROM albums;").then(r => r.rows);
    // .then( (results) => {return results.rows});
}

function getAlbumByName(album_name) {
    return client.query("SELECT * FROM albums WHERE album_name = $1", [album_name]);
}

function createNewAlbum(album) {
    return client.query(
    "INSERT INTO albums (album_name, artist_name, release_date, genre) VALUES ($1, $2, $3, $4)", 
    [album.album_name, album.artist_name, album.release_date, album.genre]);
}

function deleteAlbum(album_id) {
    return client.query("DELETE FROM albums WHERE albums.id = $1", [album_id]);
}

module.exports = {
    getAllAlbums,
    createNewAlbum,
    deleteAlbum
}