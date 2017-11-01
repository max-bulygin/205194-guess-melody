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
  view.onAnswer = (target, currentState) => {
    if (target.className === `main-answer-r`) {
      const isCorrectAnswer = target.value === `true`;
      const stateUpdate = processUserAnswer(isCorrectAnswer, currentState);
      renderNextScreen(stateUpdate);
    }
  };
  return view;
};

export default artist;
