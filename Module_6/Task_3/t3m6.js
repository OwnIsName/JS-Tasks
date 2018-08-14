console.log("t3m6")

/*
  Создайте класс Car с указанными полями и методами.
*/

class Car {
  constructor(maxSpeed) {
    this.speed = 0;
    this.maxSpeed = maxSpeed;
    this.isWorking = false;
    this.distance = 0;
    /*
      Добавьте свойства:
        - speed - для отслеживания текущей скорости, изначально 0.
        
        - maxSpeed - для хранения максимальной скорости 
        
        - running - для отслеживания заведен ли автомобиль, 
          возможные значения true или false. Изначально false.
          
        - distance - содержит общий киллометраж, изначально с 0
    */
  }

  turnOn() {
    this.isWorking = true;
    // Добавьте код для того чтобы завести автомобиль
    // Просто записывает в свойство running значание true
  }

  turnOff() {
    this.isWorking = false;
    // Добавьте код для того чтобы заглушить автомобиль
    // Просто записывает в свойство running значание false
  }
  
  accelerate(spd) {
    this.isWorking && spd < this.maxSpeed? this.speed = spd : null;
    // Записывает в поле speed полученное значение, при условии что
    // оно не больше чем значение свойства maxSpeed
  }
  
  decelerate(spd) {
    this.isWorking && spd < this.speed && spd > 0 ? this.speed = spd : null;
    // Записывает в поле speed полученное значение, при условии что
    // оно не больше чем значение свойства maxSpeed и не меньше нуля
  }

  drive(hours) {
    this.isWorking ? this.distance = this.speed * hours: null;
    // Добавляет в поле distance киллометраж (hours умноженное на значение поля speed),
    // но только в том случае если машина заведена!
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

car1.accelerate(20);
console.log(car1)

car1.decelerate(10);
console.log(car1)

car1.drive(2);
console.log(car1)