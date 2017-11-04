import {initialState as initial} from './data/game-data';
import welcome from './controller/welcome';
import result from './controller/result';
import level from './controller/level';
import timer from './timer';
import adapt from './data/data-adapter';
import Loader from './loader';

const ControllerId = {
  WELCOME: ``,
  LEVEL: `level`,
  RESULT: `result`
};

const saveGame = (data) => window.btoa(JSON.stringify(data));
const loadGame = (data) => {
  let output;
  try {
    const decodedData = window.atob(data);
    output = JSON.parse(decodedData);
  } catch (error) {
    output = data;
  }
  return output;
};

export default class Application {

  static load() {
    try {
      Loader.loadData().
          then(adapt).
          then((levels) => {
            Application.init(levels);
          });
    } catch (e) {
      // splash.showError(e.message);
      console.log(e.message);
    } finally {
      // splash.stop();
    }
  }

  static init(levels) {
    this.levels = levels;

    Application.routes = {
      [ControllerId.WELCOME]: welcome,
      [ControllerId.LEVEL]: level,
      [ControllerId.RESULT]: result
    };

    const hashChangeHandler = () => {
      const hashValue = location.hash.replace(`#`, ``);
      const [id, data] = hashValue.split(`=`);
      Application.changeHash(id, loadGame(data));
    };
    window.onhashchange = hashChangeHandler;
    hashChangeHandler();

    timer.start();
  }

  static changeHash(id, data) {
    const controller = Application.routes[id];
    if (controller) {
      controller.init(data);
    }
  }

  static showWelcome() {
    location.hash = ControllerId.WELCOME;
  }

  static showLevel(state = Object.assign({}, initial)) {
    location.hash = `${ControllerId.LEVEL}=${saveGame(state)}`;
  }

  static showResult(game) {
    location.hash = `${ControllerId.RESULT}=${saveGame(game)}`;
  }
}
