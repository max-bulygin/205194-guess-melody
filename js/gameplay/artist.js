/**
 * Игра на выбор исполнителя
 *
 * @module gameplay/artist
 */

import {renderNextScreen} from '../util';
import ArtistView from '../view/artist-view';

const artist = (game, level) => {
  const view = new ArtistView(game, level);
  view.onAnswer = (state) => {
    renderNextScreen(state);
  };
  return view;
};

export default artist;
