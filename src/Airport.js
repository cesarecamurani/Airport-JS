function Airport() {
  this.hangar = [];
};

Airport.prototype.capacity = function() {
  this.capacity = 10;
};

Airport.prototype.land = function(plane) {
  this.hangar.push(plane)
};

Airport.prototype.takeoff = function(plane) {
  var pos = this.hangar.indexOf(plane);
  this.hangar.splice(pos, 1);
};
