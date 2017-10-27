/**
 * Игра на выбор жанра
 *
 * @module gameplay/genre
 */

import {stringToElement, getNextScreen, isAnswerPresent} from '../util.js';
import getHeader from '../templates/header';
import getContent from '../templates/main';

export default (data, level) => {
  const html = `
  ${getHeader(data)}
  ${getContent(level)}`;
  const screen = stringToElement(html);
  const checkboxes = Array.from(screen.getElementsByTagName(`input`));
  const submit = screen.querySelector(`.genre-answer-send`);
  checkboxes.map((item) => {
    item.onchange = () => {
      submit.disabled = !isAnswerPresent(checkboxes);
    };
  });

  submit.onclick = (evt) => {
    evt.preventDefault();
    getNextScreen(data, level);
  };

  return screen;
};
