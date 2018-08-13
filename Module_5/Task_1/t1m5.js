console.log("t1m5")
console.log("-===-===-===-===-===-===-===    t1m5    -===-===-===-===-===-===-===-===-===-===")

/*  Перепишите все циклы for используя методы map, filter, find, reduce и т. д. */

/* 
  Функция findGreaterThan получает два аргумента - число и массив.
  Возвращает новый массив, содержащий элементы которые больше числа.
*/
const findGreaterThan = (num, arr) => {
  const result = arr.filter(number => number > num)
  return result;
};

console.log( findGreaterThan(2, [1, 2, 3, 4, 5]) ); // [3, 4, 5,]
console.log( findGreaterThan(3, [1, 2, 3, 4, 5]) ); // [4, 5,]
console.log( findGreaterThan(1, [1, 2, 3, 4, 5]) ); // [2, 3, 4, 5,]

console.log("-===-===-===-===-===-===-===-===-===-===-===-===-===-===-===-===-===-===")
/* 
  Функция multiplyBy принимает два аргумента - число и массив. 
  Возвращает массив все значения которого умножены на число.
*/
const multiplyBy = (num, arr) => {
  let result = arr.map( number => number * num)

  return result;
};

console.log( multiplyBy(2, [1, 2, 3, 4, 5]) ); // [2, 4, 6, 8, 10]
console.log( multiplyBy(3, [1, 2, 3, 4, 5]) ); // [3, 6, 9, 12, 15]
console.log( multiplyBy(4, [1, 2, 3, 4, 5]) ); // [4, 8, 12, 16, 20]
console.log("-===-===-===-===-===-===-===-===-===-===-===-===-===-===-===-===-===-===")

/* 
  Функция summAllNumbers принимает любое число аргументов.
  Возвращает число - сумму всех аргументов.
*/
function summAllNumbers(...args) {
	console.log(args)
  let argsSumm = args.reduce((accum, item) => accum + item,0);
  return argsSumm;
}

console.log( summAllNumbers(1, 2, 3) ); // 6
console.log( summAllNumbers(1, 2, 3, 4) ); // 10
console.log( summAllNumbers(1, 2, 3, 4, 5) ); // 15
console.log("-===-===-===-===-===-===-===-===-===-===-===-===-===-===-===-===-===-===")

/* 
  Функция findEvery получает два аргумента - число и массив.
  Возвращает true если все элементы массива больше или равны числу.
  Иначе если есть хоть один элемент меньше числа, то возвращается false.
*/

const findEvery = (num, arr) => arr.every(number => num <= number);

console.log( findEvery(5, [6, 9, 7, 8, 4]) ); // false
console.log( findEvery(6, [5, 6, 7, 8, 9]) ); // false
console.log( findEvery(4, [5, 6, 7, 8, 9]) ); // true
``	
console.log("-===-===-===-===-===-===-===-===-===-===-===-===-===-===-===-===-===-===")