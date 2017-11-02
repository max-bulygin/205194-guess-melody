import {processUserAnswer} from "../data/game-data";
import {renderNextScreen, showScreen} from '../util';
// import GenreView from '../view/genre-view';
import ArtistView from '../view/artist-view';
import timer from '../timer';

class Level {
  constructor(game, level) {
    this.game = game;
    this.level = level;
    this.view = new ArtistView(this.game, this.level);
  }

  init() {
    let answerTime = 0;
    showScreen(this.view);
    this.view.onAnswer = (userAnswerStatus, currentState) => {
      const stateUpdate = processUserAnswer(userAnswerStatus, currentState, answerTime);
      renderNextScreen(stateUpdate);
    };
    this.view.onTimerTick = (state) => {
      state.time = timer.time - 1;
      answerTime++;
    };
  }
}

export default new Level();

// export default (game, level) => {
//   let answerTime = 0;
//   const view = new GenreView(game, level);
//   view.onAnswer = (userAnswerStatus, currentState) => {
//     const stateUpdate = processUserAnswer(userAnswerStatus, currentState, answerTime);
//     renderNextScreen(stateUpdate);
//   };
//   view.onTimerTick = (state) => {
//     state.time = timer.time - 1;
//     answerTime++;
//   };
//   return view;
// };
