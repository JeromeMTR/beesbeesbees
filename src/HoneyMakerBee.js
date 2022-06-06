var HoneyMakerBee = function() {

  Bee.call(this);
  this.age = 10;
  this.job = 'make honey';
  this.honeyPot = 0;

};
// points to Bee & Grub methods
HoneyMakerBee.prototype = Object.create(Bee.prototype);
// points back to the constructor
HoneyMakerBee.prototype.constructor = HoneyMakerBee;

// creaate HoneyMakerBee Methods
HoneyMakerBee.prototype.makeHoney = function() {
  this.honeyPot++;
};

HoneyMakerBee.prototype.giveHoney = function() {
  this.honeyPot--;
};