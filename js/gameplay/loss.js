/**
 * Результат игры: проигрыш время вышло
 *
 * @module gameplay/timeout
 */

import {stringToElement, showScreen} from '../util.js';
import {initialState as initial} from "./data/game-data";
import welcome from './gameplay/welcome';

// import welcome from './welcome';

export default (data) => {
  const html = `
  <section class="main main--result">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>

    <h2 class="title">Увы и ах!</h2>
    <div class="main-stat">Время вышло!<br>Вы не успели отгадать все мелодии</div>
    <span role="button" tabindex="0" class="main-replay">Попробовать ещё раз</span>
  </section>`;

  const screen = stringToElement(html);
  screen.querySelector(`.main-replay`).onclick = () => {
    showScreen(welcome(initial));
  };
};
