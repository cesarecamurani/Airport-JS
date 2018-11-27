function Airport() {
  this.hangar = [];
};

// Airport.prototype.capacity = function() {
//   this.capacity = 10;
// };

Airport.prototype.clearForLanding = function(plane) {
  this.hangar.push(plane)
};

Airport.prototype.clearForTakeOff = function(plane) {
  this.hangar = [];
  // var pos = this.hangar.indexOf(plane);
  // this.hangar.splice(pos, 1);
};
