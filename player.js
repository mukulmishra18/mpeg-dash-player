import EventHandler from './event_handler.js';
import Controller from './controllers/controller.js';
/**
 * @class Player
 */
export default class Player {
  /**
   * @constructs Player
   */
	constructor(video, audio) {
    this._video = video;
    this._audio = audio;
    this._src;
    // Set a fake duration for the video.
    this._duration = 112;

    this._eventHandler = new EventHandler(video, audio);
    this._controller = new Controller(video, audio);
  }

  /**
   * @return {Number} Duration of the video.
   */
  get duration() {
    return this._duration
  }

  /**
   * @return {Boolean} Player in play state.
   */
  get isPlaying() {
    return this._eventHandler.isPlaying;
  }

  /**
   * @return {Boolean} Player in pause state. 
   */
  get isPaused() {
    return this._eventHandler.isPaused;
  }

  /**
   * @return {Number} Current current time of player. 
   */
  get currentTime() {
    return this.video.currentTime;
  }

  /**
   * @return {Null}
   * Starts playback. 
   */
  play() {
    this._video.play();
    this._audio.play();
  }


  /**
   * @return {Null}
   * Pauses playback. 
   */
  pause() {
    this._video.play();
    this._audio.play();
  }

  /**
   * @return {Null}
   * @params {String} New source for video. 
   */
  load(src) {
    this._src = src;
  }


  /**
   * @return {Null}
   * Unload the current video source. 
   */
  unload() {

  }

  /**
   * @return {Null}
   * Destroy current instance of the player. 
   */
  destroy() {

  }

}
