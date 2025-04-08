const garage = [];

let parkCar = (car) => {
    garage.push(car);
    console.log(`${car} entered the garage`);
}

let retrievedCar = () => {
    if(garage.length === 0){
        console.log(`The garage is empty. No car can leave`);
    }
    else{
        let car = garage.pop();
        console.log(`${car} has left the garage`);
    }
}

parkCar("car1");
parkCar("car2");
parkCar("car3");
parkCar("car4");

console.log(garage);

retrievedCar();
retrievedCar();
retrievedCar();
retrievedCar();
retrievedCar();

