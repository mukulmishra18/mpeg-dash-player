import VideoController from '../../controllers/video_controller.js';

describe('VideoController', () => {
  let baseUrl = 'http://example.com/path/to/video/';
  let numberOfChunk = 25;
  let videoController = new VideoController(baseUrl, numberOfChunk);

  it('should create a new instance of video controller', () => {
    expect(typeof videoController).toEqual('object');
    expect(typeof videoController.onMediaSourceOpen).toEqual('function');
    expect(mediaSource.activeSourceBuffers.length === 0).toEqual(true);
    expect(mediaSource.sourceBuffers[0] === undefined).toEqual(true);
    expect(videoController instanceof VideoController).toEqual(true);
  });

  it('should apppend buffer in provided mediasource', (done) => {
    let mediaSource = new MediaSource();

    mediaSource.addEventListener('sourceopen', () => {
      videoController.onMediaSourceOpen(mediaSource).then(() => {
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
