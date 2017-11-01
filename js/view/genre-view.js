import AbstractView from './view';
import {isAnswerPresent} from '../util';
import {processUserAnswer, isSelectedCorrect} from "../data/game-data";
import getHeader from '../templates/header';
import getContent from '../templates/main';

export default class GenreView extends AbstractView {
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
    const checkboxes = Array.from(this.element.getElementsByTagName(`input`));
    const submit = this.element.querySelector(`.genre-answer-send`);
    checkboxes.forEach((it) => {
      it.onchange = () => {
        submit.disabled = !isAnswerPresent(checkboxes);
      };
    });

    submit.onclick = (evt) => {
      evt.preventDefault();
      const isCorrectAnswer = isSelectedCorrect(checkboxes);
      const stateUpdate = processUserAnswer(isCorrectAnswer, this.data);
      this.onAnswer(stateUpdate);
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
