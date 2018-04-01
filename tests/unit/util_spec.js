import createMediaSource from '../../utils/mediasource_util.js';
import createPromiseCapability from '../../utils/promise_util.js';

describe('utils', () => {
  describe('createMediaSource', () => {
    it('should create a new MediaSource extension', () => {
      let mediaSource = createMediaSource();
      expect(mediaSource instanceof window.MediaSource).toEqual(true);
      expect(typeof mediaSource).toEqual('object');
      expect(typeof mediaSource.addSourceBuffer).toEqual('function');
    });
  });

  describe('createPromiseCapability', () => {
    it('should create a Promise Object', () => {
      let capability = createPromiseCapability();
      expect(typeof capability).toEqual('object');
      expect(typeof capability.promise).toEqual('object');
      expect(typeof capability.resolve).toEqual('function');
      expect(typeof capability.reject).toEqual('function');
      expect(capability.promise instanceof window.Promise).toEqual(true);
    });
  });
});
