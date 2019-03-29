import janus6 from 'janus6'
import { verify } from 'janus6'
import Airport from '../src/Airport'
import Plane from '../src/Plane'

let airport = new Airport()
let plane = new Plane()

janus6.group('Airport', () => {
  janus6.group('method: clearForLanding', () => {
    janus6.check('adds a plane to the hangar', () => {
      airport.clearForLanding(plane)
      verify.contains(airport.hangar, plane);
    });
  });
  janus6.group('method: clearForLanding', () => {
    janus6.check('adds a plane to the hangar', () => {
      airport.clearForTakeOff(plane)
      airport.clearForLanding(plane)
      verify.isTrue(verify.contains(airport.hangar, plane));
    });
  });
  janus6.group('method: clearForTakeOff', () => {
    janus6.check('removes a plane from the hangar', () => {
      airport.clearForTakeOff(plane)
      verify.notContains(airport.hangar, plane);
    });
  });
});
