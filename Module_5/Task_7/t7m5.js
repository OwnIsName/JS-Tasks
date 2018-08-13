console.log("t7m5")

/*
  Используя метод reduce, посчитайте сумму 
  всех значений свойств объекта order.
*/ 
const order = {
  bread: 10,
  apples: 25,
  chicken: 60,
  milk: 15,
  cheese: 40
};

const orderSumm = obj => Object.values(obj).reduce((accum, item) => accum += item, 0);

console.log(orderSumm(order)); // 150
