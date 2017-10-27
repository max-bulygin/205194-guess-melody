/**
 * Результат игры: проигрыш время вышло
 *
 * @module gameplay/timeout
 */

import {stringToElement, showScreen} from '../util.js';
// import welcome from './welcome';

const html = `
  <section class="main main--result">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>

    <h2 class="title">Увы и ах!</h2>
    <div class="main-stat">Время вышло!<br>Вы не успели отгадать все мелодии</div>
    <span role="button" tabindex="0" class="main-replay">Попробовать ещё раз</span>
  </section>`;

const timeoutScreen = stringToElement(html);
// timeoutScreen.querySelector(`.main-replay`).onclick = () => {
//   showScreen(welcome);
// };

export default timeoutScreen;
