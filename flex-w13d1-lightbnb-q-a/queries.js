const getAllReservations = function (guest_id, limit = 10) {
    const queryString = `
        SELECT
            properties.*,
            reservations.*,
            avg(property_reviews.rating) AS average_rating
        FROM property_reviews
        JOIN reservations ON properties.id = property_reviews.property_id
        JOIN properties ON properties.id = reservations.property_id
        WHERE 
            reservations.guest_id = $1 AND
            reservations.end_date < now()::date
        GROUP BY reservations.id, properties.id
        ORDER BY reservations.start_date
        LIMIT $2;
    `;
    return pool.query(queryString, [guest_id, limit]).then(res => res.rows);
};


app.get('profile', (req, res) => {
    getUserWithEmail(cookies.email).then(userRow => {
        res.render('profile', {user: userRow});
    }).catch(err => {
        res.status(500).send(err);
    });
});

const getUserWithEmail = async function (email) {
    const queryString = `
        SELECT *
        FROM users
        WHERE email = $1;`;
    return client
        .query(queryString, [email.toLowerCase()])
        .then(result => result.rows[0])
};
const getUserWithId = function (id) {
    const queryString = `
        SELECT * FROM users
        WHERE id = $1;`;
    return client.query(queryString, [id]).then(res => res.rows[0]);
};
const addUser = function (user) {
    const queryString = `
        INSERT INTO users 
            (name, password, email)
        VAlUES
            ($1, $2, $3)
        RETURNING *;`
    return client.query(queryString,
        [user.name, user.password, user.email.toLowerCase()])
        .then(res => res.rows[0]);
};
