/**
 * Игра на выбор исполнителя
 *
 * @module gameplay/artist
 */

import {processUserAnswer} from "../data/game-data";
import {renderNextScreen} from '../util';
import ArtistView from '../view/artist-view';

const artist = (game, level) => {
  const view = new ArtistView(game, level);
  view.onAnswer = (userAnswerStatus, currentState) => {
    const stateUpdate = processUserAnswer(userAnswerStatus, currentState);
    renderNextScreen(stateUpdate);
  };
  return view;
};

export default artist;
