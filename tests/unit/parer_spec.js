import Parser from '../../parser/parser.js';

describe('Parser', () => {
  it('should create a new Parser class', (done) => {
    let parser = new Parser();

    expect(typeof parser).toEqual('object');
    expect(parser.Id === undefined).toEqual(true);
    expect(parser.numberOfChunks === undefined).toEqual(true);
    expect(parser.mimeType === undefined).toEqual(true);
    expect(parser.codecs === undefined).toEqual(true);

    parser.parse.then(() => {
      expect(typeof parser).toEqual('object');
      expect(parser.Id !== undefined).toEqual(true);
      expect(parser.numberOfChunks !== undefined).toEqual(true);
      expect(parser.mimeType !== undefined).toEqual(true);
      expect(parser.codecs !== undefined).toEqual(true);
      done();
    });
  });
});
