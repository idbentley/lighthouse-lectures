const express = require('express');
const morgan = require('morgan');
const PORT = 5000;

const cars = {
  5: {
    id: 5,
    color: 'red',
    make: 'Toyota',
    model: 'Tacoma',
    year: 2005
  },
  10: {
    id: 10,
    color: 'purple',
    make: 'Ford',
    model: 'F-150',
    year: 2010
  }
};

const nextId = () => {
  const keys = Object.keys(cars);
  console.log(keys);
  return Number(keys[keys.length-1]) + 1;
};

const app = express();

app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));

// Browse: GET /cars
app.get('/cars', (req, res) => {
  const templateVars = {
    cars: cars
  }
  res.render('cars', templateVars);
});


// Read: GET /cars/some-id

app.get('/cars/:car_id', (req, res) => {
  const carId = req.params.car_id;
  const car = cars[carId];

  if(!car) {
    return res.redirect('/cars')
  }
  const templateVars = {
    car: car
  };

  res.render('car', templateVars)

});

// Edit POST /cars/:car_id
app.post('/cars/:car_id', (req, res) => {
  const carId = req.params.car_id;
  const newColor = req.body.color;
  cars[carId].color = newColor;
  res.redirect('/cars');
});

// Add POST /cars
app.post('/cars', (req, res) => {
  const id = nextId();
  const newCar = {
    id: id,
    color: req.body.color,
    make: req.body.make,
    model: req.body.model,
    year: req.body.year
  }
  cars[id] = newCar;

  res.redirect('/cars')
});

// Delete POST /cars/:car-id/delete
app.post('/cars/:car_id/delete', (req, res) => {
  const carId = req.params.car_id;
  delete cars[carId];
  res.redirect("/cars");
})

app.listen(PORT, () => {
  console.log(`The server is listening on port ${PORT}`);
});