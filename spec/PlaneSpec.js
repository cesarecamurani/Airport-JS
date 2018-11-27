describe('Plane', function () {

  var airport;
  var plane;

  beforeEach(function() {
    airport = jasmine.createSpyObj('airport',['clearForLanding']);
    plane = new Plane();
  });

  describe('land', function() {

    it('can land at an airport', function(){
      plane.land(airport)
      expect(airport.clearForLanding).toHaveBeenCalledWith(plane)
    });

  });

});
