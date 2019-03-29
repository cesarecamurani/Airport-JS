class Plane {

  constructor() {
    this.flyingStatus = true
  }

  land() {
    this.flyingStatus = false
  };

  takeOff() {
    this.flyingStatus = true
  };

};
export default Plane
