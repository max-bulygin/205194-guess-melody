/**
 * Игра на выбор исполнителя
 *
 * @module gameplay/artist
 */

import {stringToElement, getNextScreen} from '../util';
import getHeader from '../templates/header';
import getContent from '../templates/main';
import {LEVELS, processUserAnswer} from "../data/game-data";
import {playerControls} from "../templates/player";

export default (data, level) => {
  const html = `
  ${getHeader(data)}
  ${getContent(level)}`;
  const gameScreen = stringToElement(html);
  const answersForm = gameScreen.querySelector(`.main-list`);

  playerControls(gameScreen);
  answersForm.onclick = (evt) => {
    if (evt.target.className === `main-answer-r`) {
      const isCorrectAnswer = evt.target.value === `true`;
      const dataUpdate = processUserAnswer(isCorrectAnswer, data);
      getNextScreen(dataUpdate, LEVELS[dataUpdate.currentLevel]);
    }
  };

  return gameScreen;
};
