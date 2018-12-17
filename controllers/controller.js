import AudioController from './audio_controller.js';
import VideoController from './video_controller.js';

/**
 * @class Controller.
 * Controls Playback.
 */
export default class Controller {
    /**
     * @constructs Controller.
     */
  constructor(mediaSource, parser) {
    this._mediaSource = mediaSource;
    this._parser = parser;

    this._audioController = new AudioController(this._parser.baseUrl, this._parser.numberOfChunks);
    this._videoController = new VideoController(this._parser.baseUrl, this._parser.numberOfChunks);

    this._mediaSource.onsourceopen = this._onMediaSourceOpen.bind(this);
  }

  /**
   * @return {Null}
   */
  _onMediaSourceOpen() {
    this._videoController.onMediaSourceOpen(this._mediaSource);
    this._audioController.onMediaSourceOpen(this._mediaSource);
  }
}
