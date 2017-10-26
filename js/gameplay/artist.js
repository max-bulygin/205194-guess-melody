/**
 * Игра на выбор исполнителя
 *
 * @module gameplay/artist
 */

import {stringToElement, showScreen} from '../util.js';
import genre from './genre.js';
import getHeader from '../templates/header';
import getContent from '../templates/main';
import {initialState as initial} from "../data/game-data";

export default (data) => {
  const html = `
  ${getHeader(initial)}
  ${getContent(data)}`;
  const screen = stringToElement(html);
  const answersForm = screen.querySelector(`.main-list`);

  answersForm.onclick = (evt) => {
    if (evt.target.className === `main-answer-r`) {
      showScreen(genre);
    }
  };

  return screen;
};
