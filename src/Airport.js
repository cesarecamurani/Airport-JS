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
  if(this.isStormy()) {
    throw new Error('cannot takeoff during storm')
  }
  this.hangar = [];
};

Airport.prototype.isStormy = function () {
  return false
};
