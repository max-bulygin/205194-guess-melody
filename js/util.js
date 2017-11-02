import artist from './gameplay/artist';
import genre from './gameplay/genre';
import loss from './gameplay/loss';
import win from './gameplay/win';
import {ARTIST_LEVEL, SCREENS as screen, MISTAKES_ALLOWED, LEVELS} from "./data/game-data";

const SECONDS_PER_MINUTE = 60;
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
 * @param {} view
 */

export const showScreen = (view) => {
  appContainer.replaceChild(view.element, appContainer.querySelector(`.main`));
};

/**
 * Функция проверяет выбран ли хотя бы одни ответ на странице
 *
 * @param {Array} elements
 * @returns {Boolean} isPresent
 */

export const isAnswerPresent = (elements) => {
  return elements.some((element) => {
    return element.checked;
  });
};

/**
 * Функция отвечает за логику отображения экранов
 *
 * @param {Object} game
 * @returns {Function}
 */

export const renderNextScreen = (game) => {
  const level = LEVELS[game.currentLevel];
  if (game.time === 0) {
    return showScreen(loss(screen.timeout));
  }
  if (game.mistakes > MISTAKES_ALLOWED) {
    return showScreen(loss(screen.attempts));
  }
  if (game.isComplete) {
    return showScreen(win(game));
  }
  return level.type === ARTIST_LEVEL ? showScreen(artist(game, level)) : showScreen(genre(game, level));
};

/**
 * Функция возвращает количество минут получая время в секундах
 *
 * @param {Number} time
 * @param {Boolean} leadZero
 * @return {*}
 */

export const getMinutes = (time, leadZero = false) => {
  const minutes = Math.floor(time / SECONDS_PER_MINUTE);
  if (leadZero) {
    return minutes < 10 ? `0${minutes}` : minutes;
  }
  return minutes;
};

/**
 * Функция возвращает остаток секунд получая время в секундах
 *
 * @param {Number} time
 * @param {Boolean} leadZero
 * @return {*}
 */

export const getSeconds = (time, leadZero = false) => {
  const seconds = time % SECONDS_PER_MINUTE;
  if (leadZero) {
    return seconds < 10 ? `0${seconds}` : seconds;
  }
  return seconds;
};
