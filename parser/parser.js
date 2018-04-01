import createPromiseCapability from '../utils/promise_capability.js';

/**
 * @class Parser
 */
export default class Parser {
  /**
   * @construct Parser
   */
  constructor(mpdUrl) {
    this._mdpUrl = mpdUrl;
    this._mainfest;
    this._id;
    this._baseUrl;
    this._numberOfChunks;
    this._mimeType;
    this._codecs;
  }

  /**
   * @return {Integer}
   * Retuns Id of the representation.
   */
  get Id() {
    return this._id;
  }

  /**
   * @return {String}
   * Retuns baseUrl for the segments.
   */
  get baseUrl() {
    return this._baseUrl;
  }

  /**
   * @return {Integer}
   * Retuns number of chunks in the representation.
   */
  get numberOfChunks() {
    return this._numberOfChunks;
  }

  /**
   * @return {String}
   * Retuns mimeType of the representation.
   */
  get mimeType() {
    return this._mimeType;
  }

  /**
   * @return {String}
   * Retuns codecs of the representation.
   */
  get codecs() {
    return this._codecs;
  }

  /**
   * @returns {Promise}.
   * Start parsing on MPD file by dowloading it.
   */
  parse() {
    let mainfestParsedCapability = createPromiseCapability();
    return this._getMPD().then((response) => {
      // Store mainfest file as a Text Document.
      this._mainfest = new TextDecoder('utf-8').decode(xhr.response);
      return this._parseMainfest().then(() => {
        return mainfestParsedCapability.resolve();
      });
    });

    return mainfestParsedCapability.promise;
  }


  /**
   * @return {Promise}
   * Parse mainfest file to extract properties of Parser class.
   */
  _parseMainfest() {
    // Parse the mainfest file and set properties of Parser class.
    let parseMainfestCapability = createPromiseCapability();

    this._id = '720_2400000';
    this._numberOfChunks = 25;
    this._mimeType = 'video/mp4';
    this._codecs = 'avc1.42c00d';
    this._baseUrl = 'https://bitdash-a.akamaihd.net/content/MI201109210084_1/video/720_2400000/dash/'
    parseMainfestCapability.resolve();

    return parseMainfestCapability.promise;
  }

  /**
   * @return {Promise}
   * Request MPD file.
   */
  _getMPD() {
    let xhrCapability = createPromiseCapability();
    var xhr = new XMLHttpRequest();
    xhr.open('GET', this._mdpUrl);
    xhr.responseType = 'arraybuffer';

    xhr.onload = (e) => {
      if (xhr.status != 200) {
        console.warn('Unexpected status code ' + xhr.status + ' for ' + url);
        return false;
      }
      xhrCapability.resolve();
    };
    xhr.send();

    return xhrCapability.promise;
  }
}
