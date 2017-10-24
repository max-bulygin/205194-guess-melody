import assert from 'assert';
import {getScore, answerSetScore10, answerSetScore17} from './game-data.js';
import {getMessage, leaderBoard} from "./game-data";

describe(`getScore`, () => {
  it(`should return 17 with answerSetScore17 array`, () => {
    assert.equal(17, getScore(answerSetScore17, 3));
  });
  it(`should return 10 with answerSetScore10 array`, () => {
    assert.equal(10, getScore(answerSetScore10, 3));
  });
  it(`should return -1 when player gave less than 10 answers`, () => {
    assert.equal(-1, getScore(answerSetScore17.pop(), 3));
  });
});

describe(`getMessage`, () => {
  it(`should return corresponding message when no time left`, () => {
    const message = `Время вышло! Вы не успели отгадать все мелодии`;
    assert.equal(message, getMessage(leaderBoard, {
      score: 2,
      timeLeft: 0,
      notesLeft: 2
    }));
  });
  it(`should return corresponding message when no attempt left`, () => {
    const message = `У вас закончились все попытки. Ничего, повезёт в следующий раз!`;
    assert.equal(message, getMessage(leaderBoard, {
      score: 4,
      timeLeft: 10,
      notesLeft: 0
    }));
  });
  it(`should return corresponding message with player's stats`, () => {
    const message = `Вы заняли 4 место из 6 игроков. Это лучше чем у 33% игроков`;
    assert.equal(message, getMessage(leaderBoard, {
      score: 8,
      timeLeft: 10,
      notesLeft: 1
    }));
  });
  it(`should return correct message when player is first player`, () => {
    const message = `Вы заняли 1 место из 1 игроков. Это лучше чем у 0% игроков`;
    assert.equal(message, getMessage([], {
      score: 8,
      timeLeft: 10,
      notesLeft: 1
    }));
  });
  it(`should return correct message when player gained highest score`, () => {
    const message = `Вы заняли 1 место из 5 игроков. Это лучше чем у 80% игроков`;
    assert.equal(message, getMessage([2, 5, 10, 12], {
      score: 15,
      timeLeft: 10,
      notesLeft: 1
    }));
  });
  it(`should return correct message when player gained lowest score`, () => {
    const message = `Вы заняли 4 место из 4 игроков. Это лучше чем у 0% игроков`;
    assert.equal(message, getMessage([2, 5, 10], {
      score: 1,
      timeLeft: 10,
      notesLeft: 1
    }));
  });
  it(`should return corresponding message with player's stats`, () => {
    const message = `Вы заняли 3 место из 10 игроков. Это лучше чем у 70% игроков`;
    assert.equal(message, getMessage([1, 2, 3, 6, 9, 2, 4, 5, 10], {
      score: 9,
      timeLeft: 10,
      notesLeft: 1
    }));
  });
});
