class Plane {

  constructor() {}

  land(airport) {
    airport.clearForLanding(this);
    this._location = airport;
  };

  takeoff(airport) {
    this._location.clearForTakeOff();
  };

};
export default Plane
