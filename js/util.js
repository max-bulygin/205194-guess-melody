import artist from './gameplay/artist';
import genre from './gameplay/genre';
import loss from './gameplay/loss';
import win from './gameplay/win';
import {ARTIST_LEVEL, SCREENS as screen, MISTAKES_ALLOWED} from "./data/game-data";

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
 * @param {Node} element
 */

export const showScreen = (element) => {
  appContainer.replaceChild(element, appContainer.querySelector(`.main`));
};

/**
 * Функция проверяет выбран ли хотя бы одни ответ на странице
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
    return showScreen(loss(screen.timeout));
  } else if (game.mistakes > MISTAKES_ALLOWED) {
    return showScreen(loss(screen.attempts));
  } else if (game.isComplete) {
    return showScreen(win(screen.winner, game));
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
