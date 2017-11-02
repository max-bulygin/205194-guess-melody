import welcome from './gameplay/welcome';
import level from './gameplay/level';
// import newGameScreen from './game/game-screen';
// import resultScreen from './result/result-screen';

export default class Application {

  static showWelcome() {
    welcome.init();
  }

  static showGame() {
    level.init();
  }

  static showStats(model) {
    // resultScreen.init(model);
  }
}
