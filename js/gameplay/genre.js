/**
 * Игра на выбор жанра
 *
 * @module gameplay/genre
 */

import {stringToElement, getNextScreen, isAnswerPresent} from '../util.js';
import getHeader from '../templates/header';
import getContent from '../templates/main';
import {LEVELS, processUserAnswer} from "../data/game-data";
import {playerControls} from "../templates/player";

export default (data, level) => {
  const html = `
  ${getHeader(data)}
  ${getContent(level)}`;
  const gameScreen = stringToElement(html);
  const checkboxes = Array.from(gameScreen.getElementsByTagName(`input`));
  const submit = gameScreen.querySelector(`.genre-answer-send`);
  playerControls(gameScreen);
  checkboxes.map((it) => {
    it.onchange = () => {
      submit.disabled = !isAnswerPresent(checkboxes);
    };
  });
  submit.onclick = (evt) => {
    evt.preventDefault();
    const isSelectedCorrect = checkboxes.reduce((acc, it) => {
      if (it.value === `true`) {
        acc = it.checked;
      }
      return acc;
    }, false);
    const dataUpdate = processUserAnswer(isSelectedCorrect, data);
    getNextScreen(dataUpdate, LEVELS[dataUpdate.currentLevel]);
  };

  return gameScreen;
};
