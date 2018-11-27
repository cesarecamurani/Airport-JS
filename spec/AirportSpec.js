describe('Airport', function () {

  var plane;
  var airport;

  beforeEach(function() {
    airport = new Airport();
    plane = jasmine.createSpy('plane',['land']);
  });

  it('has no planes by default', function() {
    expect(airport.hangar).toEqual([]);
  });

  it('can checks if the weather is stormy', function() {
    expect(airport.isStormy()).toBeFalsy();
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

  describe('under stormy conditions', function () {
    it('does not clear planes for takeoff', function () {
      spyOn(airport, 'isStormy').and.returnValue(true);
      expect(function() { airport.clearForTakeOff(plane); }).toThrowError('cannot takeoff during storm');
    });
  });


});
