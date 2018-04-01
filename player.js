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

  }

  /**
   * @return {Boolean} Player in pause state. 
   */
  get isPaused() {

  }

  /**
   * @return {Number} Current current time of player. 
   */
  get currentTime() {

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

  destroy() {

  }

}
