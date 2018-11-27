function Plane (name) {
  this._name = name
};

Plane.prototype.land = function (airport) {
  airport.clearForLanding(this)
};
