import {initialState as initial} from './data/game-data';
import welcome from './controller/welcome';
import result from './controller/result';
import level from './controller/level';

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

  static init() {
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

Application.init();
