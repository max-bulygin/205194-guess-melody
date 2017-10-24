export const answerSetScore17 = [
  {
    correct: true,
    time: 10
  },
  {
    correct: true,
    time: 20
  },
  {
    correct: true,
    time: 31
  },
  {
    correct: true,
    time: 12
  },
  {
    correct: true,
    time: 13
  },
  {
    correct: true,
    time: 40
  },
  {
    correct: true,
    time: 16
  },
  {
    correct: true,
    time: 30
  },
  {
    correct: true,
    time: 25
  },
  {
    correct: true,
    time: 11
  }
]; // total score 17

export const answerSetScore10 = [
  {
    correct: true,
    time: 31
  },
  {
    correct: true,
    time: 31
  },
  {
    correct: true,
    time: 31
  },
  {
    correct: true,
    time: 31
  },
  {
    correct: true,
    time: 31
  },
  {
    correct: true,
    time: 31
  },
  {
    correct: true,
    time: 31
  },
  {
    correct: true,
    time: 31
  },
  {
    correct: true,
    time: 30
  },
  {
    correct: true,
    time: 31
  }
]; // total score 10

export const leaderBoard = [4, 5, 8, 10, 11];

/**
 * Функция вычисляет количество очков, набранных игроком
 *
 * @param {Array} answers
 * @param {Number} lives
 * @returns {Number} score
 */

export const getScore = (answers, lives) => {
  let score;
  if (lives > 0) {
    if (answers.length !== 10) {
      score = -1;
    } else {
      score = 0;
      answers.map((el) => {
        if (!el.correct) {
          score += -2;
        } else {
          score += el.time < 30 ? 2 : 1;
        }
      });
    }
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
  if (player.timeLeft === 0) {
    message = `Время вышло! Вы не успели отгадать все мелодии`;
  } else if (player.notesLeft === 0) {
    message = `У вас закончились все попытки. Ничего, повезёт в следующий раз!`;
  } else {
    leaders.push(player.score);
    leaders.sort((a, b) => a - b);
    const totalPlayers = leaders.length;
    const currentIndex = leaders.indexOf(player.score);
    const place = totalPlayers - currentIndex;
    const percent = ((currentIndex / totalPlayers) * 100).toFixed();
    message = `Вы заняли ${place} место из ${totalPlayers} игроков. Это лучше чем у ${percent}% игроков`;
  }
  return message;
};
