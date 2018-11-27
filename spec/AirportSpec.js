describe('Airport', function () {

  var plane;
  var airport;

  beforeEach(function() {
    airport = new Airport();
    plane = jasmine.createSpy('plane',['land']);
  });

  it('has no planes by default', function(){
    expect(airport.hangar).toEqual([]);
  });

  describe('clearForLanding', function() {
    it('makes a plane landing', function() {
      airport.clearForLanding(plane);
      expect(airport.hangar).toContain(plane);
    });
  });

  describe('takeoff', function() {
    it('makes a plane take-off', function() {
      airport.clearForLanding(plane)
      airport.clearForTakeOff(plane)
      expect(airport.hangar).not.toContain(plane)
    });
  });

//   describe('is stormy', function () {
//
//     it('checks if the weather is stormy', function() {
//       plane.land(airport)
//       spyOn(airport,'isStormy').and.returnValue(true);
//       expect(function(){ plane.takeoff();}).toThrowError('cannot takeoff during storm');
//       expect(airport.hangar).toContain(plane);
//     });
//
//   });
//
});
