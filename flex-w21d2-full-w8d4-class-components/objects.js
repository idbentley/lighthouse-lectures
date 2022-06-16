class Vehicle {
    constructor(topSpeed, position) {
        this.topSpeed = topSpeed;
        this.position = position;
    }
    locomote(velocity, duration) {
        if(Math.abs(velocity) > this.topSpeed) {
            throw Error ("Can't Locomote that fast!");
        }
        this.position += velocity * duration;
    }
}

class Car extends Vehicle { 
    constructor(topSpeed, position, fuelEfficiency, fuelLevel) {
        super(topSpeed, position);
        // this.model = model;
        // this.make = make;
        this.fuelEfficiency = fuelEfficiency;
        this.fuelLevel = fuelLevel;
    }
    locomote(speed, duration, direction) {
        const v = speed * direction;
        super.locomote(v, duration);
        this.fuelLevel -= duration * this.fuelEfficiency;

    }

}

class Train extends Vehicle {
    constructor(topSpeed, position, direction) {
        super(topSpeed, position);
        this.direction = direction
    }
    locomote(speed, duration) {
        const v = speed * this.direction;
        super.locomote(v, duration);
    }
}


const car = new Car(100, 5, 10, 20);
const train = new Train(150, 1, -1);

console.log(car.position, car.fuelLevel);
car.locomote(50, 1, -1);
console.log(car.position, car.fuelLevel);

console.log(train.position);
train.locomote(150, 3);
console.log(train.position);

const moveTrainFunction = train.locomote;
moveTrainFunction.bind(train)(10, 10);

// const car = {
//     model: "Camry",
//     make: "Toyota",
//     fuelEfficiency: 10,
//     drive: function(miles){ 

//     }
// }

// const otherCar = {
//     model: "Tacoma",
//     make: "Totota"
// }