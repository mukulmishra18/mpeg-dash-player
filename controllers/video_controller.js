import createPromiseCapability from '../utils/promise_util.js';

/**
 * @class VideoController
 */
export default class VideoController {
  /**
   * @contructs VideoController
   */
  constructor(baseUrl, numberOfChunks) {
    this._baseUrl = baseUrl;
    this._initUrl = this._baseUrl + 'init.mp4';
    this._templateUrl = this._baseUrl + 'segment_$Number$.m4s';
    this._numberOfChunks = numberOfChunks;
    this._index = 0;
  }

  /**
   * @return {Promise}
   * @params {MediaSource} mediaSource - Instance of MediaSource extension.
   */
  onMediaSourceOpen(mediaSource) {
    this._sourceBuffer = mediaSource.addSourceBuffer('video/mp4; codecs="avc1.4d401f"');
    this._sourceBuffer.addEventListener('updateend', this._nextSegment.bind(this));
    return this._getChunk(this._initUrl).then((chunk) => {
      return this._appendToBuffer(chunk);
    });
  }

  /**
   * @return {Promise}
   * Append ArrayBuffer chunk in sourceBuffer.
   */
  _appendToBuffer(chunk) {
    let appendCapability = createPromiseCapability();
    if (chunk) {
      this._sourceBuffer.appendBuffer(new Uint8Array(chunk));
      appendCapability.resolve();
    }
    return appendCapability.promise;
  }

  /**
   * Handle requesting of next media segment, based on index value.
   */
  _nextSegment() {
    let url = this._templateUrl.replace('$Number$', this._index);
    this._getChunk(url).then((chunk) => {
      this._index++;
      if (this._index > this._numberOfChunks) {
        this._sourceBuffer.removeEventListener('updateend', this._nextSegment.bind(this));
      }

      return this._appendToBuffer(chunk);
    });
  }

  /**
   * @return {Promise}
   * Request a new media chunk using XHR.
   */
  _getChunk(url) {
    let xhrCapability = createPromiseCapability();
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.responseType = 'arraybuffer';

    xhr.onload = (e) => {
      if (xhr.status != 200) {
        console.warn('Unexpected status code ' + xhr.status + ' for ' + url);
        return false;
      }
      xhrCapability.resolve(xhr.response);
    };
    xhr.send();

    return xhrCapability.promise;
  }
}
