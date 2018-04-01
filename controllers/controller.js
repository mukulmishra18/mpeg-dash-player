import createMediaSource from '../utils/mediasource_util.js';
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
constructor(video, audio) {
    this._mediaSource = createMediaSource();

    this._audioController = new AudioController();
    this._videoController = new VideoController();

    this._mediaSource.onsourceopen = this._onMediaSourceOpen.bind(this);
    video.src = window.URL.createObjectURL(this._mediaSource);
    audio.src = window.URL.createObjectURL(this._mediaSource);
  }

  _onMediaSourceOpen() {
    this._videoController.onMediaSourceOpen(this._mediaSource);
    this._audioController.onMediaSourceOpen(this._mediaSource);
  }
}
