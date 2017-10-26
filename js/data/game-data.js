const QUESTIONS_TOTAL = 10;
const FAST_ANSWER_TIME = 30;
const MISTAKES_ALLOWED = 3;
const Score = {
  WRONG_ANSWER: -2,
  CORRECT_ANSWER: 1,
  FAST_ANSWER: 2,
  GAME_OVER: -1
};

export const initialState = {
  time: 300,
  mistakes: 0,
  question: 0
};

const level = {
  question: `Кто исполняет эту песню?`,
  answers: {

  }
}

/**
 * Функция вычисляет количество очков, набранных игроком
 *
 * @param {Array} answers
 * @returns {Number} score
 */

export const getScore = (answers) => {
  let score;
  if (answers.length !== QUESTIONS_TOTAL) {
    score = Score.GAME_OVER;
  } else {
    score = answers.reduce((sum, el) => {
      if (!el.correct) {
        sum += Score.WRONG_ANSWER;
      } else {
        sum += el.time < FAST_ANSWER_TIME ? Score.FAST_ANSWER : Score.CORRECT_ANSWER;
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
  if (player.timeLeft === 0) {
    message = `Время вышло! Вы не успели отгадать все мелодии`;
  } else if (player.mistakes > MISTAKES_ALLOWED) {
    message = `У вас закончились все попытки. Ничего, повезёт в следующий раз!`;
  } else {
    const totalPlayers = stats.length;
    const currentIndex = stats.indexOf(playerScore);
    const place = totalPlayers - currentIndex;
    const percent = ((currentIndex / totalPlayers) * 100).toFixed();
    message = `Вы заняли ${place} место из ${totalPlayers} игроков. Это лучше чем у ${percent}% игроков`;
  }
  return message;
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
