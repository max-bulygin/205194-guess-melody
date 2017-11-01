/**
 * Игра на выбор жанра
 *
 * @module gameplay/genre
 */

import {processUserAnswer} from "../data/game-data";
import {renderNextScreen} from '../util';
import GenreView from '../view/genre-view';

const genre = (game, level) => {
  const view = new GenreView(game, level);
  view.onAnswer = (userAnswerStatus, currentState) => {
    const stateUpdate = processUserAnswer(userAnswerStatus, currentState);
    renderNextScreen(stateUpdate);
  };
  return view;
};

export default genre;
