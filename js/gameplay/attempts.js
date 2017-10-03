/**
 * Результат игры: проигрыш закончились попытки
 *
 * @module gameplay/attempts
 */

import {stringToElement, showScreen} from '../util.js';
import welcome from './welcome';

const html = `
  <section class="main main--result">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>

    <h2 class="title">Какая жалость!</h2>
    <div class="main-stat">У вас закончились все попытки.<br>Ничего, повезёт в следующий раз!</div>
    <span role="button" tabindex="0" class="main-replay">Попробовать ещё раз</span>
  </section>`;

const attemptsScreen = stringToElement(html);
attemptsScreen.querySelector(`.main-replay`).onclick = () => {
  showScreen(welcome);
};

export default attemptsScreen;
