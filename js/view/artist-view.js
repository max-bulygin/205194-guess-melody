import AbstractView from './view';
import {processUserAnswer} from "../data/game-data";
import getHeader from '../templates/header';
import getContent from '../templates/main';

export default class ArtistView extends AbstractView {
  constructor(data, level) {
    super();
    this.data = data;
    this.level = level;
  }
  get template() {
    return `
    ${getHeader(this.data)}
    ${getContent(this.level)}`.trim();
  }
  bind() {
    const answersForm = this.element.querySelector(`.main-list`);
    answersForm.onclick = (evt) => {
      const target = evt.target;
      if (target.className === `main-answer-r`) {
        const isCorrectAnswer = target.value === `true`;
        const stateUpdate = processUserAnswer(isCorrectAnswer, this.data);
        this.onAnswer(stateUpdate);
      }
    };

    const players = this.element.querySelectorAll(`.player`);
    players.forEach((it) => {
      const track = it.querySelector(`audio`);
      const button = it.querySelector(`button`);
      button.onclick = (evt) =>{
        const target = evt.target;
        evt.preventDefault();
        if (target.classList.contains(`player-control--pause`)) {
          target.classList.remove(`player-control--pause`);
          track.play();
        } else {
          target.classList.add(`player-control--pause`);
          track.pause();
        }
      };
    });
  }
  onAnswer() {

  }
}
