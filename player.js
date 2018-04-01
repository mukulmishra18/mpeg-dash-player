import EventHandler from './event_handler.js';
import Controller from './controllers/controller.js';
import Parser from './parser/parser.js';
import createPromiseCapability from './utils/promise_capability.js';
import createMediaSource from './utils/mediasource_util.js';

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
    this._mediaSource = createMediaSource();
    this._readyCapability = createPromiseCapability();
    this._ready = _readyCapability.promise;
    this._src;
    // Set a fake duration for the video.
    this._duration = 112;

    this._eventHandler = new EventHandler(video, audio);
    this._controller;
    this._parser;
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
   * @return {Promise}
   * Resolved when player is ready for playback. 
   */
  get onReady() {
    return this._ready;
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
    this._parser = new Parser(src);
    this._parser.parse().then(() => {
      this._video.src = window.URL.createObjectURL(this._mediaSource);
      this._audio.src = window.URL.createObjectURL(this._mediaSource);

      this._controller = new Controller(this._mediaSource, this._parser);
      this._readyCapability.resolve();
    });
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
