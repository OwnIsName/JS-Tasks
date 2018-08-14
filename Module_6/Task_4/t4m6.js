console.log("t4m6")

/*
  Добавьте к классу Car из предыдущего задания статический
  метод getSpecs, который получает объект-машину как аргумент
  и выводит в консоль значения полей maxSpeed, running и distance.
  
  Использование будет выглядеть следующим образом:
  
  const someCar = new Car(100);
  someCar.turnOn();
  someCar.drive(2);
  
  Car.getSpecs(someCar); // maxSpeed: 100, running: true, distance: 200
*/

class Car {
  constructor(maxSpeed) {
    this.speed = 0;
    this.maxSpeed = maxSpeed;
    this.isWorking = false;
    this.distance = 0;
  }

  static getSpecs(car) {
    console.log(`
      maxSpeed: ${car.maxSpeed} km/h, 
      running: ${car.isWorking? 'wroom': false} , 
      distance: ${car.distance} km
      `)
  }

  turnOn() {
    this.isWorking = true;
  }

  turnOff() {
    this.isWorking = false;
  }
  
  accelerate(spd) {
    this.isWorking && spd < this.maxSpeed? this.speed = spd : null;
  }
  
  decelerate(spd) {
    this.isWorking && spd < this.speed && spd > 0 ? this.speed = spd : null;
  }

  drive(hours) {
    this.isWorking ? this.distance = this.speed * hours: null;
  }

}

let car1 = new Car(220);
console.log(car1)

car1.turnOn();
console.log(car1)

car1.turnOff();
console.log(car1)

car1.turnOn();
console.log(car1)

car1.accelerate(100);
console.log(car1)

car1.decelerate(10);
console.log(car1)

car1.drive(2.8);
console.log(car1)


Car.getSpecs(car1)