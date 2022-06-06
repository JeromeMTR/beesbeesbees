var Bee = function() {
  // THIS = Object.create(Grub.prototype);
  Grub.call(this); // in the background line 2 and line 7 is happening
  this.age = 5;
  this.color = 'yellow';
  this.job = 'keep on growing';
  // Return this;
};

Bee.prototype = Object.create(Grub.prototype);
Bee.prototype.constructor = Bee;
Bee.prototype.eat = function() {

};