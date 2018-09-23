import AudioController from '../../controllers/video_controller.js';

describe('AudioController', () => {
  let baseUrl = 'http://example.com/path/to/audio/';
  let numberOfChunk = 25;
  let audioController = new AudioController(baseUrl, numberOfChunk);

  it('should create a new instance of audio controller', () => {
    expect(typeof audioController).toEqual('object');
    expect(typeof audioController.onMediaSourceOpen).toEqual('function');
    expect(mediaSource.activeSourceBuffers.length === 0).toEqual(true);
    expect(mediaSource.sourceBuffers[0] === undefined).toEqual(true);
    expect(audioController instanceof AudioController).toEqual(true);
  });

  it('should apppend buffer in provided mediasource', (done) => {
    let mediaSource = new MediaSource();

    mediaSource.addEventListener('sourceopen', () => {
      audioController.onMediaSourceOpen(mediaSource).then(() => {
        expect(mediaSource.activeSourceBuffers.length !== 0).toEqual(true);
        expect(mediaSource.sourceBuffers[0] !== undefined).toEqual(true);
        expect(mediaSource.sourceBuffers[0].timestampOffset !== 0).toEqual(true);
        done();
      }).catch((error) => {
        done.fail(error);
      });
    });
  });
});
