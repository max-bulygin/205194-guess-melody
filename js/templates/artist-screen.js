import artists from './artist-answer';

export default (level) => `
  <div class="player-wrapper">
    <div class="player">
      <audio autoplay src="${level.src}"></audio>
      <button class="player-control player-control--pause"></button>
      <div class="player-track">
        <span class="player-status"></span>
      </div>
    </div>
  </div>
  ${artists(level.answers)}`;
