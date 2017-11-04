import {showScreen} from '../util';
import LoaderView from "../view/loader-view";
import LossView from "../view/loss-view";
import WinView from "../view/win-view";
import App from '../application';
import {SCREENS, MISTAKES_ALLOWED, TIME_TOTAL, getScore} from "../data/game-data";
import timer from '../timer';
import Loader from '../loader';

class Result {
  init(game) {
    timer.stop();
    this.game = game;
    this.setView();
    showScreen(this.view);
    this.view.onReplay = () => {
      App.showWelcome();
    };
  }

  setView() {
    if (this.game.time === 0) {
      this.view = new LossView(SCREENS.timeout);
    }
    if (this.game.mistakes > MISTAKES_ALLOWED) {
      this.view = new LossView(SCREENS.attempts);
    }
    if (this.game.isComplete) {
      Result.uploadResults({
        time: TIME_TOTAL - this.game.time,
        score: getScore(this.game.userAnswers)
      });
      const that = this;
      Result.getLeaderBoard().
          then((board) => {
            that.view = new WinView(that.game, board);
          });
    }
  }

  static uploadResults(data) {
    Loader.saveResults(data);
  }

  static getLeaderBoard() {
    return Loader.loadResults().then((result) => result.map((it) => it.score));
  }
}

export default new Result();
