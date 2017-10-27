import welcome from './gameplay/welcome';
import artist from './gameplay/artist';
import genre from './gameplay/genre';
// import success from './gameplay/success';
// import attempts from './gameplay/attempts';
// import timeout from './gameplay/timeout';
import {ARTIST_LEVEL} from "./data/game-data";

const appContainer = document.querySelector(`.app`);

/**
 * Функция принимает строку с разметкой и возвращает DOM элементы
 *
 * @param {String} str
 * @returns {*|Node}
 */

export const stringToElement = (str) => {
  const template = document.createElement(`template`);
  template.innerHTML = str;
  return template.content.firstElementChild;
};

/**
 * Функция принимает DOM элемент и отображает его
 *
 * @param {Node} element
 */

export const showScreen = (element) => {
  appContainer.replaceChild(element, appContainer.querySelector(`.main`));
};

/**
 * Функция проверяет выбран ли хотя бы одни ответ на старнице
 *
 * @param {Array} elements
 * @returns {Boolean} isPresent
 */

export const isAnswerPresent = (elements) => {
  let isPresent = false;

  elements.forEach((element) => {
    if (element.checked) {
      isPresent = true;
    }
  });

  return isPresent;
};

/**
 * Функция отвечает за логику отображения экранов
 *
 * @param {Object} game
 * @param {Object} level
 */

export const getNextScreen = (game, level) => {
  if (game.time === 0) {
    return showScreen(timeout);
  } else if (game.mistakes < 0) {
    return showScreen(attempts);
  }
  return showScreen(artist(game, level));
  // return level.type === ARTIST_LEVEL ? showScreen(artist(game, level)) : showScreen(genre(game, level));
};
