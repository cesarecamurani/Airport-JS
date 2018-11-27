describe('Airport', function () {

  var plane;
  var airport;

  beforeEach(function() {
    airport = new Airport();
    plane = jasmine.createSpy('plane',['land']);
    plane1 = new Plane("Boeing");
    plane2 = new Plane("Airbus");

  });

  it('has no planes by default', function(){
    expect(airport.hangar).toEqual([]);
  });

  describe('land', function() {

    it('makes a plane landing', function() {
      airport.land(plane1)
      expect(airport.hangar).toContain(plane1)
    });

  });

  describe('takeoff', function() {

    it('makes a plane take-off', function() {
      airport.land(plane1)
      airport.land(plane2)
      airport.takeoff(plane1)
      expect(airport.hangar).not.toContain(plane1)
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
<<<<<<< HEAD
=======


// As an air traffic controller
// So I can get passengers on the way to their destination
// I want to instruct a plane to take off from an airport and confirm that it is no longer in the airport

// As an air traffic controller
// To ensure safety
// I want to prevent takeoff when weather is stormy
>>>>>>> 379f236d80277455aed3739075bc641a687850ad
