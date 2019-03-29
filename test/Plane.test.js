import janus6 from 'janus6'
import { verify } from 'janus6'
import Airport from '../src/Airport'
import Plane from '../src/Plane'

let airport = new Airport()
let plane = new Plane()

janus6.group('Plane', () => {
  janus6.group('method: land', () => {
    janus6.check('sets flyingStatus to false', () => {
      plane.land()
      verify.isFalse(plane.flyingStatus);
    });
  });
  janus6.group('method: takeOff', () => {
    janus6.check('adds a plane to the hangar', () => {
      plane.takeOff()
      verify.isTrue(plane.flyingStatus);
    });
  });
});
