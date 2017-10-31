export const player = (audio) => `
  <div class="player-wrapper">
    <div class="player">
      <audio
        src="${audio.src}"
        preload="auto"></audio>
      <button class="player-control player-control--pause"></button>
      <div class="player-track">
        <span class="player-status"></span>
      </div>
    </div>
  </div>`;

export const bindPlayerEvents = (node) => {
  const players = node.querySelectorAll(`.player`);
  players.forEach((it) => {
    const track = it.querySelector(`audio`);
    const button = it.querySelector(`button`);
    button.onclick = function (evt) {
      evt.preventDefault();
      if (this.classList.contains(`player-control--pause`)) {
        this.classList.remove(`player-control--pause`);
        track.play();
      } else {
        this.classList.add(`player-control--pause`);
        track.pause();
      }
    };
  });
};
