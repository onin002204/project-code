// Stack to simulate the garage
const garage = [];

// Function to park a car (Push operation)
function parkCar(car) {
  garage.push(car); // Add car to the top of the stack
  console.log(`${car} has been parked.`);
}

// Function to retrieve a car (Pop operation)
function retrieveCar() {
  if (garage.length === 0) {
    console.log("Garage is empty. No car can leave.");
  } else {
    const car = garage.pop(); // Remove the last car that was parked
    console.log(`${car} has left the garage.`);
  }
}

// Example usage
parkCar("Car A");
parkCar("Car B");
parkCar("Car C");

console.log("Garage state:", garage); // ["Car A", "Car B", "Car C"]

retrieveCar(); // Car C leaves
retrieveCar(); // Car B leaves
retrieveCar(); // Car A leaves
retrieveCar(); // Garage is empty
