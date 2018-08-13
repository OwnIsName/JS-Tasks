console.log("t5m5")

/*      
  Напишите функцию setGuestState(guests, period), где
  guests - массив гостей, period - кол-во дней после
  которого считается что гость не активен.
    
  Если значение поля inactiveDays болше чем period, 
  поставить для isActive значение false.
    
  Если же значение inactiveDays меньше чем period,
  поставить для isActive значение true
  
  PS: обязательно используйте функциональные методы массивов, никаких for!
*/
/*const users = [
  { name: 'Mango', inactiveDays: 8, isActive: false },
  { name: 'Poly', inactiveDays: 15, isActive: false },
  { name: 'Ajax', inactiveDays: 32, isActive: false },
  { name: 'Chelsey', inactiveDays: 85, isActive: false }
];

const setGuestState = function (arr, period){
  const result = arr.map( guest => {
    guest.inactiveDays > period ? guest.isActive = false: guest.isActive = true;     
    return guest;
  });

  return result;
};

// Вызовы функции для проверки
console.log(setGuestState(users, 10));

// Объекты Mango, Ajax, Chelsey получат isActive false, а Poly наоборот true
console.log(setGuestState(users, 20));

// Объекты Ajax, Chelsey получат isActive false, а Mango и Poly наоборот true
console.log(setGuestState(users, 35)); 
console.log(users, 35)
// Объект Chelsey получит isActive false, а Mango, Poly и Ajax наоборот true
*/

/*      
  Напишите функцию getGuestsOlderThan(guests, age), где 
  guests - массив объектов гостей, age - предел возраста 
  для сортировки. 
  
  Функция возвращает массив объектов значение свойства 
  age которых больше чем параметр age.
  
  PS: обязательно используйте функциональные методы массивов, никаких for!
*/

const guests = [
  { name: "Mango", age: 20, isActive: true },
  { name: "Poly", age: 18, isActive: false },
  { name: "Ajax", age: 30, isActive: true },
  { name: "Chelsey", age: 45, isActive: false }
];

const getGuestsOlderThan = (guests, age) => {
  return guests.filter(guest => guest.age > age)
};

// Вызовы функции для проверки
console.log(getGuestsOlderThan(guests, 25)); // массив из 2-х объектов Ajax и Chelsey

console.log(getGuestsOlderThan(guests, 35)); // [{name: 'Chelsey', age: 45, isActive: false}]

console.log(getGuestsOlderThan(guests, 55)); // []
