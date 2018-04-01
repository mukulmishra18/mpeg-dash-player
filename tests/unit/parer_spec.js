import Parser from '../../parser/parser.js';

describe('Parser', () => {
  it('should create a new Parser class', (done) => {
    let mpdUrl = 'https://bitmovin-a.akamaihd.net/content/art-of-motion_drm/mpds/11331.mpd';
    let parser = new Parser(mpdUrl);

    // Before parsing the MPD file properties of Parser class should be undefined.
    expect(typeof parser).toEqual('object');
    expect(parser.Id === undefined).toEqual(true);
    expect(parser.baseUrl === undefined).toEqual(true);
    expect(parser.numberOfChunks === undefined).toEqual(true);
    expect(parser.mimeType === undefined).toEqual(true);
    expect(parser.codecs === undefined).toEqual(true);

    parser.parse().then(() => {
      expect(typeof parser).toEqual('object');
      expect(parser.Id !== undefined).toEqual(true);
      expect(parser.baseUrl !== undefined).toEqual(true);
      expect(parser.numberOfChunks !== undefined).toEqual(true);
      expect(parser.mimeType !== undefined).toEqual(true);
      expect(parser.codecs !== undefined).toEqual(true);
      done();
    });
  });
});
