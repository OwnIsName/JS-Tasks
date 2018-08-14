console.log("t1m6")

/*
  Создать функцию-конструктор Account, которая добавляет будущему
  объекту поля login, email и friendsCount. 
  
  В prototype функции-конструктора добавить метод getAccountInfo(), 
  который выводит в консоль значения полей login, email и friendsCount. 
  
  Обратите внимание, метод будет всего один, в поле prototype функции-конструктора, 
  а использовать его смогут все экземпляры, по ссылке.
  
  Создать несколько экземпляров с разными значениями свойств, вывести их в консоль.
*/

const Account = function(login, email, friendsCount){
  this.login = login;
  this.email = email;
  this.friendsCount = friendsCount;
}
Account.prototype.getAccountInfo = function(){
  console.log(`Login: ${this.login}\nEmail: ${this.email}\nFriends: ${this.friendsCount}`)
}

const mango = new Account("mango", "mango@mail.com", 16);
mango.getAccountInfo();
console.log(mango);