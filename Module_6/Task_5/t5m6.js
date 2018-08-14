console.log("t5m6")

/*
  Добавьте классу Car свойство value - цена автомобиля.
  
  Добавьте классу Car использование геттеров и сеттеров для свойства value.
  
  Геттер вернет текущей значение поля this._value
  Сеттер запишет в поле this._value то что ему присвоят
  
  PS: имя геттера и сеттера не может совпадать с полем, поэтому используйте
    не this.value а this._value
    
  Использование выглядит следующим образом:
  
  const myCar = new Car(50, 2000);
  
  myCar.value; // 2000
  myCar.value = 4000;
  myCar.value; // 4000
*/



class Car {
  constructor(maxSpeed, value) {
    this.speed = 0;
    this.maxSpeed = maxSpeed;
    this.isWorking = false;
    this.distance = 0;
    this._value = value;

  }

  get value(){
    return console.log(this._value);
  }

  set value(price){
    return this._value = price;
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

let car1 = new Car(220, 12000);
console.log(car1);

car1.turnOn();
console.log(car1);

car1.turnOff();
console.log(car1);

car1.turnOn();
console.log(car1);

car1.accelerate(100);
console.log(car1);

car1.decelerate(10);
console.log(car1);

car1.drive(2.8);
console.log(car1);

Car.getSpecs(car1); //task 4

car1.value = 15000; //task 5

car1.value;         //task 5