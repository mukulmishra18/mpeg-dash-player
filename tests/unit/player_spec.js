import Player from '../../player.js';

describe('Player', () => {
  let audio = document.createElement('audio');
  let video = document.createElement('video');
  let player = new Player(video, audio);

  it('should create a new Player class', () => {
    expect(typeof player).toEqual('object');
    expect(player instanceof Player).toEqual(true);
    expect(typeof player.play).toEqual('function');
    expect(typeof player.pause).toEqual('function');
    expect(typeof player.load).toEqual('function');
    expect(typeof player.unload).toEqual('function');
    expect(typeof player.destroy).toEqual('function');
  });

  it('should load video src files', () => {
    let mpdUrl = 'https://bitdash-a.akamaihd.net/content/MI201109210084_1/mpds/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.mpd';
    expect(player._src).toEqual(undefined);
    player.load(mpdUrl);
    expect(player._src).toEqual(mpdUrl);
  });

  it('should support basic APIs', () => {
    expect(typeof player.duration).toEqual('number');
    expect(typeof player.isPlaying).toEqual('boolean');
    expect(typeof player.isPaused).toEqual('boolean');
    expect(typeof player.currentTime).toEqual('number');
    expect(typeof player.onReady).toEqual('object');
    expect(player.onReady instanceof window.Promise).toEqual(true);
  });
});
