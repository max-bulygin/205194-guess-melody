import AbstractView from './view';
import {isAnswerPresent} from '../util';
import {bindPlayerEvents} from "../templates/player";
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
      this.onAnswer(checkboxes, this.data);
    };

    const players = this.element.querySelectorAll(`.player`);
    bindPlayerEvents(players);
  }
  onAnswer() {

  }
}
