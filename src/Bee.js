var Bee = function() {
  // THIS = Object.create(Grub.prototype);

  Grub.call(this);// in the background line 2 and line 9 is happening
  this.age = 5;
  this.color = 'yellow';
  this.job = 'keep on growing';

  // Return this;
};

// points to Grub methods
Bee.prototype = Object.create(Grub.prototype);

// points back to the constuctor
Bee.prototype.constructor = Bee;

// created bee methods
Bee.prototype.eat = function() {

};