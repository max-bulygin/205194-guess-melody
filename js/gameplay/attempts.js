/**
 * Результат игры: проигрыш закончились попытки
 *
 * @imports functions stringToElement & showScreen
 * @exports DOM element
 */

import {stringToElement, showScreen} from '../util.js';

const html = `
  <section class="main main--result">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>

    <h2 class="title">Какая жалость!</h2>
    <div class="main-stat">У вас закончились все попытки.<br>Ничего, повезёт в следующий раз!</div>
    <span role="button" tabindex="0" class="main-replay">Попробовать ещё раз</span>
  </section>`;

const attemptsScreen = stringToElement(html);

export default attemptsScreen;
