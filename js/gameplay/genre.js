/**
 * Игра на выбор жанра
 *
 * @module gameplay/genre
 */

import {renderNextScreen} from '../util';
import GenreView from '../view/genre-view';

const genre = (game, level) => {
  const view = new GenreView(game, level);
  view.onAnswer = (state) => {
    renderNextScreen(state);
  };
  return view;
};

export default genre;
