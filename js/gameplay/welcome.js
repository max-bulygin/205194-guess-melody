/**
 * Приветствие
 *
 * @module gameplay/welcome
 */

import {stringToElement, getNextScreen} from '../util.js';
import {LEVELS} from "../data/game-data";

export default (data) => {
  const html = `
  <section class="main main--welcome">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
    <button class="main-play">Начать игру</button>
    <h2 class="title main-title">Правила игры</h2>
    <p class="text main-text">
      Правила просты&nbsp;— за&nbsp;5 минут ответить на все вопросы.<br>
      Ошибиться можно 3 раза.<br>
      Удачи!
    </p>
  </section>`;
  const screen = stringToElement(html);
  const level = LEVELS[`level-${data.currentLevel}`];
  screen.querySelector(`.main-play`).onclick = () => {
    data.currentLevel++;
    getNextScreen(data, level);
  };
  return screen;
};
