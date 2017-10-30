import artistAnswers from './artist-answer';
import genreAnswers from './genre-answer';
import {ARTIST_LEVEL} from '../data/game-data';
import player from "./player";

export default (level) => {
  const title = `<div class="main-wrap"><h2 class="title main-title">${level.question}</h2>`;
  const footer = `</div></section>`;
  let content;
  if (level.type === ARTIST_LEVEL) {
    content = `
      ${title}
      ${player(level)}
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
