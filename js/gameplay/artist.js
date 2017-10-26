/**
 * Игра на выбор исполнителя
 *
 * @module gameplay/artist
 */

import {stringToElement, showScreen} from '../util.js';
import genre from './genre.js';
import header from '../templates/header';
import main from '../templates/main';
import {initialState as initial, LEVELS} from "../data/game-data";

const html = header(initial) + main(LEVELS[`level-${initial.currentQuestion}`]);

const artistScreen = stringToElement(html);
const answersForm = artistScreen.querySelector(`.main-list`);

answersForm.onclick = (evt) => {
  if (evt.target.className === `main-answer-r`) {
    showScreen(genre);
  }
};

export default artistScreen;
