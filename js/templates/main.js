import artistAnswers from './artist-answer';
import genreAnswers from './genre-answer';

const ARTIST_LEVEL = 1;

export default (level) => {
  const title = `<div class="main-wrap">
      <h2 class="title main-title">${level.question}</h2>`;
  const footer = `</div></section>`;
  let content;
  if (level.type === ARTIST_LEVEL) {
    content = `
      ${title}
      <div class="player-wrapper">
        <div class="player">
          <audio autoplay src="$\{data.src}"></audio>
          <button class="player-control player-control--pause"></button>
          <div class="player-track">
            <span class="player-status"></span>
          </div>
        </div>
      </div>
      ${artistAnswers(level.answers)}
      ${footer}`;
  } else {
    content = `
      ${title}
      ${genreAnswers(level.answers)}
      ${footer}`;
  }
  return content;
};
