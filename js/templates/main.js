import artistScreen from './artist-screen';
import genreAnswers from './genre-answer';

const ARTIST_LEVEL = 1;

export default (level) => `
  <div class="main-wrap">
      <h2 class="title main-title">${level.question}</h2>
      ${level.type === ARTIST_LEVEL ? artistScreen(level) : genreAnswers(level.answers)}
    </div>
  </section>`;
