function Guest (name, room) {
  this.name = name;
  this.room = room;
}

const guest1 = new Guest("sergei", 1)
const guest2 = new Guest("viktor", 2)
console.log(Guest.prototype)
console.log(guest1)
console.log(guest2)
console.log("========================================================")

Guest.prototype.showGuestInfo = function () {
  console.log(`name: ${this.name}, room: ${this.room}`);
};

guest1.showGuestInfo();


