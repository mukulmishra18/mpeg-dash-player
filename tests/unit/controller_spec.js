import Controller from '../../controllers/controller.js';

describe('Controller', () => {
  // Create a fake parser class for this test.
  class fakeParser {
    constructor() {
      this._baseUrl = 'http://example.com/path/to/video/';
      this._numberOfChunk = 25;
    }

    get baseUrl() {
      return this._baseUrl;
    }

    get numberOfChunk() {
      return this._numberOfChunk;
    }
  }

  let parser = new fakeParser();
  let mediaSource = new MediaSource();
  let controller = new Controller(mediaSource, parser);

  it('should create a new controller', () => {
    expect(typeof controller).toEqual('object');
    expect(typeof controller._audioController).toEqual('object');
    expect(typeof controller._videoController).toEqual('object');
  });
});
