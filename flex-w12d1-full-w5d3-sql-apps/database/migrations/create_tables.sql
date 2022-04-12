DROP TABLE IF EXISTS songs;
DROP TABLE IF EXISTS albums;

CREATE TABLE albums (
  id SERIAL PRIMARY KEY,
  album_name VARCHAR(70),
  artist_name VARCHAR(50),
  release_date DATE, 
  genre VARCHAR(50)
);

-- CREATE TABLE songs (
--   id SERIAL PRIMARY KEY,
--   album_id INT REFERENCES albums(id),
--   track_number SMALLINT,
--   song_name TEXT,
--   rating FLOAT,
--   run_time INTERVAL
-- );
