/**
 * Игра на выбор жанра
 *
 * @module gameplay/genre
 */

import {processUserAnswer, isSelectedCorrect} from "../data/game-data";
import {renderNextScreen} from '../util';
import GenreView from '../view/genre-view';

const genre = (game, level) => {
  const view = new GenreView(game, level);
  view.onAnswer = (checkboxes, currentState) => {
    const isCorrectAnswer = isSelectedCorrect(checkboxes);
    const stateUpdate = processUserAnswer(isCorrectAnswer, currentState);
    renderNextScreen(stateUpdate);
  };
  return view;
};

export default genre;
