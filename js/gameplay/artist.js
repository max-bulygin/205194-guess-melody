/**
 * Игра на выбор исполнителя
 *
 * @module gameplay/artist
 */

import {processUserAnswer} from "../data/game-data";
import {renderNextScreen} from '../util';
import ArtistView from '../view/artist-view';
import timer from '../timer';

const artist = (game, level) => {
  let answerTime = 0;
  const view = new ArtistView(game, level);
  view.onAnswer = (userAnswerStatus, currentState) => {
    const stateUpdate = processUserAnswer(userAnswerStatus, currentState, answerTime);
    renderNextScreen(stateUpdate);
  };
  view.onTimerTick = (state) => {
    state.time = timer.time - 1;
    answerTime++;
  };
  return view;
};

export default artist;
