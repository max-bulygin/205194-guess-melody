const QUESTIONS_TOTAL = 10;
const FAST_ANSWER_TIME = 30;
const MISTAKES_ALLOWED = 3;
const GAME_INCOMPLETE = -1;
const Answer = {
  WRONG: -2,
  CORRECT: 1,
  FAST: 2
};

export const ARTIST_LEVEL = 1;

export const LEVELS = {
  'level-0': {
    type: 1,
    question: `Кто исполняет эту песню?`,
    src: `https://www.youtube.com/audiolibrary_download?vid=dc3b4dc549becd6b`,
    answers: [
      {
        image: `https://yt3.ggpht.com/-fkDeGauT7Co/AAAAAAAAAAI/AAAAAAAAAAA/dkF5ZKkrxRo/s900-c-k-no-mo-rj-c0xffffff/photo.jpg`,
        artist: `Kevin MacLeod`
      },
      {
        image: `https://i.vimeocdn.com/portrait/992615_300x300`,
        artist: `Jingle Punks`
      },
      {
        image: `http://4.bp.blogspot.com/-kft9qu5ET6U/VPFUBi9W-MI/AAAAAAAACYM/UxXilXKYwOc/s1600/audionautix%2BHalf%2BSize.jpg`,
        artist: `Audionautix`
      }
    ]
  },
  'level-2': {
    type: 0,
    question: `Выберите инди-рок треки`,
    answers: [
      {
        src: `https://www.youtube.com/audiolibrary_download?vid=dc3b4dc549becd6b`
      },
      {
        src: `https://www.youtube.com/audiolibrary_download?vid=dc3b4dc549becd6b`
      },
      {
        src: `https://www.youtube.com/audiolibrary_download?vid=dc3b4dc549becd6b`
      },
      {
        src: `https://www.youtube.com/audiolibrary_download?vid=dc3b4dc549becd6b`
      }
    ]
  }
};

export const initialState = {
  time: 300,
  mistakes: 0,
  currentLevel: 0,
  userAnswers: [
    {
      correct: true,
      time: 30
    }]
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
