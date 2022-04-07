# W05D01 - SQL Intro

## Resources

 - Code Repo: https://github.com/idbentley/lighthouse-lectures/tree/main/flex-w11d1-full-w5d1-sql-intro
 - Video Link: https://vimeo.com/696259153/756490c2ec
 - Slides: In the Repo

## Databases

A collection of tables


|  Track Title | Artist | Duration |
| ------------ | ------ | -------- |
|  Always be my Baby | Mariah Carey | 4:18 |
| Children's Story | Slick Rick | 4:02 |

## Database speak
- a row = a record
- a column = a field 


## Communicating with Database


|  Track Title | Artist | Duration |
| ------------ | ------ | -------- |
|  Always be my Baby | Mariah Carey | 4:18 |
| Children's Story | Slick Rick | 4:02 |

## Database speak
- a row = a record
- a column = a field 


## Communicating with Database
- front <=> server <=> database 
- front <=> server <=> database 
- front to server via `http`
- server to database via `postgres`

## RDBMS (relational database management system)
 - for us this week `psql`


## SQL Challenges from lecture

1. List the total number of songs

```sql
SELECT COUNT(*) 
FROM songs;
```

2. List the songs with a rating over 9

```sql
SELECT * 
FROM songs
WHERE rating > 9;
```

3. List all of the albums from before 2010

```sql
SELECT *
FROM albums
WHERE release_date < 'January 1, 2010';
```

4. List the albums from before 2010 and have a genre of "folk"

```sql
SELECT *
FROM albums
WHERE release_date < 'January 1, 2010' AND genre = 'folk';
```

5. List the albums that have genre of "folk" arranged alphabetically by artist and then by release date newest to oldest.

```sql
SELECT *
FROM albums
WHERE genre = 'folk'
ORDER BY artist_name, release_date DESC;
```

6. List all albums to be released.

```sql
SELECT *
FROM albums
WHERE release_date > CURRENT_DATE;

SELECT *
FROM albums
WHERE release_date > NOW();
```

7. List all of the genres, don't repeat any.

```sql
SELECT DISTINCT genre
FROM albums;
```

8. List all of the albums along with their songs.

```sql
SELECT * 
FROM albums
JOIN songs ON albums.id = songs.album_id;

```

9. List all of the albums along with how many songs each album has.

```sql
SELECT album_name, COUNT(songs.id) AS num_songs
FROM albums
JOIN songs ON albums.id = songs.album_id
GROUP BY album_name;

```

10. List all of the albums with more than 10 songs.

```sql
SELECT album_name, COUNT(songs.id) AS num_songs
FROM albums
JOIN songs ON albums.id = songs.album_id
GROUP BY album_name
HAVING COUNT(songs.id) > 10;
```

11. List ALL albums along with their songs
```sql
SELECT * 
FROM albums
LEFT JOIN songs ON albums.id = songs.album_id;
```

12. List albums along with their average song rating.
```sql
SELECT album_name, artist_name, ROUND(AVG(rating) * 10 ) / 10 AS average_rating
FROM albums
JOIN songs ON albums.id = songs.album_id
GROUP BY album_name, artist_name;
```

13. List albums and songs with ratings higher than their albums average.
```sql
SELECT 
  album_name, 
  artist_name, 
  rating,
  (SELECT AVG(rating) FROM songs WHERE songs.album_id = albums.id) AS album_average
FROM albums
JOIN songs ON albums.id = songs.album_id
WHERE rating > (SELECT AVG(rating) FROM songs WHERE songs.album_id = albums.id);

```

### Useful Links
- [Top 10 Most Popular RDBMSs](https://www.c-sharpcorner.com/article/what-are-the-most-popular-relational-databases/)
- [Another Ranking of DBMSs](https://db-engines.com/en/ranking)
- [SELECT Queries Order of Execution](https://sqlbolt.com/lesson/select_queries_order_of_execution)
- [SQL Joins Visualizer](https://sql-joins.leopard.in.ua/)
- [Why learn Relational Algebra](https://dba.stackexchange.com/questions/111487/what-are-the-practical-reasons-behind-learning-relational-algebra)