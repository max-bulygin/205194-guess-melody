import AbstractView from './view';
import {bindPlayerEvents} from "../templates/player";
import getHeader from '../templates/header';
import getContent from '../templates/main';
import timer from '../timer';
import {getMinutes, getSeconds} from "../util";

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
        this.onAnswer(isCorrectAnswer, this.data);
      }
    };

    const players = this.element.querySelectorAll(`.player`);
    bindPlayerEvents(players);

    const mins = this.element.querySelector(`.timer-value-mins`);
    const secs = this.element.querySelector(`.timer-value-secs`);

    timer.onTick = () => {
      mins.innerHTML = getMinutes(this.data.time - 1, true);
      secs.innerHTML = getSeconds(this.data.time - 1, true);
      this.onTimerTick(this.data);
    };
  }
  onAnswer() {

  }
  onTimerTick() {

  }
}
