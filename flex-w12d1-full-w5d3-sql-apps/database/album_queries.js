
const client = require('./connection');

const getAllAlbums = () => {
  return client.query("SELECT * FROM albums;")
    .then((results) => {
      console.log('results', results);
      return results.rows;
    });
    // .then( (results) => {return results.rows});

};

const getAlbumById = (id) => {
  return client.query("SELECT * FROM albums WHERE id = $1;", [id])
    .then((results) => {
      return results.rows[0];
    });
};

const deleteAlbum = (id) => {
  return client.query("DELETE FROM albums WHERE id = $1;", [id]);
}

module.exports = {
  getAllAlbums,
  getAlbumById,
  deleteAlbum
}