/**
 * @class EventHandler
 */
export default class EventHandler{
  /**
   * @constructs EventHandler
   */
  constructor(video, audio) {
    this._video = video;
    this._audio = audio;
    this._isPlaying = false;
    this._isPaused = true;

    this._video.addEventListener('play', () => {
      this._audio.play();
      this._isPlaying = true;
      this._isPaused = false;
    });

    this._video.addEventListener('pause', () => {
      this._audio.pause();
      this._isPlaying = false;
      this._isPaused = true;
    });
  }

  /**
   * @return {Boolean} Player in play state.
  */
  get isPlaying() {
    return this._isPlaying;
  }

  /**
   * @return {Boolean} Player in pause state.
  */
  get isPaused() {
    return this._isPaused;
  }
}
