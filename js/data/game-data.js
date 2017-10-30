import musicData from './music-data';

const GAME = `Угадай мелодию`;
const QUESTIONS_TOTAL = 10;
const FAST_ANSWER_TIME = 30;
const GAME_INCOMPLETE = -1;
const Answer = {
  WRONG: -2,
  CORRECT: 1,
  FAST: 2
};

export const MISTAKES_ALLOWED = 3;
export const ARTIST_LEVEL = 1;
export const LEVELS = musicData;
export const SCREENS = {
  welcome: {
    title: GAME,
    button: `Начать игру`,
    rules: {
      heading: `Правила игры`,
      text: `Правила просты&nbsp;— за&nbsp;5 минут ответить на все вопросы.<br>
      Ошибиться можно 3 раза.<br>
      Удачи!`
    }
  },
  timeout: {
    title: GAME,
    heading: `Увы и ах!`,
    message: `Время вышло!<br>Вы не успели отгадать все мелодии`,
    button: `Попробовать ещё раз`
  },
  attempts: {
    title: GAME,
    heading: `Какая жалость!`,
    message: `У вас закончились все попытки.<br>Ничего, повезёт в следующий раз!`,
    button: `Попробовать ещё раз`
  },
  winner: {
    title: GAME,
    heading: `Вы настоящий меломан!`,
    stats: null,
    button: `Сыграть ещё раз`
  }
};

export const initialState = {
  result: null,
  time: 300,
  mistakes: 0,
  currentLevel: 0,
  userAnswers: []
};

/**
 * Функция вычисляет количество очков, набранных игроком
 *
 * @param {Array} answers
 * @returns {Number} score
 */

export const getScore = (answers) => {
  let score;
  if (answers.length !== QUESTIONS_TOTAL) {
    score = GAME_INCOMPLETE;
  } else {
    score = answers.reduce((sum, el) => {
      if (!el.correct) {
        sum += Answer.WRONG;
      } else {
        sum += el.time < FAST_ANSWER_TIME ? Answer.FAST : Answer.CORRECT;
      }
      return sum;
    }, 0);
  }
  return score;
};

/**
 * Функция возвращает сообщение игроку по окончании игры
 *
 * @param {Array} leaders
 * @param {Object} player
 * @returns {String} message
 */

export const getMessage = (leaders, player) => {
  let message;
  const playerScore = player.score;
  const stats = [...leaders, playerScore].sort((a, b) => a - b);
  const totalPlayers = stats.length;
  const currentIndex = stats.indexOf(playerScore);
  const place = totalPlayers - currentIndex;
  const percent = ((currentIndex / totalPlayers) * 100).toFixed();
  message = `Вы заняли ${place} место из ${totalPlayers} игроков. Это лучше чем у ${percent}% игроков`;
  return message;
};

/**
 * Функция обрабатывает ответы пользователя
 *
 * @param {Object} data - object with a current game state
 * @param {Boolean} answer - answer given by player
 * @returns {Object} dataUpdate
 */

export const processUserAnswer = (answer, data) => {
  const dataUpdate = JSON.parse(JSON.stringify(data));
  if (answer !== true) {
    dataUpdate.mistakes++;
  }
  dataUpdate.currentLevel++;
  dataUpdate.userAnswers.push({
    correct: answer,
    time: 30
  });
  if (dataUpdate.userAnswers.length === 10) {
    dataUpdate.isComplete = true;
  }
  return dataUpdate;
};

/**
 * Функция считает быстрые ответы пользователя
 */

export const getFastAnswers = (arr) => {
  return arr.reduce((acc, it) => {
    return acc + it.time < FAST_ANSWER_TIME ? 1 : 0;
  }, 0);
};

/**
 * Функция таймера
 *
 * @param {Number} time
 * @returns {Object}
 */

export const timer = (time) => {
  if (time <= 0 || !Number.isInteger(time)) {
    throw new Error(`Parameter must be positive integer number`);
  }
  return {
    value: time,
    tick() {
      if (this.value !== 0) {
        this.value--;
      }
      return this.value !== 0;
    }
  };
};
