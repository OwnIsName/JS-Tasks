console.log("t3m5")

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
const users = [
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

