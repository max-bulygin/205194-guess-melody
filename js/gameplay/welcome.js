/**
 * Приветствие
 *
 * @module gameplay/welcome
 */

import {stringToElement, getNextScreen} from '../util';
import {LEVELS, initialState as initial} from "../data/game-data";

export default (content) => {
  const html = `
  <section class="main main--welcome">
    <section class="logo" title="${content.title}"><h1>${content.title}</h1></section>
    <button class="main-play">${content.button}</button>
    <h2 class="title main-title">${content.rules.heading}</h2>
    <p class="text main-text">${content.rules.text}</p>
  </section>`;
  const level = LEVELS[0];
  const game = Object.assign({}, initial);
  const gameScreen = stringToElement(html);
  gameScreen.querySelector(`.main-play`).onclick = () => {
    getNextScreen(game, level);
  };
  return gameScreen;
};
