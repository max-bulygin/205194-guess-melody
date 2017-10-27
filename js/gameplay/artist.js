/**
 * Игра на выбор исполнителя
 *
 * @module gameplay/artist
 */

import {stringToElement, getNextScreen} from '../util.js';
import getHeader from '../templates/header';
import getContent from '../templates/main';

export default (data, level) => {
  const html = `
  ${getHeader(data)}
  ${getContent(level)}`;
  const screen = stringToElement(html);
  const answersForm = screen.querySelector(`.main-list`);

  answersForm.onclick = (evt) => {
    if (evt.target.className === `main-answer-r`) {
      getNextScreen(data, level);
    }
  };

  return screen;
};
